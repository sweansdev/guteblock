<?php 
/**
 * Plugin Name: Guteblock - Ultimate Gutenberg Blocks Plugin
 * Plugin URI: https://guteblock.com/
 * Description: Guteblock is an exquisite collection of blocks redefining the use of Gutenberg (the brand-new WordPress Block Editor)
 * Author: Sweans
 * Author URI: https://www.sweans.com/
 * Version: 1.0.10
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

$plugin_directory = plugin_dir_url(__FILE__);
require_once( plugin_dir_path(__FILE__) . '/inc/settings/settings.php' );

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

	$main_script_dependancy = array('jquery');

	$guteblock_recaptcha_site_key = get_option( 'guteblock_recaptcha_site_key' );
	$guteblock_recaptcha_secret_key = get_option( 'guteblock_recaptcha_secret_key' );

	if ( ! (empty( $guteblock_recaptcha_site_key ) && empty( $guteblock_recaptcha_secret_key ))) {

		wp_register_script('google-recaptcha','https://www.google.com/recaptcha/api.js?render=' . esc_attr( $guteblock_recaptcha_site_key ));
		$main_script_dependancy = array('jquery', 'google-recaptcha');

	}

	wp_register_script(
		'guteblock-script',
		plugins_url('dist/script.js', __FILE__),
		$main_script_dependancy
	);

	$guteblock_recaptcha_site_key = get_option( 'guteblock_recaptcha_site_key' );
	wp_localize_script( 'guteblock-script', 'guteblock', array( 'ajaxurl' => admin_url( 'admin-ajax.php' ), 'siteurl' => get_bloginfo( 'url' ), 'recaptcha_site_key' => $guteblock_recaptcha_site_key));

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
	
	guteblock_register_block_type('post-grid', array(
		'render_callback' => 'guteblock_render_post_grid_block',
		'attributes' => $post_grid_attributes
	));

	$newsletter_attributes = array(
		"title" => array(
			"type" => "string",
			"default" => ""
		),
		"bgColor" => array(
			"type" => "string",
			"default" => "#f1fbff"
		),
		"bgColorTwo" => array(
			"type" => "string",
			"default" => "transparent"
		),
		"borderLeftRadius" => array(
			"type" => "number",
			"default" => 0
		),
		"borderRightRadius" => array(
			"type" => "number",
			"default" => 0
		),
		"align" => array(
			"type" => "string",
			"default" => "wide"
		),
		"alignment" => array(
			"type" => "string",
			"default" => "center"
		),
		"buttonTitle" => array(
			"type" => "string",
			"default" => "Subscribe"
		),
		"verticalOuterPadding" => array(
			"type" => "number",
			"default" => 25
		),
		"horizontalOuterPadding" => array(
			"type" => "number",
			"default" => 15
		),
		"verticalInnerPadding" => array(
			"type" => "number",
			"default" => 15
		),
		"horizontalPadding" => array(
			"type" => "number",
			"default" => 15
		),
		"inputBackgroundColor" => array(
			"type" => "string",
			"default" => "#3c3c3c"
		),
		"inputTextColor" => array(
			"type" => "string",
			"default" => "#cecece"
		),
		"inputTextFontWeight" => array(
			"type" => "string",
			"default" => "normal"
		),
		"inputTextTransform" => array(
			"type" => "string",
			"default" => "none"
		),
		"buttonBackgroundColor" => array(
			"type" => "string",
			"default" => "#21ade5"
		),
		"buttonBackgroundColorTwo" => array(
			"type" => "string",
			"default" => "#eae03d"
		),
		"buttonTextColor" => array(
			"type" => "string",
			"default" => "#ffffff"
		),
		"fontSize" => array(
			"type" => "number",
			"default" => 14
		),
		"buttonTextFontWeight" => array(
			"type" => "string",
			"default" => "normal"
		),
		"buttonTextTransform" => array(
			"type" => "string",
			"default" => "none"
		),
		"buttonLetterSpacing" => array(
			"type" => "number",
			"default" => 0
		),
		"borderTopLeftRadius" => array(
			"type" => "number",
			"default" => 100
		),
		"borderBottomLeftRadius" => array(
			"type" => "number",
			"default" => 100
		),
		"borderBottomLeftRadiusTwo" => array(
			"type" => "number",
			"default" => 0
		),
		"buttonHorizontalPadding" => array(
			"type" => "number",
			"default" => 25
		),
		"icon" => array(
			"type" => "string",
			"default" => "arrow-right-alt"
		),
		"iconColor" => array(
			"type" => "string",
			"default" => "#fffff"
		),
		"iconSize" => array(
			"type" => "number",
			"default" => 15
		),
		"hoverButtonBackgroundColor" => array(
			"type" => "string",
			"default" => ""
		),
		"hoverButtonTextColor" => array(
			"type" => "string",
			"default" => ""
		),
		"doubleOptIn" => array(
			"type" => "boolean",
			"default" => 0
		)
	);

	guteblock_register_block_type('newsletter', array(
		'render_callback' => 'guteblock_render_newsletter_block',
		'attributes' => $newsletter_attributes
	));

	$quick_contact_attributes = array(

		"styleIs" => array(
			"type" => "string",
			"default" => 1
		),
		"width" => array(
			"type" => "number",
			"default" => 100
		),
		"bgGradientTurn" => array(
			"type" => "number",
			"default" => -166
		),
		"bgLinearGradientOne" => array(
			"type" => "string"
		),
		"bgLinearGradientTwo" => array(
			"type" => "string"
		),
		"horizontalPadding" => array(
			"type" => "number",
			"default" => 15
		),
		"verticalPadding" => array(
			"type" => "number",
			"default" => 15
		),
		"formBackgroundColor" => array(
			"type" => "string",
			"default" => ""
		),
		"borderRadius" => array(
			"type" => "number",
			"default" => 0
		),
		"padding" => array(
			"type" => "number",
			"default" => 20
		),
		"showFormShadow" => array(
			"type" => "boolean",
			"default" => false
		),
		"formShadow" => array(
			"type" => "number",
			"default" => 2
		),
		"formShadowColor" => array(
			"type" => "string",
			"default" => "#806760"
		),
		"title" => array(
			"type" => "string",
			"default" => "Quick Contact"
		),
		"titleColor" => array(
			"type" => "string",
		),
		"titleFontSize" => array(
			"type" => "number",
			"default" => 35
		),
		"titleTextTransform" => array(
			"type" => "string",
			"default" => "Uppercase"
		),
		"titleVerticalPadding" => array(
			"type" => "number",
			"default" => 0
		),
		"align" => array(
			"type" => "string",
			"default" => "wide"
		),
		"alignment" => array(
			"type" => "string",
			"default" => "center"
		),
		"info" => array(
			"type" => "string",
			"default" => "Contact us today, and get reply with in 24 hours!"
		),
		"infoColor" => array(
			"type" => "string"
		),
		"contactFormShadow" => array(
			"type" => "number",
			"default" => 0
		),
		"buttonTitle" => array(
			"type" => "string",
			"default" => "send"
		),
		"inputVerticalMargin" => array(
			"type" => "number",
			"default" => 5
		),
		"inputVerticalPadding" => array(
			"type" => "number",
			"default" => 15
		),
		"inputBorderTopLeftRadius" => array(
			"type" => "number",
			"default" => 5
		),
		"inputBorderTopRightRadius" => array(
			"type" => "number",
			"default" => 5
		),
		"inputBorderBottomLeftRadius" => array(
			"type" => "number",
			"default" => 5
		),
		"inputBorderBottomRightRadius" => array(
			"type" => "number",
			"default" => 5
		),
		"inputHorizontalPadding" => array(
			"type" => "number",
			"default" => 15
		),
		"inputTextColor" => array(
			"type" => "string",
			"default" => "#ffffff"
		),
		"inputFontSize" => array(
			"type" => "number",
			"default" => 15
		),
		"showInputBorder" => array(
			"type" => "boolean",
			"default" => false
		),
		"inputBorderColor" => array(
			"type" => "string",
			"default" => "#edeee9"
		),
		"buttonTextColor" => array(
			"type" => "string",
			"default" => "#ffffff"
		),
		"enablePhoneField" => array(
			"type" => "boolean",
			"default" => false
		),
		"enableWebsiteField" => array(
			"type" => "boolean",
			"default" => false
		),
		"buttonBackgroundColor" => array(
			"type" => "string",
		),
		"buttonWidth" => array(
			"type" => "number",
			"default" => 30
		),
		"buttonBorderRadius" => array(
			"type" => "number",
			"default" => 50
		),
		"buttonTextTransform" => array(
			"type" => "string",
			"default" => "Uppercase"
		),
		"buttonPadding" => array(
			"type" => "number",
			"default" => 10
		),
		"hoverButtonBackgroundColor" => array(
			"type" => "string"
		),
		"hoverButtonTextColor" => array(
			"type" => "string"
		),
		"authorEmailId" => array(
			"type" => "string",
			"default" => ""
		),
		"enablereCAPTCHA" => array(
			"type" => "boolean",
			"default" => false
		),
		"emailSubject" => array(
			"type" => "string",
			"default" => ""
		),
		"responseMessage" => array(
			"type" => "string",
			"default" => "Message Sent Successfully"
		)
	);
	guteblock_register_block_type('quick-contact', array(
		'render_callback' => 'guteblock_render_quick_contact_block',
		'attributes' => $quick_contact_attributes
	));
	
}

require_once( plugin_dir_path(__FILE__) . '/inc/newsletter/newsletter.php' );

require_once( plugin_dir_path(__FILE__) . '/inc/post-grid/post-grid.php' );

require_once( plugin_dir_path(__FILE__) . '/inc/quick-contact/quick-contact.php' );