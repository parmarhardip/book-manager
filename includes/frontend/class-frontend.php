<?php

/**
 * The frontend class of Book Manager.
 *
 * @package    Book_Manager
 * @subpackage Frontend
 */

namespace Book_Manager;

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

/**
 * Class Book_Manager_FrontEnd
 * Frontend class of Book Manager.
 */
class FrontEnd {

	/**
	 * The instance of the class.
	 *
	 * @var FrontEnd
	 */
	private static $instance;

	/**
	 * Return the plugin instance
	 *
	 * @since 1.0
	 * @return FrontEnd
	 */
	public static function get_instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Constructor
	 */
	public function __construct() {
		$this->init();
	}

	/**
	 * Initialize the plugin
	 */
	public function init() {
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		add_shortcode( 'add_book', array( $this, 'add_book_shortcode' ) );
		add_shortcode( 'book_list', array( $this, 'book_list_shortcode' ) );

		add_action( 'wp_ajax_submit_book_form', array( $this, 'submit_book_form' ) );
		add_action( 'wp_ajax_nopriv_submit_book_form', array( $this, 'submit_book_form' ) );
	}

	/**
	 * Enqueue scripts and styles
	 */
	public function enqueue_scripts() {
		wp_enqueue_style( 'book-manager-frontend', BOOK_MANAGER_ROOT_ASSETS_URL_PATH . 'css/frontend.css', array(), BOOK_MANAGER_VERSION );
		wp_enqueue_script( 'book-manager-frontend', BOOK_MANAGER_ROOT_ASSETS_URL_PATH . 'js/frontend.js', array( 'jquery' ), BOOK_MANAGER_VERSION, true );
		wp_localize_script(
			'book-manager-frontend',
			'bookManagerFrontend',
			array(
				'ajax_url' => admin_url( 'admin-ajax.php' ),
				'error'    => __( 'Something went wrong. Please try again.', 'book-manager' ),
			)
		);
	}

	/**
	 * Book Manager Shortcode
	 */
	public function add_book_shortcode( $atts ) {
		ob_start();
		include BOOK_MANAGER_ROOT_VIEW_DIR_PATH . '/templates/add-book.php';

		return ob_get_clean();
	}

	/**
	 * Book Listing Shortcode
	 */
	public function book_list_shortcode( $atts ) {
		ob_start();
		include BOOK_MANAGER_ROOT_VIEW_DIR_PATH . '/templates/book-list.php';

		return ob_get_clean();
	}

	/**
	 * Submit Book Form
	 */
	public function submit_book_form() {
		if ( ! isset( $_POST['add_book_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['add_book_nonce'] ) ), 'add_book_nonce' ) ) {
			wp_send_json_error( array( 'message' => __( 'Nonce verification failed', 'book-manager' ) ) );
		}

		$name             = sanitize_text_field( $_POST['name'] );
		$email            = sanitize_email( $_POST['email'] );
		$book_title       = sanitize_text_field( $_POST['book_title'] );
		$book_description = wp_kses_post( $_POST['book_description'] );

		if ( empty( $name ) || empty( $email ) || empty( $book_title ) || empty( $book_description ) ) {
			wp_send_json_error( array( 'message' => __( 'All fields are required', 'book-manager' ) ) );
		}

		$book_title       = sanitize_text_field( wp_unslash( $_POST['book_title'] ) );
		$book_description = wp_kses_post( wp_unslash( $_POST['book_description'] ) );
		$book_image_url   = '';

		// Handle file upload
		if ( ! function_exists( 'wp_handle_upload' ) ) {
			require_once ABSPATH . 'wp-admin/includes/file.php';
		}

		// Handle image upload
		if ( isset( $_FILES['book_image'] ) && ! empty( $_FILES['book_image']['name'] ) ) {
			$file   = $_FILES['book_image'];
			$upload = wp_handle_upload( $file, array( 'test_form' => false ) );
			if ( ! isset( $upload['error'] ) && isset( $upload['url'] ) ) {
				$book_image_url = esc_url_raw( $upload['url'] );
			} else {
				wp_send_json_error( array( 'message' => __( 'Image upload failed', 'book-manager' ) ) );
			}
		}

		// Insert the book post
		$new_post = array(
			'post_title'   => $book_title,
			'post_content' => $book_description,
			'post_status'  => 'hidden',
			'post_type'    => 'book',
			'meta_input'   => array(
				'_book_author_name'  => $name,
				'_book_author_email' => $email,
			),
		);

		$post_id = wp_insert_post( $new_post );

		if ( $post_id ) {
			// If image uploaded, set as post thumbnail
			if ( ! empty( $book_image_url ) ) {
				$attachment_id = wp_insert_attachment(
					array(
						'guid'           => $book_image_url,
						'post_mime_type' => ! empty( $upload ) ? $upload['type'] : 'image/jpeg',
						'post_title'     => ! empty( $file['name'] ) ? sanitize_file_name( $file['name'] ) : '',
						'post_content'   => '',
						'post_status'    => 'inherit',
					),
					! empty( $upload['file'] ) ? $upload['file'] : $book_image_url,
					$post_id
				);

				require_once ABSPATH . 'wp-admin/includes/image.php';
				$attach_data = wp_generate_attachment_metadata( $attachment_id, ! empty( $upload['file'] ) ? $upload['file'] : $book_image_url );
				wp_update_attachment_metadata( $attachment_id, $attach_data );
				set_post_thumbnail( $post_id, $attachment_id );
			}

			wp_send_json_success( array( 'message' => __( 'Book submitted successfully', 'book-manager' ) ) );
		} else {
			wp_send_json_error( array( 'message' => __( 'Error creating book', 'book-manager' ) ) );
		}

		wp_die();
	}
}
