<?php

$args = array(
	'post_type'      => 'book',
	'post_status'    => 'publish',
	'posts_per_page' => 10,
);

if ( ! empty( $atts['category'] ) ) {
	$args['tax_query'] = array(
		array(
			'taxonomy' => 'category',
			'field'    => 'slug',
			'terms'    => $atts['category'],
		),
	);
} elseif ( isset( $atts['id'] ) ) {
	$args['p'] = $atts['id'];
}

$books = new WP_Query( $args );
if ( $books->have_posts() ) {
	while ( $books->have_posts() ) {
		$books->the_post();
		?>
		<div class="book-listing">
			<h2><?php the_title(); ?></h2>
			<div class="book-content">
				<?php the_content(); ?>
			</div>
			<div class="book-meta">
				<?php
				$author_name  = get_post_meta( get_the_ID(), '_book_author_name', true );
				$author_email = get_post_meta( get_the_ID(), '_book_author_email', true );

				if ( ! empty( $author_name ) ) {
					?>
					<span class="author">
						<?php esc_html_e( 'Author:', 'book-manager' ); ?>
						<?php echo esc_html( $author_name ); ?>
					</span>
					<?php
				}

				if ( ! empty( $author_email ) ) {
					?>
					<span class="email">
						<?php esc_html_e( 'Email:', 'book-manager' ); ?>
						<?php echo esc_html( $author_email ); ?>
					</span>
					<?php
				}
				?>
			</div>
			<div class="book-image">
				<?php the_post_thumbnail( 'medium' ); ?>
			</div>
		</div>
		<?php
	}
}
wp_reset_postdata();
