<?php

$nonce = wp_create_nonce( 'add_book_nonce' );
?>
<form id="add-book-form" enctype="multipart/form-data">
    <p>
        <label for="name"><?php esc_html_e( 'Your Name:', 'book-manager' ); ?></label>
        <input type="text" id="name" name="name" required>
    </p>
    <p>
        <label for="email"><?php esc_html_e( 'Your Email:', 'book-manager' ); ?></label>
        <input type="email" id="email" name="email" required>
    </p>
    <p>
        <label for="book_title"><?php esc_html_e( 'Book Title:', 'book-manager' ); ?></label>
        <input type="text" id="book_title" name="book_title" required>
    </p>
    <p>
        <label for="book_description"><?php esc_html_e( 'Book Description:', 'book-manager' ); ?></label>
		<?php
		$content   = '';
		$editor_id = 'book_description';
		$settings  = array(
			'textarea_name' => 'book_description',
			'media_buttons' => false,
			'textarea_rows' => 10,
			'tinymce'       => array(
				'toolbar1' => 'bold,italic,underline,link,unlink,bullist,numlist,blockquote',
				'toolbar2' => '',
			),
		);
		wp_editor( $content, $editor_id, $settings );
		?>
    </p>
    <p>
        <label for="book_image"><?php esc_html_e( 'Book Front Image:', 'book-manager' ); ?></label>
        <input type="file" id="book_image" name="book_image" accept="image/*" required>
    </p>
    <p>
        <input type="hidden" name="add_book_nonce" value="<?php echo esc_attr( $nonce ); ?>">
        <button class="submit-button" type="submit"><?php esc_html_e( 'Submit', 'book-manager' ); ?></button>
    </p>
    <div id="book-form-response"></div>
</form>