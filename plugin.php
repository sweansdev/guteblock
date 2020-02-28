<?php 
/**
 * Plugin Name: Guteblock - Ultimate Gutenberg Blocks Plugin
 * Plugin URI: https://www.guteblock.com/
 * Description: Guteblock is an exquisite collection of blocks redefining the use of Gutenberg (the brand-new WordPress Block Editor)
 * Author: Sweans
 * Author URI: https://www.sweans.com/
 * Version: 1.0.6
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

$newsletter_attr_json = '{"title":{"type":"string","source":"html","selector":"h4","default":""},"bgColor":{"type":"string","default":"#f1fbff"},"bgColorTwo":{"type":"string","default":"transparent"},"borderLeftRadius":{"type":"number","default":0},"borderRightRadius":{"type":"number","default":0},"align":{"type":"string","default":"wide"},"alignment":{"type":"string","default":"center"},"buttonTitle":{"type":"string","source":"html","selector":"span","default":"Subscribe"},"verticalOuterPadding":{"type":"number","default":25},"horizontalOuterPadding":{"type":"number","default":15},"verticalInnerPadding":{"type":"number","default":15},"horizontalPadding":{"type":"number","default":15},"inputBackgroundColor":{"type":"string","default":"#3c3c3c"},"inputTextColor":{"type":"string","default":"#cecece"},"inputTextFontWeight":{"type":"string","default":"normal"},"inputTextTransform":{"type":"string","default":"none"},"buttonBackgroundColor":{"type":"string","default":"#21ade5"},"buttonBackgroundColorTwo":{"type":"string","default":"#eae03d"},"buttonTextColor":{"type":"string","default":"#ffffff"},"fontSize":{"type":"number","default":14},"buttonTextFontWeight":{"type":"string","default":"normal"},"buttonTextTransform":{"type":"string","default":"none"},"buttonLetterSpacing":{"type":"number","default":0},"borderTopLeftRadius":{"type":"number","default":100},"borderBottomLeftRadius":{"type":"number","default":100},"borderBottomLeftRadiusTwo":{"type":"number","default":0},"buttonHorizontalPadding":{"type":"number","default":25},"icon":{"type":"string","default":"arrow-right-alt"},"iconColor":{"type":"string","default":"#fffff"},"iconSize":{"type":"number","default":15},"hoverButtonBackgroundColor":{"type":"string"},"hoverButtonTextColor":{"type":"string"},"doubleOptIn":{"type":"boolean","default":0}}';

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
		'subscriber_status'     => $_POST["status"],
		// 'status'    => 'subscribed'
	];
	
	$apiKey = '3401cf84f0f45ff90988a242a7ab5ade-us4';
	$listId = 'c0f7c8f8df';

	$memberId = md5(strtolower($data['email']));
	$dataCenter = substr($apiKey,strpos($apiKey,'-')+1);
	$url = 'https://' . $dataCenter . '.api.mailchimp.com/3.0/lists/' . $listId . '/members/' . $memberId;

	if($data['subscriber_status'] == 0 ) {
		$status = "subscribed";
	}
	else {
		$status = "pending";
	}
	$json = json_encode([
		'email_address' => $data['email'],
		'status'        => $status
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

	if(isset($attributes['bgColor'])) {
		$bgColor = $attributes['bgColor'];
	} else {
		$bgColor ="#f1fbff";
	}
	if(isset($attributes['bgColorTwo'])) {
		$bgColorTwo = $attributes['bgColorTwo'];
	} else {
		$bgColorTwo ="transparent";
	}
	if(isset($attributes['alignment'])) {
		$alignment = $attributes['alignment'];
	} else {
		$alignment ="center";
	}
	if(isset($attributes['horizontalOuterPadding'])) {
		$horizontalOuterPadding = $attributes['horizontalOuterPadding'];
	} else {
		$horizontalOuterPadding = 15;
	}
	if(isset($attributes['verticalOuterPadding'])) {
		$verticalOuterPadding = $attributes['verticalOuterPadding'];
	} else {
		$verticalOuterPadding =25;
	}
	if(isset($attributes['horizontalPadding'])) {
		$horizontalPadding = $attributes['horizontalPadding'];
	} else {
		$horizontalPadding =15;
	}
	if(isset($attributes['fontSize'])) {
		$fontSize = $attributes['fontSize'];
	} else {
		$fontSize =14;
	}
	if(isset($attributes['buttonHorizontalPadding'])) {
		$buttonHorizontalPadding = $attributes['buttonHorizontalPadding'];
	} else {
		$buttonHorizontalPadding =15;
	}
	if(isset($attributes['verticalInnerPadding'])) {
		$verticalInnerPadding = $attributes['verticalInnerPadding'];
	} else {
		$verticalInnerPadding =15;
	}
	if(isset($attributes['inputTextTransform'])) {
		$inputTextTransform = $attributes['inputTextTransform'];
	} else {
		$inputTextTransform ="none";
	}
	if(isset($attributes['inputTextFontWeight'])) {
		$inputTextFontWeight = $attributes['inputTextFontWeight'];
	} else {
		$inputTextFontWeight ="normal";
	}
	if(isset($attributes['borderLeftRadius'])) {
		$borderLeftRadius = $attributes['borderLeftRadius'];
	} else {
		$borderLeftRadius = 0;
	}
	if(isset($attributes['borderRightRadius'])) {
		$borderRightRadius = $attributes['borderRightRadius'];
	} else {
		$borderRightRadius = 0;
	}
	if(isset($attributes['inputBackgroundColor'])) {
		$inputBackgroundColor = $attributes['inputBackgroundColor'];
	} else {
		$inputBackgroundColor = "#3c3c3c";
	}
	if(isset($attributes['inputTextColor'])) {
		$inputTextColor = $attributes['inputTextColor'];
	} else {
		$inputTextColor = "#cecece";
	}
	if(isset($attributes['buttonBackgroundColor'])) {
		$buttonBackgroundColor = $attributes['buttonBackgroundColor'];
	} else {
		$buttonBackgroundColor = "#21ade5";
	}
	if(isset($attributes['buttonBackgroundColorTwo'])) {
		$buttonBackgroundColorTwo = $attributes['buttonBackgroundColorTwo'];
	} else {
		$buttonBackgroundColorTwo = "#eae03d";
	}
	if(isset($attributes['buttonTextColor'])) {
		$buttonTextColor = $attributes['buttonTextColor'];
	} else {
		$buttonTextColor = "#ffffff";
	}
	if(isset($attributes['buttonTextFontWeight'])) {
		$buttonTextFontWeight = $attributes['buttonTextFontWeight'];
	} else {
		$buttonTextFontWeight = "normal";
	}
	if(isset($attributes['buttonTextTransform'])) {
		$buttonTextTransform = $attributes['buttonTextTransform'];
	} else {
		$buttonTextTransform = "none";
	}
	if(isset($attributes['buttonLetterSpacing'])) {
		$buttonLetterSpacing = $attributes['buttonLetterSpacing'];
	} else {
		$buttonLetterSpacing = 0;
	}
	if(isset($attributes['borderTopLeftRadius'])) {
		$borderTopLeftRadius = $attributes['borderTopLeftRadius'];
	} else {
		$borderTopLeftRadius = 100;
	}
	if(isset($attributes['borderBottomLeftRadius'])) {
		$borderBottomLeftRadius = $attributes['borderBottomLeftRadius'];
	} else {
		$borderBottomLeftRadius = 100;
	}
	if(isset($attributes['borderBottomLeftRadiusTwo'])) {
		$borderBottomLeftRadiusTwo = $attributes['borderBottomLeftRadiusTwo'];
	} else {
		$borderBottomLeftRadiusTwo = 0;
	}
	if(isset($attributes['buttonHorizontalPadding'])) {
		$buttonHorizontalPadding = $attributes['buttonHorizontalPadding'];
	} else {
		$buttonHorizontalPadding = 25;
	}
	if(isset($attributes['buttonTitle'])) {
		$buttonTitle = $attributes['buttonTitle'];
	} else {
		$buttonTitle = "Subscribe";
	}
	if(isset($attributes['icon'])) {
		$icon = $attributes['icon'];
	} else {
		$icon = "arrow-right-alt";
	}
	if(isset($attributes['hoverButtonTextColor'])) {
		$hoverButtonTextColor = $attributes['hoverButtonTextColor'];
	} else {
		$hoverButtonTextColor =" ";
	}
	if(isset($attributes['hoverButtonBackgroundColor'])) {
		$hoverButtonBackgroundColor = $attributes['hoverButtonBackgroundColor'];
	} else {
		$hoverButtonBackgroundColor =" ";
	}
	if(isset($attributes['styleIs'])) {
		$styleIs = $attributes['styleIs'];
	} else {
		$styleIs =1;
	}
	if(isset($attributes['doubleOptIn'])) {
		$doubleOptIn = $attributes['doubleOptIn'];
	} else {
		$doubleOptIn =0;
	}
	if ( $attributes['styleIs'] == 3 ) {
		$btnBottomLeftThreeOne = $borderBottomLeftRadiusTwo;
	}
	else{
		$btnBottomLeftThreeOne = $borderBottomLeftRadius;
	}
	if ( $attributes['styleIs'] ==1 ) {
		$bg = $bgColor;
	}
	else{
		$bg = $bgColorTwo;
	}
	if ( $attributes['styleIs'] == 2 ) {
		$TopLeft = 100;
	}
	else{
		$TopLeft = $borderLeftRadius;
	}
	if ( $attributes['styleIs'] != 1 ) {
		$btnTopLeft = 0;
	}
	else{
		$btnTopLeft = $borderTopLeftRadius;
	}
	if ( $attributes['styleIs'] == 2 ) {
		$btnBottomLeft = 30;
	}
	else{
		$btnBottomLeft = $btnBottomLeftThreeOne;
	}
	if ( $attributes['styleIs'] == 3 ) {
		$placehoderThreeOne = "Subscribe Now";
	}
	else{
		$placehoderThreeOne = "Enter Your Email Id";
	}
	if ( $attributes['styleIs'] == 2 ) {
		$placeholder = "Your mail Id goes here...";
	}
	else{
		$placeholder = $placehoderThreeOne;
	}
	if ( $attributes['styleIs'] == 1 ) {
		$r = $borderRightRadius;
	}
	else{
		$r = 0;
	}
	
	$balancedPaddingRight = $horizontalOuterPadding + 4.5 * $fontSize + 2 * $buttonHorizontalPadding;
	$newsletter .= '<div class="wp-block-guteblock-newsletter align'.$attributes['align'].' is-style-'.$attributes['styleIs'].' align-'.$alignment.'" 
	style="background-color:'.$bg.';
	padding-left:'.$horizontalOuterPadding.'px;
	padding-right:'.$horizontalOuterPadding.'px;
	padding-top:'.$verticalOuterPadding.'px;
	padding-bottom:'.$verticalOuterPadding.'px;
	text-align:'.$attributes['alignment'].'">';
	
	$newsletter .= '<div class="wp-block-guteblock-newsletter__container" 
	style="width: 90%;
    position: relative;
    display: inline-block;
    overflow: hidden;">';
		$newsletter .= '<form action="" method="post" class="newsletterSubmit">';
			$newsletter .= 	'<input type="text" placeholder="'.$placeholder.'" class="wp-block-guteblock-newsletter__input" style="
			padding-left: '.$horizontalPadding.'px;
			padding-right:'.$balancedPaddingRight.'px;
			padding-top:'.$verticalInnerPadding.'px;
			padding-bottom:'.$verticalInnerPadding.'px;
			text-transform:'.$inputTextTransform.';
			font-weight:'.$inputTextFontWeight.';
			border-top-left-radius:'.$TopLeft.'px;
			border-bottom-left-radius:'.$TopLeft.'px;
			border-top-right-radius:'.$r.'px;
			border-bottom-right-radius:'.$r.'px;
			color:'.$inputTextColor.';
			font-size:'.$fontSize.'px;
			background-color:'.$inputBackgroundColor.';
			border: none;
			">';
			$newsletter .= '<input type="hidden" value="'.$doubleOptIn.'" class="wp-block-guteblock-newsletter__hiddeninput">';
			$newsletter .= '<button type="submit"  target="_blank"  rel="noopener noreferrer" class="wp-block-guteblock-newsletter-inner" 
			onMouseover="this.style.backgroundColor=#fhjjj";
			style="padding-left:'.$buttonHorizontalPadding.'px;
			padding-right:'.$buttonHorizontalPadding.'px;
			text-decoration:none;
			padding-top:'.$verticalInnerPadding.'px;
			padding-bottom:'.$verticalInnerPadding.'px;
			border-top-left-radius:'.$btnTopLeft.'px;
			border-bottom-left-radius:'.$btnBottomLeft.'px;
			border-top-right-radius:'.$r.'px;
			border-bottom-right-radius:'.$r.'px;
			background-color:'.$buttonBackgroundColor.';
			text-tranform:'.$buttonTextTransform.';
			font-weight:'.$buttonTextFontWeight.';
			letter-spacing:'.$buttonLetterSpacing.'px;
			border: none;
			color: '.$buttonTextColor.';
			font-size: '.$fontSize.'px;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;">';
			if ( $attributes['styleIs'] != 3 ) {
					$newsletter .= '<span>'.$buttonTitle.'</span>';
			}
			else if( $attributes['styleIs'] == 3 ) {
				$newsletter .= '<span class="dashicons dashicons-'.$icon.'" style="font-size: '.$fontSize.'px; width:'.$fontSize.'px;height:'.$fontSize.'px;"></span>';
			}
			$newsletter .= '</button>';
		$newsletter .= '</form>';
	$newsletter .= '</div>';
	$newsletter .= '</div>';
	return $newsletter;


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