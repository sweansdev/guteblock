import "./style.scss";
import $ from "jquery";


if (typeof grecaptcha == 'object') { 
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
}


$(document).ready(function() {
	
	$(".gb-alert").delay(10000).slideUp();
	
});