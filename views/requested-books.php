	<div class="wrap">
		<h1 class="wp-heading inline"><?php esc_html_e( 'Requested Books', 'book-manager' ); ?></h1>
		<hr class="wp-header-end">
		<?php
		$requested_books_table = new Book_Manager\Requested_Books_Table();
		$requested_books_table->prepare_items();
		$requested_books_table->display();
		?>
	</div>
<?php

