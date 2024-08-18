<?php

namespace Book_Manager;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Import the WP_List_Table class if not already included.
if ( ! class_exists( 'WP_List_Table' ) ) {
	require_once ABSPATH . 'wp-admin/includes/class-wp-list-table.php';
}

/**
 * Requested Books Table Class
 */
class Requested_Books_Table extends \WP_List_Table {

	/**
	 * Class constructor
	 */
	public function __construct() {
		parent::__construct(
			array(
				'singular' => 'book',
				'plural'   => 'books',
				'ajax'     => false,
			)
		);
	}

	/**
	 * Prepare the items for the table to process
	 */
	public function prepare_items() {
		$this->_column_headers = array(
			$this->get_columns(),
			array(),
			$this->get_sortable_columns(),
		);

		$per_page     = $this->get_items_per_page( 'books_per_page', 10 );
		$current_page = $this->get_pagenum();
		$total_items  = $this->get_hidden_books_count();

		$this->set_pagination_args(
			array(
				'total_items' => $total_items,
				'per_page'    => $per_page,
			)
		);

		$this->items = $this->get_hidden_books( $per_page, $current_page );
	}

	/**
	 * Gets the columns for the table.
	 */
	public function get_columns() {
		return array(
			'cb'      => '<input type="checkbox" />',
			'title'   => __( 'Title', 'book-manager' ),
			'author'  => __( 'Author', 'book-manager' ),
			'date'    => __( 'Date', 'book-manager' ),
			'actions' => __( 'Actions', 'book-manager' ),
		);
	}

	/**
	 * Gets the sortable columns.
	 */
	protected function get_sortable_columns() {
		return array(
			'title' => array( 'title', true ),
			'date'  => array( 'date', true ),
		);
	}

	/**
	 * Default column method.
	 *
	 * @param array  $item        An array of book data.
	 * @param string $column_name The name of the column to display.
	 *
	 * @return string
	 */
	protected function column_default( $item, $column_name ) {
		switch ( $column_name ) {
			case 'author':
				$author_name = get_post_meta( $item['ID'], '_book_author_name', true );

				return esc_html( $author_name );
			case 'date':
				return esc_html( $item['date'] );
			default:
				return print_r( $item, true );
		}
	}

	protected function column_title( $item ) {
		return sprintf(
			'<a href="%1$s"><strong>%2$s</strong></a>',
			get_edit_post_link( $item['ID'] ),
			$item['title'],
		);
	}

	/**
	 * Handles the checkbox column.
	 *
	 * @param array $item An array of book data.
	 *
	 * @return string
	 */
	protected function column_cb( $item ) {
		return sprintf(
			'<input type="checkbox" name="book[]" value="%s" />',
			esc_attr( $item['ID'] )
		);
	}

	/**
	 * Handles the actions column.
	 *
	 * @param array $item An array of book data.
	 *
	 * @return string
	 */
	protected function column_actions( $item ) {
		$approve_url = wp_nonce_url(
			add_query_arg(
				array(
					'action' => 'approve_book',
					'book_id'   => $item['ID'],
				),
				admin_url( 'admin-post.php' )
			),
			'approve_book_' . $item['ID']
		);

		$reject_url = wp_nonce_url(
			add_query_arg(
				array(
					'action' => 'reject_book',
					'book_id'   => $item['ID'],
				),
				admin_url( 'admin-post.php' )
			),
			'reject_book_' . $item['ID']
		);

		return sprintf(
			'<a href="%1$s">%2$s</a> | <a href="%3$s" onclick="return confirm(\'%5$s\');">%4$s</a>',
			esc_url( $approve_url ),
			esc_html__( 'Approve', 'book-manager' ),
			esc_url( $reject_url ),
			esc_html__( 'Reject', 'book-manager' ),
			esc_html__( 'Are you sure you want to reject this book?', 'book-manager' )
		);
	}

	/**
	 * Fetches the books with a 'hidden' post status.
	 *
	 * @param int $per_page     Number of books per page.
	 * @param int $current_page Current page number.
	 *
	 * @return array
	 */
	protected function get_hidden_books( $per_page, $current_page ) {
		$args = array(
			'post_type'      => 'book',
			'post_status'    => 'hidden',
			'posts_per_page' => $per_page,
			'paged'          => $current_page,
		);

		$query = new \WP_Query( $args );

		$books = array();

		foreach ( $query->posts as $post ) {
			$books[] = array(
				'ID'     => $post->ID,
				'title'  => $post->post_title,
				'author' => get_the_author_meta( 'display_name', $post->post_author ),
				'date'   => get_the_date( '', $post->ID ),
			);
		}

		return $books;
	}

	/**
	 * Gets the total count of books with 'hidden' status.
	 *
	 * @return int
	 */
	protected function get_hidden_books_count() {
		$args = array(
			'post_type'      => 'book',
			'post_status'    => 'hidden',
			'posts_per_page' => - 1,
		);

		$query = new \WP_Query( $args );

		return $query->found_posts;
	}
}