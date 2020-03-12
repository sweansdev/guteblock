<?php

/* Add action for Quick Contact Form Submit*/
function guteblock_quick_contact_submit($attributes) {
	
	$data = $_POST;
    $error_msg = "";

    if( $attributes['authorEmailId'] == "" ) {

        $error_msg = "Please Fill the Author Email Id";

    }


    if(!$error_msg && $attributes['enablereCAPTCHA']) {

        if(!(isset($data["recaptcha_response"]) && !empty($data["recaptcha_response"]))){

            if (current_user_can( 'manage_options' )) {
                $error_msg = "Missing reCAPTCHA parameters.<br/>Please configure reCAPTCHA API Keys in the settings.";
            } else {
                $error_msg = "Something went wrong.";
            }
            
            
        } else {
            
            //Build POST request:
            $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
            $guteblock_recaptcha_secret_key = get_option( 'guteblock_recaptcha_secret_key' );
            $recaptcha_response = $data["recaptcha_response"];
        
            // Make and decode POST request:
            $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $guteblock_recaptcha_secret_key . '&response=' . $recaptcha_response);
            $recaptcha = json_decode($recaptcha);
            // Take action based on the score returned:
            if ($recaptcha->score < 0.5) {

                $error_msg = "reCAPTCHA failed. Please try again.";


            }
            

        }

    }

    if($error_msg) {

        echo '<div class="gb-alert gb-error align'.$attributes['align'].' align-'.$attributes['alignment'].'">'.$error_msg.'</div>';


    } else {

        // All good. Proceeding with email.
        $to = $attributes['authorEmailId'];
        $subject = 'The Quick Contact form';
        $message = $data["quick_contact_form_message_field"];
        $body = 'The email body content';
        $headers = array('Content-Type: text/html; charset=UTF-8');
        wp_mail( $to, $subject, $message, $body, $headers );        
        echo '<div class="gb-alert gb-success align'.$attributes['align'].' align-'.$attributes['alignment'].'">Msg sent successfully.</div>';

    }
     
    



   


	
}
function guteblock_render_quick_contact_block($attributes) {

	if($_POST) {
		guteblock_quick_contact_submit($attributes);		
	}

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
	return $quick_contact;
}