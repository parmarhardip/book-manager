<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$layout_style = 'gridview';

if ( $attributes['styles'] && 'list' === $attributes['styles']['layout'] ) {
	$layout_style = 'listview';
}

$post_args = array(
	'posts_per_page' => 10,
	'paged'          => 1,
	'order'          => 'desc',
	'orderby'        => 'date',
	'post_type'      => 'book',
	'post_status'    => 'publish',
	'search'         => '',
);

if ( $attributes['settings'] ) {
	if ( $attributes['settings']['search'] ) {
		$post_args['search'] = $attributes['settings']['search'];
	}
	if ( $attributes['settings']['perPage'] ) {
		$post_args['posts_per_page'] = $attributes['settings']['perPage'];
	}
	if ( $attributes['settings']['currentPage'] ) {
		$post_args['paged'] = $attributes['settings']['currentPage'];
	}
	if ( $attributes['settings']['order'] ) {
		$post_args['order'] = $attributes['settings']['order'];
	}
	if ( $attributes['settings']['orderBy'] ) {
		$post_args['orderby'] = $attributes['settings']['orderBy'];
	}
}

$wp_posts = new WP_Query( $post_args );

?>
<div
	<?php
	echo get_block_wrapper_attributes();
	?>
>
	<div class="container">
		<div class="gridlist-container">
			<div class="gridlist <?php echo esc_attr( $layout_style ); ?>">
				<?php
				if ( $wp_posts->have_posts() ) {
					while ( $wp_posts->have_posts() ) {
						$wp_posts->the_post();
						$featured_img = get_the_post_thumbnail_url( get_the_ID(), 'full' );
						$featured_img = $featured_img ? $featured_img : 'https://via.placeholder.com/150';
						?>
						<div class="item is-collapsed">
							<div class="item-container ">
								<div class="item-cover">
									<div class="avatar">
										<img src="<?php echo esc_url( $featured_img ); ?>" alt="avatar"/>
									</div>
								</div>
								<div class="item-content">
									<a class="subhead-1 activator" href="<?php echo esc_url( get_the_permalink() ); ?>">
										<?php echo esc_html( get_the_title() ); ?>
									</a>
								</div>
							</div>
						</div>
						<?php
					}
				}
				wp_reset_postdata();
				?>
			</div>
		</div>
	</div>
</div>

