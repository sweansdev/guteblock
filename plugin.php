<?php 
/**
 * Plugin Name: Guteblock - Ultimate Gutenberg Blocks Plugin
 * Plugin URI: https://www.guteblock.com/
 * Description: Guteblock is an exquisite collection of blocks redefining the use of Gutenberg (the brand-new WordPress Block Editor)
 * Author: Sweans
 * Author URI: https://www.sweans.com/
 * Version: 1.0.5
 * Text Domain: guteblock
 * Tested up to: 5.3
 * License: GPL3
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package GUTEBLOCK
 */

if(!defined('ABSPATH')) {
	exit;
}

function guteblock_categories($categories, $post) {
	return array_merge(
		$categories, 
		array(
			array(
				'slug' => 'guteblock',
				'title' => __('Guteblock', 'guteblock'),
				'icon' => 'wordpress'
			)
		)
	);
}
add_filter('block_categories', 'guteblock_categories', 10, 2);

function guteblock_register_block_type($block, $options = array()) {
	register_block_type(
		'guteblock/'.$block, 
		array_merge(
			array(
				'editor_script' => 'guteblock-editor-script',
				'editor_style' => 'guteblock-editor-style',
				'script' => 'guteblock-script',
				'style' => 'guteblock-style',
			),
			$options
		)
	);
}

$post_grid_attributes = array(
	'numberofposts' => array(
		'type' => 'number',
		'default' => 2
	),
	'postCategories' => array(
		'type' => 'string'
	),
	'columns' => array(
		'type' => 'number',
		'default' => 3
	),
	'align' => array(
		'type' => 'string',
		'default' => 'wide'
	),
	'alignment' => array(
		'type' => 'string',
		'default' => 'center'
	),
	'numberofwords' => array(
		'type' => 'number',
		'default' => 20
	)
);

$newsletter_attr_json = '{"title":{"type":"string","source":"html","selector":"h4","default":""},"bgColor":{"type":"string","default":"#f1fbff"},"bgColorTwo":{"type":"string","default":"transparent"},"borderLeftRadius":{"type":"number","default":0},"borderRightRadius":{"type":"number","default":0},"align":{"type":"string","default":"wide"},"alignment":{"type":"string","default":"center"},"buttonTitle":{"type":"string","source":"html","selector":"span","default":"Subscribe"},"verticalOuterPadding":{"type":"number","default":25},"horizontalOuterPadding":{"type":"number","default":15},"verticalInnerPadding":{"type":"number","default":15},"horizontalPadding":{"type":"number","default":15},"inputBackgroundColor":{"type":"string","default":"#3c3c3c"},"inputTextColor":{"type":"string","default":"#cecece"},"inputTextFontWeight":{"type":"string","default":"normal"},"inputTextTransform":{"type":"string","default":"none"},"buttonBackgroundColor":{"type":"string","default":"#21ade5"},"buttonBackgroundColorTwo":{"type":"string","default":"#eae03d"},"buttonTextColor":{"type":"string","default":"#ffffff"},"fontSize":{"type":"number","default":14},"buttonTextFontWeight":{"type":"string","default":"normal"},"buttonTextTransform":{"type":"string","default":"none"},"buttonLetterSpacing":{"type":"number","default":0},"borderTopLeftRadius":{"type":"number","default":100},"borderBottomLeftRadius":{"type":"number","default":100},"borderBottomLeftRadiusTwo":{"type":"number","default":0},"buttonHorizontalPadding":{"type":"number","default":25},"icon":{"type":"string","default":"arrow-right-alt"},"iconColor":{"type":"string","default":"#fffff"},"iconSize":{"type":"number","default":15},"hoverButtonBackgroundColor":{"type":"string"},"hoverButtonTextColor":{"type":"string"}}';

$attr_array = json_decode($newsletter_attr_json, true);
$newsletter_attributes = [];

foreach($attr_array as $key => $attr) {
	$newsletter_attributes[$key]['type'] = $attr["type"];
	$newsletter_attributes[$key]['default'] = $attr["default"];
}

add_action('init', 'guteblock_register');
function guteblock_register() {

	wp_register_script(
		'guteblock-editor-script',
		plugins_url('dist/editor.js', __FILE__),
		array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components', 'lodash', 'wp-blob', 'wp-data', 'wp-html-entities','jquery')
	);

	wp_register_style(
		'guteblock-editor-style',
		plugins_url('dist/editor.css', __FILE__),
		array('wp-edit-blocks')
	);

	wp_register_script(
		'guteblock-script',
		plugins_url('dist/script.js', __FILE__),
		array('jquery')
	);

	wp_localize_script( 'guteblock-script', 'guteblock', array( 'ajaxurl' => admin_url( 'admin-ajax.php' )));

	wp_register_style(
		'guteblock-style',
		plugins_url('dist/style.css', __FILE__),
		array()
	);

	guteblock_register_block_type('team-member');
	guteblock_register_block_type('team-members');
	guteblock_register_block_type('container');
	guteblock_register_block_type('drop-cap');
	guteblock_register_block_type('testimonial');
	guteblock_register_block_type('number-box');
	guteblock_register_block_type('separator');
	
	guteblock_register_block_type('post-grid', array(
		'render_callback' => 'guteblock_render_post_grid_block',
		'attributes' => $post_grid_attributes
	));

	guteblock_register_block_type('newsletter', array(
		'render_callback' => 'guteblock_render_newsletter_block',
		'attributes' => $newsletter_attributes
	));
	
}

/* Ajax Call in Nwsletter */
add_action("wp_ajax_guteblock_newsletter_submit", "guteblock_newsletter_submit");
add_action("wp_ajax_nopriv_guteblock_newsletter_submit", "guteblock_newsletter_submit");

function guteblock_newsletter_submit() {
	
	echo $_POST["email"];

	$data = [
		'email'     => $_POST["email"],
		'status'    => 'subscribed'
	];
	
	$apiKey = '3401cf84f0f45ff90988a242a7ab5ade-us4';
	$listId = 'c0f7c8f8df';

	$memberId = md5(strtolower($data['email']));
	$dataCenter = substr($apiKey,strpos($apiKey,'-')+1);
	$url = 'https://' . $dataCenter . '.api.mailchimp.com/3.0/lists/' . $listId . '/members/' . $memberId;

	$json = json_encode([
		'email_address' => $data['email'],
		'status'        => $data['status']
	]);

	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $apiKey);
	curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_TIMEOUT, 10);
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
	$result = curl_exec($ch);
	$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
	curl_close($ch);

	return $httpCode;
		
	exit();

}
function guteblock_render_newsletter_block($attributes) {

	return "testing";	


}

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