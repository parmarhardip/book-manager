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

use Book_Manager\Book_Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Constants
require_once plugin_dir_path( __FILE__ ) . 'constants.php';
require_once plugin_dir_path( __FILE__ ) . 'class-book-manager.php';

// Register activation hook
register_activation_hook( __FILE__, array( 'Book_Manager', 'activation_hook' ) );
// Register deactivation hook
register_deactivation_hook( __FILE__, array( 'Book_Manager', 'deactivation_hook' ) );

if ( ! defined( 'BOOK_MANAGER_VERSION' ) ) {
	return;
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
