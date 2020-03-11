import "./style.scss";

import $ from "jquery";

grecaptcha.ready(function() {
	grecaptcha
		.execute(guteblock.recaptcha_site_key, { action: "" })
		.then(function(token) {
			var recaptchaResponse = document.getElementById(
				"recaptchaResponse"
			);
			recaptchaResponse.value = token;
		});
});

$(document).ready(function() {
	$(".quickContactFormSubmit").submit(function() {
		$.ajax({
			type: "post",
			url: guteblock.ajaxurl,
			data: {
				action: "guteblock_quick_contact_submit",
				nameField: $(
					".wp-block-guteblock-quick-contact input[name='quick_contact_form_name_field']"
				).val(),
				emailField: $(
					".wp-block-guteblock-quick-contact input[name='quick_contact_form_email_field']"
				).val(),
				phoneField: $(
					".wp-block-guteblock-quick-contact input[name='quick_contact_form_phone_field']"
				).val(),
				websiteField: $(
					".wp-block-guteblock-quick-contact input[name='quick_contact_form_website_field']"
				).val(),
				messageField: $(
					".wp-block-guteblock-quick-contact textarea[name='quick_contact_form_message_field']"
				).val(),
				authorEmailId: $(
					".wp-block-guteblock-quick-contact input[name='quick_contact_form_authorEmailId_field']"
				).val(),
				recaptchaResponse: $(
					".wp-block-guteblock-quick-contact input[name='recaptcha_response']"
				).val()
			},
			success: function(response) {
				$(
					".wp-block-guteblock-quick-contact__popup-window"
				).addClass(
					"wp-block-guteblock-quick-contact__popup-windowAfter"
				);
				$(".wp-block-guteblock-quick-contact__popup-window").empty(
					response
				);
				$(".wp-block-guteblock-quick-contact__popup-window").append(
					response
				);
				setTimeout(function() {
					$(
						".wp-block-guteblock-quick-contact__popup-window"
					).removeClass(
						"wp-block-guteblock-quick-contact__popup-windowAfter"
					);
					document.getElementById("quickContactMyForm").reset();
				}, 2000);
			}
		});

		return false;
	});
});
