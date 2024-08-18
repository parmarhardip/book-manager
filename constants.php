<?php
/**
 * The plugin constants.
 *
 * @package    Book_Manager
 * @subpackage Constants
 */

/**
 * Internal constants, not to be overridden
 */
if ( ! defined( 'BOOK_MANAGER_VERSION' ) ) {
	define( 'BOOK_MANAGER_VERSION', '1.0.0' );
}

if ( ! defined( 'BOOK_MANAGER_PLUGIN_DIR_PATH' ) ) {
	define( 'BOOK_MANAGER_PLUGIN_DIR_PATH', plugin_dir_path( __FILE__ ) );
}

if ( ! defined( 'BOOK_MANAGER_PLUGIN_URL_PATH' ) ) {
	define( 'BOOK_MANAGER_PLUGIN_URL_PATH', plugin_dir_url( __FILE__ ) );
}

if ( ! defined( 'BOOK_MANAGER_INCLUDES_DIR_PATH' ) ) {
	define( 'BOOK_MANAGER_INCLUDES_DIR_PATH', BOOK_MANAGER_PLUGIN_DIR_PATH . 'includes/' );
}

if ( ! defined( 'BOOK_MANAGER_ROOT_VIEW_DIR_PATH' ) ) {
	define( 'BOOK_MANAGER_ROOT_VIEW_DIR_PATH', BOOK_MANAGER_PLUGIN_DIR_PATH . 'views/' );
}

if ( ! defined( 'BOOK_MANAGER_ROOT_ASSETS_DIR_PATH' ) ) {
	define( 'BOOK_MANAGER_ROOT_ASSETS_DIR_PATH', BOOK_MANAGER_PLUGIN_DIR_PATH . 'assets/' );
}

if ( ! defined( 'BOOK_MANAGER_ROOT_ASSETS_URL_PATH' ) ) {
	define( 'BOOK_MANAGER_ROOT_ASSETS_URL_PATH', BOOK_MANAGER_PLUGIN_URL_PATH . 'assets/' );
}

if ( ! defined( 'BOOK_MANAGER_LANGUAGES_DIR_PATH' ) ) {
	define( 'BOOK_MANAGER_LANGUAGES_DIR_PATH', BOOK_MANAGER_PLUGIN_DIR_PATH . 'languages/' );
}
