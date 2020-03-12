<?php 
/**
 * Plugin Name: Guteblock - Ultimate Gutenberg Blocks Plugin
 * Plugin URI: https://guteblock.com/
 * Description: Guteblock is an exquisite collection of blocks redefining the use of Gutenberg (the brand-new WordPress Block Editor)
 * Author: Sweans
 * Author URI: https://www.sweans.com/
 * Version: 1.0.9
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
			"type" => "number",
			"default" => 1
		),
		"width" => array(
			"type" => "number",
			"default" => 100
		),
		"bgColor" => array(
			"type" => "string",
			"default" => "#000000"
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
			"default" => "#000000"
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
			"default" => "#ffffff"
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
			"type" => "string",
			"default" => "#ffffff"
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
			"default" => "#ffcebf"
		),
		"inputBackgroundColor" => array(
			"type" => "string",
			"default" => "#000000"
		),
		"inputFontSize" => array(
			"type" => "number",
			"default" => 15
		),
		"showInputBorder" => array(
			"type" => "boolean",
			"default" => true
		),
		"inputBorderColor" => array(
			"type" => "string",
			"default" => "#806760"
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
			"default" => "#f24848"
		),
		"buttonWidth" => array(
			"type" => "number",
			"default" => 30
		),
		"buttonBorderRadius" => array(
			"type" => "number",
			"default" => 5
		),
		"buttonTextTransform" => array(
			"type" => "string",
			"default" => "uppercase"
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
		)
	);
	guteblock_register_block_type('quick-contact', array(
		'render_callback' => 'guteblock_render_quick_contact_block',
		'attributes' => $quick_contact_attributes
	));
	
}


/* Add action for Quick Contact Form Submit*/
// add_action("wp_ajax_guteblock_quick_contact_submit", "guteblock_quick_contact_submit");
// add_action("wp_ajax_nopriv_guteblock_quick_contact_submit", "guteblock_quick_contact_submit");
function guteblock_quick_contact_submit($attributes) {
	
	$data = $_POST;
	
	if(isset($data["recaptcha_response"]) && !empty($data["recaptcha_response"])){

		//Build POST request:
		$recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
		$guteblock_recaptcha_secret_key = get_option( 'guteblock_recaptcha_secret_key' );
		$recaptcha_response = $data["recaptcha_response"];
	
		// Make and decode POST request:
		$recaptcha = file_get_contents($recaptcha_url . '?secret=' . $guteblock_recaptcha_secret_key . '&response=' . $recaptcha_response);
		$recaptcha = json_decode($recaptcha);
		// Take action based on the score returned:
		if ($recaptcha->score >= 0.5) {

			if( $attributes['authorEmailId'] == "" ) {
				
				echo '<div class="wp-block-guteblock-quick-contact__popup-window"
				style="width: 500px;
				text-align: center;
				transform: translateY(-100%);
				transition: .75s ease all;
				overflow: hidden;
				opacity: 1;
				// visibility: hidden;
				padding: 75px 20px;
				background-color:#fff;
				display: block;
				position: fixed;
				top: 50%;
				left: 0;
				right: 0;
				margin: 0 auto;
				border-radius: 5px;
				box-shadow: 0px 0px 4px 1px #2e2e2e;">';
				echo "Please Fill the Author Email Id";
				echo '</div>';

			} else {
				
				$to = $attributes['authorEmailId'];
                $subject = 'The Quick Contact form';
                $message = $data["quick_contact_form_message_field"];
                $body = 'The email body content';
                $headers = array('Content-Type: text/html; charset=UTF-8');
				wp_mail( $to, $subject, $message, $body, $headers );

				echo '<div class="wp-block-guteblock-quick-contact__popup-window">';
				echo  "Message Sent Successfully";
				echo '</div>';
			}

		} else {

				echo '<div class="wp-block-guteblock-quick-contact__popup-window">';
				echo  "captcha parameters missing1";
				echo '</div>';

		}
		
	} else {
		
		echo '<div class="wp-block-guteblock-quick-contact__popup-window">';
		echo  "captcha parameters missing2";
		echo '</div>';

	}

	return;
}
function guteblock_render_quick_contact_block($attributes) {

	if($_POST) {
		guteblock_quick_contact_submit($attributes);		
	}
	var_dump($_POST['quick_contact_form_name_field']);
	if ( $attributes['showInputBorder'] == true ) {
		$inputBorder = '1px solid '.$attributes['inputBorderColor'];
	} else {
		$inputBorder = "none";
	}

	if ( $attributes['showFormShadow'] == true ) {
		$contactFormShadow = '0px 0px '.$attributes['formShadow'].'px 0px '.$attributes['formShadowColor'];
	} else {
		$contactFormShadow = "none";
	}

	if( $attributes['styleIs'] == 3 ) {
		$basicInputBorder = "none";
	} else {
		$basicInputBorder = $inputBorder;
	}

	if( $attributes['styleIs'] == 3 ) {
		$borderBottom = '2px solid '.$attributes['inputBorderColor'];
	} else {
		$borderBottom = $inputBorder;
	}

	if( $attributes['styleIs'] == 3 ) {
		$basicBottomLeftBorderRadius = 0;
	} else {
		$basicBottomLeftBorderRadius = $attributes['inputBorderBottomLeftRadius'];
	}

	if( $attributes['styleIs'] == 3 ) {
		$basicBottomRightBorderRadius = 0;
	} else {
		$basicBottomRightBorderRadius = $attributes['inputBorderBottomRightRadius'];
	}

	$quick_contact = '<div class="wp-block-guteblock-quick-contact align'.$attributes['align'].' align-' .$attributes['alignment'].'" 
	style="
	text-align:'.$attributes['alignment'].';
	background-color:'.$attributes['bgColor'].';
	padding-left:'.$attributes['horizontalPadding'].'px;
	padding-right:'.$attributes['horizontalPadding'].'px;
	padding-top:'.$attributes['verticalPadding'].'px;
	padding-bottom:'.$attributes['verticalPadding'].'px">';
		$quick_contact .= '<div class="wp-block-guteblock-quick-contact-form"
		style="
		background-color:'.$attributes['formBackgroundColor'].';
		padding:'.$attributes['padding'].'px;
		width:'.$attributes['width'].'%;
		border-radius:'.$attributes['borderRadius'].'px;
		box-shadow:'.$contactFormShadow.';
		">';
			$quick_contact .= '<div class="wp-block-guteblock-quick-contact-form_align_center">';
				$quick_contact .= '<h4
					class="wp-block-guteblock-quick-contact-form__title"
					style="
					color: '.$attributes['titleColor'].';
					font-size: '.$attributes['titleFontSize'].'px;
					text-transform: '.$attributes['titleTextTransform'].';
					padding-top: '.$attributes['titleVerticalPadding'].'px;
					padding-bottom: '.$attributes['titleVerticalPadding'].'px;
				">'.$attributes['title'].'</h4>';
			$quick_contact .= '</div>';
			$quick_contact .= '<div class="wp-block-guteblock-quick-contact-form_align_center">';
				$quick_contact .= '<p
					class="wp-block-guteblock-quick-contact-form__info"
					style="
					color:'.$attributes['infoColor'].';
				">'.$attributes['info'].'</p>';
			$quick_contact .= '</div>';
			$quick_contact .= '<form 
				action="" 
				method="post" 
				class="quickContactFormSubmit"
				id="quickContactMyForm">';
				$quick_contact .= '<div class="wp-block-guteblock-quick-contact-form_align_left">';
					$quick_contact .= '<input 
						class="wp-block-guteblock-quick-contact-form__name_field"
						placeholder="Enter Your Name"
						style="
						margin-top: '.$attributes['inputVerticalMargin'].'px;
						margin-bottom: '.$attributes['inputVerticalMargin'].'px; 
						padding-top: '.$attributes['inputVerticalPadding'].'px;
						padding-bottom: '.$attributes['inputVerticalPadding'].'px;
						padding-left: '.$attributes['inputHorizontalPadding'].'px;
						padding-right: '.$attributes['inputHorizontalPadding'].'px; 
						font-size: '.$attributes['inputFontSize'].'px;
						color: '.$attributes['inputTextColor'].';
						background-color: '.$attributes['inputBackgroundColor'].';
						border-top: '.$basicInputBorder.';
						border-bottom: '.$borderBottom.';
						border-left: '.$basicInputBorder.';
						border-right: '.$basicInputBorder.';
						border-top-left-radius: '.$attributes['inputBorderTopLeftRadius'].'px;
						border-top-right-radius: '.$attributes['inputBorderTopRightRadius'].'px; 
						border-bottom-left-radius: '.$basicBottomLeftBorderRadius.'px; 
						border-bottom-right-radius: '.$basicBottomRightBorderRadius.'px;"
						type="text"
						required
						name="quick_contact_form_name_field">';
				$quick_contact .= '</div>';
				$quick_contact .= '<div class="wp-block-guteblock-quick-contact-form_align_right">';
					$quick_contact .= '<input 
						class="wp-block-guteblock-quick-contact-form__email_field"
						placeholder="Enter Your Email"
						style="
						margin-top: '.$attributes['inputVerticalMargin'].'px;
						margin-bottom: '.$attributes['inputVerticalMargin'].'px; 
						padding-top: '.$attributes['inputVerticalPadding'].'px;
						padding-bottom: '.$attributes['inputVerticalPadding'].'px;
						padding-left: '.$attributes['inputHorizontalPadding'].'px;
						padding-right: '.$attributes['inputHorizontalPadding'].'px; 
						font-size: '.$attributes['inputFontSize'].'px;
						color: '.$attributes['inputTextColor'].';
						background-color: '.$attributes['inputBackgroundColor'].';
						border-top: '.$basicInputBorder.';
						border-bottom: '.$borderBottom.';
						border-left: '.$basicInputBorder.';
						border-right: '.$basicInputBorder.';
						border-top-left-radius: '.$attributes['inputBorderTopLeftRadius'].'px;
						border-top-right-radius: '.$attributes['inputBorderTopRightRadius'].'px; 
						border-bottom-left-radius: '.$basicBottomLeftBorderRadius.'px; 
						border-bottom-right-radius: '.$basicBottomRightBorderRadius.'px;"
						type="email"
						required
						name="quick_contact_form_email_field">';
				$quick_contact .= '</div>';
				if( $attributes['enablePhoneField'] == true ) {
					$quick_contact .= '<div class="wp-block-guteblock-quick-contact-form_align_left">';
					$quick_contact .= '<input 
						class="wp-block-guteblock-quick-contact-form__phone_field"
						placeholder="Enter Your Phone Number"
						style="
						margin-top: '.$attributes['inputVerticalMargin'].'px;
						margin-bottom: '.$attributes['inputVerticalMargin'].'px; 
						padding-top: '.$attributes['inputVerticalPadding'].'px;
						padding-bottom: '.$attributes['inputVerticalPadding'].'px;
						padding-left: '.$attributes['inputHorizontalPadding'].'px;
						padding-right: '.$attributes['inputHorizontalPadding'].'px; 
						font-size: '.$attributes['inputFontSize'].'px;
						color: '.$attributes['inputTextColor'].';
						background-color: '.$attributes['inputBackgroundColor'].';
						border-top: '.$basicInputBorder.';
						border-bottom: '.$borderBottom.';
						border-left: '.$basicInputBorder.';
						border-right: '.$basicInputBorder.';
						border-top-left-radius: '.$attributes['inputBorderTopLeftRadius'].'px;
						border-top-right-radius: '.$attributes['inputBorderTopRightRadius'].'px; 
						border-bottom-left-radius: '.$basicBottomLeftBorderRadius.'px; 
						border-bottom-right-radius: '.$basicBottomRightBorderRadius.'px;"
						type="text"
						name="quick_contact_form_phone_field">';
				$quick_contact .= '</div>';
				}
				if( $attributes['enableWebsiteField'] == true ) {
					$quick_contact .= '<div class="wp-block-guteblock-quick-contact-form_align_right">';
					$quick_contact .= '<input 
						class="wp-block-guteblock-quick-contact-form__website_field"
						placeholder="Enter Your Website Here..."
						style="
						margin-top: '.$attributes['inputVerticalMargin'].'px;
						margin-bottom: '.$attributes['inputVerticalMargin'].'px; 
						padding-top: '.$attributes['inputVerticalPadding'].'px;
						padding-bottom: '.$attributes['inputVerticalPadding'].'px;
						padding-left: '.$attributes['inputHorizontalPadding'].'px;
						padding-right: '.$attributes['inputHorizontalPadding'].'px; 
						font-size: '.$attributes['inputFontSize'].'px;
						color: '.$attributes['inputTextColor'].';
						background-color: '.$attributes['inputBackgroundColor'].';
						border-top: '.$basicInputBorder.';
						border-bottom: '.$borderBottom.';
						border-left: '.$basicInputBorder.';
						border-right: '.$basicInputBorder.';
						border-top-left-radius: '.$attributes['inputBorderTopLeftRadius'].'px;
						border-top-right-radius: '.$attributes['inputBorderTopRightRadius'].'px; 
						border-bottom-left-radius: '.$basicBottomLeftBorderRadius.'px; 
						border-bottom-right-radius: '.$basicBottomRightBorderRadius.'px;"
						type="text"
						name="quick_contact_form_website_field">';
				$quick_contact .= '</div>';
				}
				$quick_contact .= '<div class="wp-block-guteblock-quick-contact-form_align_center">';
					$quick_contact .= '<textarea 
						class="wp-block-guteblock-quick-contact-form__message_field"
						placeholder="Type Message Here..."
						style="
						margin-top: '.$attributes['inputVerticalMargin'].'px;
						margin-bottom: '.$attributes['inputVerticalMargin'].'px; 
						padding-top: '.$attributes['inputVerticalPadding'].'px;
						padding-bottom: '.$attributes['inputVerticalPadding'].'px;
						padding-left: '.$attributes['inputHorizontalPadding'].'px;
						padding-right: '.$attributes['inputHorizontalPadding'].'px; 
						font-size: '.$attributes['inputFontSize'].'px;
						color: '.$attributes['inputTextColor'].';
						background-color: '.$attributes['inputBackgroundColor'].';
						border-top: '.$basicInputBorder.';
						border-bottom: '.$borderBottom.';
						border-left: '.$basicInputBorder.';
						border-right: '.$basicInputBorder.';
						border-top-left-radius: '.$attributes['inputBorderTopLeftRadius'].'px;
						border-top-right-radius: '.$attributes['inputBorderTopRightRadius'].'px; 
						border-bottom-left-radius: '.$basicBottomLeftBorderRadius.'px; 
						border-bottom-right-radius: '.$basicBottomRightBorderRadius.'px;"
						name="quick_contact_form_message_field"
						required
						>';
						$quick_contact .= '</textarea>';	
				$quick_contact .= '</div>';
					$quick_contact .= '<input
						type="hidden"
						name="quick_contact_form_authorEmailId_field"
					/>';
					$quick_contact .= '<input
						type="hidden"
						name="recaptcha_response"
						id="recaptchaResponse"
					/>';
				$quick_contact .= '<div class="wp-block-guteblock-quick-contact-form_align_center">';
				if(isset($attributes['hoverButtonTextColor'])) {
					$quick_contact .= '<style>
					.wp-block-guteblock-quick-contact-form__submit_field:hover {
						color:'.$attributes['hoverButtonTextColor'].' !important;
						background-color: '.$attributes['hoverButtonBackgroundColor'].' !important;
						transition: 1s ease all !important;
					}</style>';
				}
				
				$quick_contact .= '<button
					type="submit"
					target="_blank"
					rel="noopener noreferrer"
					class="wp-block-guteblock-quick-contact-form__submit_field"
					style="width:'.$attributes['buttonWidth'].'%;
						background-color: '.$attributes['buttonBackgroundColor'].';
						color: '.$attributes['buttonTextColor'].';
						border-radius: '.$attributes['buttonBorderRadius'].'px;
						padding: '.$attributes['buttonPadding'].'px;
						text-transform: '.$attributes['buttonTextTransform'].';
						">
						<span>'.$attributes['buttonTitle'].'</span>
					</button>';
				$quick_contact .= '</div>';
			$quick_contact .= '</form>';
		$quick_contact .= '</div>';
		// $quick_contact .= '<div 
		// 	class="wp-block-guteblock-quick-contact__popup-window"></div>';
	return $quick_contact;
}
/* Ajax Call in Nwsletter */
add_action("wp_ajax_guteblock_newsletter_submit", "guteblock_newsletter_submit");
add_action("wp_ajax_nopriv_guteblock_newsletter_submit", "guteblock_newsletter_submit");

function guteblock_newsletter_submit() {

	$data = [
		'email'     => $_POST["email"],
		'subscriber_status' => $_POST["double_optin"],
		// 'status'    => 'subscribed'
	];
	
	$apiKey = get_option( 'guteblock_mailchimp_api_key'); 
	$listId = get_option( 'guteblock_mailchimp_list_id' );

	$memberId = md5(strtolower($data['email']));
	$dataCenter = substr($apiKey,strpos($apiKey,'-')+1);
	$url = 'https://' . $dataCenter . '.api.mailchimp.com/3.0/lists/' . $listId . '/members/' . $memberId;
	if($data['email'] != ""){
		if($data['subscriber_status'] == 0 ) {
			$status = "subscribed";
		}
		else {
			$status = "pending";
		}
	}else{
		$status = "no mail";
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
	
	if($status == "no mail") {
		echo "Please Enter Your Email";
	}else{
		if($status == "pending") {
			echo get_option( 'guteblock_mailchimp_success_response_do' );
		}
		else{
			echo get_option( 'guteblock_mailchimp_success_response' );
		}
	}
		
	exit();

}

function guteblock_render_newsletter_block($attributes) {

	if ( $attributes['styleIs'] == 3 ) {
		$btnBottomLeftThreeOne = $attributes['borderBottomLeftRadiusTwo'];
	}
	else{
		$btnBottomLeftThreeOne = $attributes['borderBottomLeftRadius'];
	}
	if ( $attributes['styleIs'] ==1 ) {
		$bg = $attributes['bgColor'];
	}
	else{
		$bg = $attributes['bgColorTwo'];
	}
	if ( $attributes['styleIs'] == 2 ) {
		$TopLeft = 100;
	}
	else{
		$TopLeft = $attributes['borderLeftRadius'];
	}
	if ( $attributes['styleIs'] != 1 ) {
		$btnTopLeft = 0;
	}
	else{
		$btnTopLeft = $attributes['borderTopLeftRadius'];
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
		$basicBorderRightRadius = $attributes['borderRightRadius'];
	}
	else{
		$basicBorderRightRadius = 0;
	}
	
	$balancedPaddingRight = $attributes['horizontalOuterPadding'] + 4.5 * $attributes['fontSize'] + 2 * $attributes['buttonHorizontalPadding'];
	$newsletter .= '<div class="wp-block-guteblock-newsletter align'.$attributes['align'].' is-style-'.$attributes['styleIs'].' align-'.$attributes['alignment'].'" 
	style="background-color:'.$bg.';
	padding-left:'.$attributes['horizontalOuterPadding'].'px;
	padding-right:'.$attributes['horizontalOuterPadding'].'px;
	padding-top:'.$attributes['verticalOuterPadding'].'px;
	padding-bottom:'.$attributes['verticalOuterPadding'].'px;
	text-align:'.$attributes['alignment'].'">';
	
	$newsletter .= '<div class="wp-block-guteblock-newsletter__container">';
		$newsletter .= '<form action="" method="post" class="newsletterSubmit" id="newsletterMyForm">';
			$newsletter .= 	'<input type="email" placeholder="'.$placeholder.'" class="wp-block-guteblock-newsletter__input" style="
			padding-left: '.$attributes['horizontalPadding'].'px;
			padding-right:'.$balancedPaddingRight.'px;
			padding-top:'.$attributes['verticalInnerPadding'].'px;
			padding-bottom:'.$attributes['verticalInnerPadding'].'px;
			text-transform:'.$attributes['inputTextTransform'].';
			font-weight:'.$attributes['inputTextFontWeight'].';
			border-top-left-radius:'.$TopLeft.'px;
			border-bottom-left-radius:'.$TopLeft.'px;
			border-top-right-radius:'.$basicBorderRightRadius.'px;
			border-bottom-right-radius:'.$basicBorderRightRadius.'px;
			color:'.$attributes['inputTextColor'].';
			font-size:'.$attributes['fontSize'].'px;
			background-color:'.$attributes['inputBackgroundColor'].';
			border: none;
			">';
			$newsletter .= '<input type="hidden" value="'.$attributes['doubleOptIn'].'" class="wp-block-guteblock-newsletter__hiddeninput" name="double_optin" >';
			$newsletter .= '<style>.wp-block-guteblock-newsletter-inner:hover { color: '.$attributes['hoverButtonTextColor'].' !important; background-color:'.$attributes['hoverButtonBackgroundColor'].'!important; transition:.5s ease all} </style>';
			$newsletter .= '<button type="submit"  target="_blank"  rel="noopener noreferrer" class="wp-block-guteblock-newsletter-inner";
			style="padding-left:'.$attributes['buttonHorizontalPadding'].'px;
			padding-right:'.$attributes['buttonHorizontalPadding'].'px;
			text-decoration: none;
			padding-top:'.$attributes['verticalInnerPadding'].'px;
			padding-bottom:'.$attributes['verticalInnerPadding'].'px;
			border-top-left-radius:'.$btnTopLeft.'px;
			border-bottom-left-radius:'.$btnBottomLeft.'px;
			border-top-right-radius:'.$basicBorderRightRadius.'px;
			border-bottom-right-radius:'.$basicBorderRightRadius.'px;
			background-color:'.$attributes['buttonBackgroundColor'].';
			text-transform:'.$attributes['buttonTextTransform'].';
			font-weight:'.$attributes['buttonTextFontWeight'].';
			letter-spacing:'.$attributes['buttonLetterSpacing'].'px;
			border: none;
			color: '.$attributes['buttonTextColor'].';
			font-size: '.$attributes['fontSize'].'px;
			transition:.5s ease all;">';
			if ( $attributes['styleIs'] != 3 ) {
					$newsletter .= '<span>'.$attributes['buttonTitle'].'</span>';
			}
			else if( $attributes['styleIs'] == 3 ) {
				$newsletter .= '<span class="dashicons dashicons-'.$attributes['icon'].'" style="font-size: '.$attributes['fontSize'].'px; width:'.$attributes['fontSize'].'px;height:'.$attributes['fontSize'].'px;"></span>';
			}
			$newsletter .= '</button>';
			$newsletter .= '</form>';
			$newsletter .= '<div class="wp-block-guteblock-newsletter__popup-window">';
			$newsletter .= '</div>';
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