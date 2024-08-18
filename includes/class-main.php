<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

/**
 * Class Book_Manager_Main
 * Main class of Book Manager.
 */
class Book_Manager_Main {

	/**
	 * The instance of the class.
	 *
	 * @var Book_Manager_Main
	 */
	private static $instance;

	/**
	 * Return the plugin instance
	 *
	 * @since 1.0
	 * @return Book_Manager_Main
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
		$this->includes();
		$this->setup_hooks();

		if ( is_admin() ) {
			// Initialize admin core.
			Book_Manager_Admin::get_instance();
		}

		// Initialize frontend core.
		Book_Manager_FrontEnd::get_instance();
	}

	/**
	 * Include required files
	 */
	public function includes() {
		// Admin classes includes.
		include_once BOOK_MANAGER_INCLUDES_DIR_PATH . 'admin/class-admin.php';
		include_once BOOK_MANAGER_INCLUDES_DIR_PATH . 'admin/class-requested-books-table.php';
		// Frontend classes includes.
		include_once BOOK_MANAGER_INCLUDES_DIR_PATH . 'frontend/class-frontend.php';
	}

	/**
	 * Initialize the plugin
	 */
	public function setup_hooks() {
		add_action( 'init', array( $this, 'main_init' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_block_editor_assets' ) );
		add_action( 'enqueue_block_assets', array( $this, 'enqueue_block_editor_assets' ) );
		add_filter( 'rest_prepare_book', array( $this, 'rest_prepare_book' ), 10, 3 );
	}

	/**
	 * Load the init
	 */
	public function main_init() {
		$this->register_post_type();
		$this->block_init();
	}

	/**
	 * Register post type
	 */
	public function register_post_type() {
		$labels = array(
			'name'                  => _x( 'Books', 'Post Type General Name', 'book-manager' ),
			'singular_name'         => _x( 'Book', 'Post Type Singular Name', 'book-manager' ),
			'menu_name'             => __( 'Books', 'book-manager' ),
			'name_admin_bar'        => __( 'Book', 'book-manager' ),
			'archives'              => __( 'Book Archives', 'book-manager' ),
			'attributes'            => __( 'Book Attributes', 'book-manager' ),
			'parent_item_colon'     => __( 'Parent Book:', 'book-manager' ),
			'all_items'             => __( 'All Books', 'book-manager' ),
			'add_new_item'          => __( 'Add New Book', 'book-manager' ),
			'add_new'               => __( 'Add New', 'book-manager' ),
			'new_item'              => __( 'New Book', 'book-manager' ),
			'edit_item'             => __( 'Edit Book', 'book-manager' ),
			'update_item'           => __( 'Update Book', 'book-manager' ),
			'view_item'             => __( 'View Book', 'book-manager' ),
			'view_items'            => __( 'View Books', 'book-manager' ),
			'search_items'          => __( 'Search Book', 'book-manager' ),
			'items_list'            => __( 'Books list', 'book-manager' ),
			'items_list_navigation' => __( 'Books list navigation', 'book-manager' ),
			'filter_items_list'     => __( 'Filter books list', 'book-manager' ),
		);
		$args   = array(
			'label'               => __( 'Book', 'book-manager' ),
			'description'         => __( 'A custom post type for books', 'book-manager' ),
			'labels'              => $labels,
			'supports'            => array( 'title', 'editor', 'thumbnail', 'custom-fields' ),
			'hierarchical'        => false,
			'public'              => true,
			'show_ui'             => true,
			'show_in_menu'        => false,
			'menu_position'       => 5,
			'show_in_admin_bar'   => true,
			'show_in_nav_menus'   => true,
			'can_export'          => true,
			'has_archive'         => true,
			'exclude_from_search' => false,
			'publicly_queryable'  => true,
			'show_in_rest'        => true,
			'capability_type'     => 'post',
		);
		register_post_type( 'book', $args );

		$args = array(
			'label'                     => _x( 'Hidden', 'book-manager' ),
			'public'                    => false,
			'internal'                  => true,
			'show_in_admin_all_list'    => false,
			'show_in_admin_status_list' => false,
			'exclude_from_search'       => true,
		);
		register_post_status( 'hidden', $args );

		$args = array(
			'label'                     => _x( 'Rejected', 'book-manager' ),
			'public'                    => true,
			'internal'                  => true,
			'show_in_admin_all_list'    => true,
			'show_in_admin_status_list' => true,
			'exclude_from_search'       => true,
			'label_count'               => _n_noop( 'Rejected <span class="count">(%s)</span>', 'Rejected <span class="count">(%s)</span>', 'book-manager' ),
		);
		register_post_status( 'rejected', $args );
	}

	/**
	 * Register block
	 */
	public function block_init() {
		register_block_type( BOOK_MANAGER_ROOT_ASSETS_DIR_PATH . '/build' );
	}

	/**
	 * Enqueue block assets
	 */
	public function enqueue_block_editor_assets() {
		$asset_file = include( BOOK_MANAGER_ROOT_ASSETS_DIR_PATH . 'build/index.asset.php' );

		wp_enqueue_script(
			'book-manager-block-editor',
			BOOK_MANAGER_ROOT_ASSETS_URL_PATH . 'build/index.js',
			$asset_file['dependencies'],
			$asset_file['version']
		);

		wp_localize_script(
			'book-manager-block-editor',
			'bookManager',
			array(
				'nonce' => wp_create_nonce( 'wp_rest' ),
			)
		);
	}

	/**
	 * Prepare book data for REST API
	 *
	 * @param WP_REST_Response $response The response object.
	 * @param WP_Post          $post     The original post object.
	 * @param WP_REST_Request  $request  Request used to generate the response.
	 *
	 * @return WP_REST_Response
	 */
	public function rest_prepare_book( $response, $post, $request ) {
		$data = $response->get_data();

		$feature_img = get_the_post_thumbnail_url( $post->ID, 'full' );

		$data['featured_image'] = $feature_img;

		$response->set_data( $data );

		return $response;
	}

}
