<?php
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
			Book_Manager\Main::get_instance();

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
