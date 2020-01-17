import "./style.scss";
import $ from "jquery";

$(document).ready(function() {
	$(".wp-block-guteblock-accordion__title-outer i").click(function() {
		$(this)
			.closest(".wp-block-guteblock-accordion")
			.toggleClass("gb-accordion-open");
	});
});
