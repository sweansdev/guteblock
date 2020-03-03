import "./style.scss";
import $ from "jquery";

$(document).ready(function() {
	$(".accordion-arrow").click(function() {
		$(this)
			.parent()
			.parent()
			.parent()
			.find(".wp-block-guteblock-accordion__content-outer")
			.toggleClass("gb-accordion-open");
	});
	$(".accordion-arrow").click(function() {
		$(this).toggleClass("icontoggle");
	});
	$(".accordion-arrow1").click(function() {
			$(this)
			.parent()
			.parent()
			.find(".wp-block-guteblock-accordion__content-outer")
			.toggleClass("gb-accordion-open");
	});
	$(".accordion-arrow1").click(function() {
		$(this).toggleClass("icontoggle1");
	});
});
