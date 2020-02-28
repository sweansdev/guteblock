import "./style.scss";

import $ from "jquery";
// import myAjax from 'jquery'
var guteblock;
$(document).ready(function() {
	$(".newsletterSubmit").submit(function() {
		$.ajax({
			type: "post",
			url: guteblock.ajaxurl,
			data: {
				action: "guteblock_newsletter_submit",
				email: $(".wp-block-guteblock-newsletter__input").val(),
				status: $(".wp-block-guteblock-newsletter__hiddeninput").val()
			},
			success: function(response) {
				alert(response);

				// if(response.type == "success") {
				// console.log("successfully added email")
				// }
				// else {
				// alert("Your vote could not be added")
				// }
			}
		});

		return false;
	});
});
