<?php
/**
 * The admin class of Book Manager.
 *
 * @package    Book_Manager
 * @subpackage Admin
 */

namespace Book_Manager;

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

/**
 * Class Admin
 */
class Admin {

	/**
	 * The instance of the class.
	 *
	 * @var Admin
	 */
	private static $instance;

	/**
	 * Return the plugin instance
	 *
	 * @since 1.0
	 * @return Admin
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
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		add_action( 'admin_menu', array( $this, 'admin_menu' ) );
		add_filter( 'parent_file', array( $this, 'set_current_menu' ) );
		add_filter( 'submenu_file', array( $this, 'set_sub_menu' ) );

		add_action( 'admin_post_approve_book', array( $this, 'handle_approve_book' ) );
		add_action( 'admin_post_reject_book', array( $this, 'handle_reject_book' ) );
		add_action( 'admin_notices', array( $this, 'book_manager_admin_notices' ) );
	}

	/**
	 * Enqueue scripts and styles
	 */
	public function enqueue_scripts() {
		wp_enqueue_style( 'book-manager-admin', BOOK_MANAGER_ROOT_ASSETS_URL_PATH . 'css/admin.css', array(), BOOK_MANAGER_VERSION );
	}

	/**
	 * Add admin menu
	 */
	public function admin_menu() {
		add_menu_page(
			__( 'Book Manager', 'book-manager' ),
			__( 'Book Manager', 'book-manager' ),
			'manage_options',
			'book-manager',
			array( $this, 'book_manager' ),
			'dashicons-book-alt',
			6
		);

		add_submenu_page(
			'book-manager',
			__( 'All Books', 'book-manager' ),
			__( 'All Books', 'book-manager' ),
			'manage_options',
			'edit.php?post_type=book',
		);

		add_submenu_page(
			'book-manager',
			__( 'Requested Books', 'book-manager' ),
			__( 'Requested Books', 'book-manager' ),
			'manage_options',
			'requested-books',
			array( $this, 'requested_books' )
		);
	}

	/**
	 * Set current menu.
	 */
	public function set_current_menu( $parent_file ) {
		global $current_screen;

		if ( 'book' === $current_screen->post_type ) {
			$parent_file = 'book-manager';
		}

		return $parent_file;
	}

	/**
	 * Set sub menu.
	 */
	public function set_sub_menu() {
		global $submenu_file, $pagenow;

		$post_type = ! empty( $_GET['post_type'] ) ? sanitize_text_field( wp_unslash( $_GET['post_type'] ) ) : ''; //phpcs:ignore WordPress.Security.NonceVerification.Recommended

		if ( 'edit.php' === $pagenow && 'book' === $post_type ) {
			$submenu_file = 'edit.php?post_type=book';
		}

		if ( 'post-new.php' === $pagenow && 'book' === $post_type ) {
			$submenu_file = 'edit.php?post_type=book';
		}

		return $submenu_file;
	}

	/**
	 * Book Manager page
	 */
	public function book_manager( $atts ) {
		include_once BOOK_MANAGER_ROOT_VIEW_DIR_PATH . 'book-manager.php';
	}

	/**
	 * Requested Books page
	 */
	public function requested_books() {
		include_once BOOK_MANAGER_ROOT_VIEW_DIR_PATH . 'requested-books.php';
	}

	/**
	 * Handle approve book
	 */
	public function handle_approve_book() {
		// Validate and sanitize book ID
		$book_id = isset( $_GET['book_id'] ) ? intval( $_GET['book_id'] ) : 0;

		// Verify nonce
		if ( empty( $book_id ) && ! wp_verify_nonce( $_GET['_wpnonce'], 'approve_book_' . $book_id ) ) {
			wp_die( __( 'Nonce verification failed', 'book-manager' ) );
		}

		if ( $book_id ) {
			// Update post status to publish
			wp_update_post(
				array(
					'ID'          => $book_id,
					'post_status' => 'publish',
				)
			);

			// Send approval email to author
			$email    = get_post_meta( $book_id, '_book_author_email', true );
			$name     = get_post_meta( $book_id, '_book_author_name', true );
			$post_url = get_permalink( $book_id );

			$subject = __( 'Your Book Has Been Approved!', 'book-manager' );
			// translators: %1$s: author name, %2$s: post URL
			$message = sprintf( __( 'Hello %1$s, your book has been approved! You can view it here: %2$s', 'book-manager' ), $name, $post_url );

			$sent = wp_mail( $email, $subject, $message );

			// Optionally, store email sent status
			update_post_meta( $book_id, '_book_author_email', $sent );

			// Redirect with success message
			wp_redirect( add_query_arg( array( 'message' => 'book_approved' ), admin_url( 'admin.php?page=requested-books' ) ) );
			exit;
		}
	}

	/**
	 * Handle reject book
	 */
	public function handle_reject_book() {
		// Validate and sanitize book ID
		$book_id = isset( $_GET['book_id'] ) ? intval( $_GET['book_id'] ) : 0;

		// Verify nonce
		if ( empty( $book_id ) && ! wp_verify_nonce( $_GET['_wpnonce'], 'reject_book_' . $book_id ) ) {
			wp_die( __( 'Nonce verification failed', 'book-manager' ) );
		}

		if ( $book_id ) {
			// Update post status to rejected (custom status or delete)
			wp_update_post(
				array(
					'ID'          => $book_id,
					'post_status' => 'rejected', // Use a custom post status or 'trash' to delete
				)
			);

			$email = get_post_meta( $book_id, '_book_author_email', true );
			$name  = get_post_meta( $book_id, '_book_author_name', true );

			$subject = __( 'Your Book Submission Has Been Rejected', 'book-manager' );
			// translators: %s: author name
			$message = sprintf( __( 'Hello %s, we are sorry to inform you that your book submission has been rejected.', 'book-manager' ), $name );

			$sent = wp_mail( $email, $subject, $message );

			if ( is_wp_error( $sent ) || false === $sent ) {
				update_post_meta( $book_id, '_book_author_email', $sent );
			}
			// Optionally redirect back with a success message
			wp_redirect( add_query_arg( array( 'message' => 'book_rejected' ), admin_url( 'admin.php?page=requested-books' ) ) );
			exit;
		}

		wp_redirect( admin_url( 'admin.php?page=requested-books' ) );
		exit;
	}

	/**
	 * Admin notices
	 */
	public function book_manager_admin_notices() {
		if ( isset( $_GET['message'] ) ) {
			switch ( $_GET['message'] ) {
				case 'book_approved':
					?>
					<div class="notice notice-success is-dismissible">
						<p><?php _e( 'The book has been successfully approved.', 'book-manager' ); ?></p>
					</div>
					<?php
					break;

				case 'book_rejected':
					?>
					<div class="notice notice-warning is-dismissible">
						<p><?php _e( 'The book has been successfully rejected.', 'book-manager' ); ?></p>
					</div>
					<?php
					break;
				// You can add more cases here for other messages.
			}
		}
	}
}
