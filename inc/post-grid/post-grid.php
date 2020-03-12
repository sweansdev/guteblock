<?php

function guteblock_render_post_grid_block($attributes) {
	$args = array(
		'posts_per_page' => $attributes['numberofposts']
	);
	if(isset($attributes['postCategories'])) {
		$args['cat'] = $attributes['postCategories'];
	}

	if(isset($attributes['title_fontsize'])) {
		$title_fontsize = $attributes['title_fontsize'];
	} else {
		$title_fontsize = 23;
	}

	if(isset($attributes['content_fontsize'])) {
		$content_fontsize = $attributes['content_fontsize'];
	} else {
		$content_fontsize = 14;
	}

	$query = new WP_Query($args);
	if($query->have_posts()) {
		$posts = '<div class="wp-block-guteblock-post-grid align'.$attributes['align'].' align-'.$attributes['alignment'].' has-'.$attributes['columns'].'-columns">';
		while($query->have_posts()) {
			$query->the_post();
			$posts .= '<div class="wp-block-guteblock-post-grid__single-post">';
			$posts .= get_the_post_thumbnail();
			$posts .= '<h4 style="font-size: '.$title_fontsize.'px;"><a href="'. esc_url(get_the_permalink()) . '">'. get_the_title() . '</a></h4><div style="font-size: '.$content_fontsize.'px;">';
			$excerpt = str_replace("[&hellip;]", "", get_the_excerpt());
			$posts .= implode(' ', array_slice(explode(' ', $excerpt), 0, $attributes['numberofwords']));
			$posts .= '</div></div>';
		}
		$posts .= '</div>';
		wp_reset_postdata();
	} else {
		$posts = '<div>'. __('No Posts Found', 'guteblock') . '</div>';
	}
	return $posts;	
}