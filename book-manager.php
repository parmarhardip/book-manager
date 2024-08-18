<?php
/**
 * Plugin Name: Book Manager
 * Plugin URI: https://example.com/book-manager
 * Description: Book Manager is a simple WordPress plugin that allows you to manage books.
 * Version: 1.0.0
 * Author: Hardip
 * Author URI: https://example.com
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: book-manager
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Constants
require_once plugin_dir_path( __FILE__ ) . 'constants.php';

// Register activation hook
register_activation_hook( __FILE__, array( 'Book_Manager', 'activation_hook' ) );
// Register deactivation hook
register_deactivation_hook( __FILE__, array( 'Book_Manager', 'deactivation_hook' ) );

if ( ! defined( 'BOOK_MANAGER_VERSION' ) ) {
	return;
}

/**
 * Main class of Book Manager.
 */
if ( ! class_exists( 'Book_Manager' ) ) {

	/**
	 * Class Book_Manager
	 */
	class Book_Manager {

		/**
		 * The instance of the class.
		 *
		 * @var Book_Manager
		 */
		private static $instance;

		/**
		 * Return the plugin instance
		 *
		 * @since 1.0
		 * @return Book_Manager
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
			$this->init();
			$this->load_textdomain();
		}

		/**
		 * Include required files
		 */
		public function includes() {
			require_once BOOK_MANAGER_INCLUDES_DIR_PATH . 'class-main.php';
		}

		/**
		 * Initialize the plugin
		 */
		public function init() {
			// Initialize plugin core
			Book_Manager_Main::get_instance();

			/**
			 * Triggered when plugin is loaded
			 */
			do_action( 'book_manager_loaded' );
		}

		/**
		 * Load the plugin text domain
		 */
		public function load_textdomain() {
			load_plugin_textdomain( 'book-manager', false, BOOK_MANAGER_LANGUAGES_DIR_PATH );
		}


		/**
		 * Activation hook
		 */
		public static function activation_hook() {
		}

		/**
		 * Deactivation hook
		 */
		public static function deactivation_hook() {
		}

	}
}


if ( ! function_exists( 'book_manager' ) ) {
	/**
	 * Get the instance of the Book_Manager class
	 *
	 * @since 1.0
	 * @return Book_Manager
	 */
	function book_manager() {
		return Book_Manager::get_instance();
	}

	/**
	 * Init the plugin and load the plugin instance
	 *
	 * @since 1.0
	 */
	add_action( 'plugins_loaded', 'book_manager' );
}
