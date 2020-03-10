import "./style.editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
//import { RichText } from "@wordpress/editor";
import edit from "./edit.js";
import "jquery";
//import classnames from "classnames";
//import { Button, Dashicon } from "@wordpress/components";
const attributes = {
	title: {
		type: "string",
		default: ""
	},
	bgColor: {
		type: "string",
		default: "#f1fbff"
	},
	bgColorTwo: {
		type: "string",
		default: "transparent"
	},
	borderLeftRadius: {
		type: "number",
		default: 0
	},
	borderRightRadius: {
		type: "number",
		default: 0
	},
	align: {
		type: "string",
		default: "wide"
	},
	alignment: {
		type: "string",
		default: "center"
	},
	buttonTitle: {
		type: "string",
		default: "Subscribe"
	},
	verticalOuterPadding: {
		type: "number",
		default: 25
	},
	horizontalOuterPadding: {
		type: "number",
		default: 15
	},
	verticalInnerPadding: {
		type: "number",
		default: 15
	},
	horizontalPadding: {
		type: "number",
		default: 15
	},
	inputBackgroundColor: {
		type: "string",
		default: "#3c3c3c"
	},
	inputTextColor: {
		type: "string",
		default: "#cecece"
	},
	inputTextFontWeight: {
		type: "string",
		default: "normal"
	},
	inputTextTransform: {
		type: "string",
		default: "none"
	},
	buttonBackgroundColor: {
		type: "string",
		default: "#21ade5"
	},
	buttonBackgroundColorTwo: {
		type: "string",
		default: "#eae03d"
	},
	buttonTextColor: {
		type: "string",
		default: "#ffffff"
	},
	fontSize: {
		type: "number",
		default: 14
	},
	buttonTextFontWeight: {
		type: "string",
		default: "normal"
	},
	buttonTextTransform: {
		type: "string",
		default: "none"
	},
	buttonLetterSpacing: {
		type: "number",
		default: 0
	},
	borderTopLeftRadius: {
		type: "number",
		default: 100
	},
	borderBottomLeftRadius: {
		type: "number",
		default: 100
	},
	borderBottomLeftRadiusTwo: {
		type: "number",
		default: 0
	},
	buttonHorizontalPadding: {
		type: "number",
		default: 25
	},
	icon: {
		type: "string",
		default: "arrow-right-alt"
	},
	iconColor: {
		type: "string",
		default: "#fffff"
	},
	iconSize: {
		type: "number",
		default: 15
	},
	hoverButtonBackgroundColor: {
		type: "string"
	},
	hoverButtonTextColor: {
		type: "string"
	},
	styleIs: {
		type:"number",
		default:1
	},
	doubleOptIn: {
		type:"boolean",
		default:false
	}
};

registerBlockType("guteblock/newsletter", {
	title: __("Newsletter", "guteblock"),
	description: __("Block For Showing Newsletter", "guteblock"),
	icon: (
		<svg
			id="prefix__Layer_1"
			x={0}
			y={0}
			viewBox="0 0 24 24"
			xmlSpace="preserve"
		>
			<style />
			<linearGradient
				id="prefix__SVGID_1_"
				gradientUnits="userSpaceOnUse"
				x1={15.708}
				y1={0.619}
				x2={5.109}
				y2={16.829}
			>
				<stop offset={0} stopColor="#eb7d31" />
				<stop offset={1} stopColor="#ee576f" />
			</linearGradient>
			<path
				d="M21 9.662c-2.287.194-5.197 1.038-7 1.794v-1.064c1.933-.721 4.598-1.54 7-1.745v1.015zm0 2.031c-2.287.194-5.197 1.038-7 1.794v-1.064c1.933-.721 4.598-1.54 7-1.745v1.015zm0 2.031c-2.287.194-5.197 1.038-7 1.794v-1.064c1.933-.721 4.598-1.54 7-1.745v1.015zm0 2.031c-2.287.194-5.197 1.038-7 1.794v-1.064c1.933-.721 4.598-1.54 7-1.745v1.015zm0-9.951c-2.402.204-5.068 1.024-7 1.745v1.933c1.804-.756 4.713-1.6 7-1.794v-1.884zm-18 2.843c2.402.205 5.067 1.024 7 1.745v1.064c-1.803-.756-4.713-1.6-7-1.794v-1.015zm0 2.031c2.402.205 5.067 1.024 7 1.745v1.064c-1.803-.756-4.713-1.6-7-1.794v-1.015zm0 2.031c2.402.205 5.067 1.024 7 1.745v1.064c-1.803-.756-4.713-1.6-7-1.794v-1.015zm0 2.032c2.402.205 5.067 1.024 7 1.745v1.064c-1.803-.756-4.713-1.6-7-1.794v-1.015zm0-7.054c2.287.194 5.196 1.038 7 1.794v-1.933c-1.932-.72-4.598-1.54-7-1.744v1.883zm9-2.724c-3.063-1.671-7.776-2.755-12-2.963v17c4.289.206 8.195 1.249 12 3 3.805-1.751 7.711-2.794 12-3v-17c-4.224.208-8.937 1.292-12 2.963zm-10-.791c4.264.496 6.86 1.467 9 2.545v12.702c-2.968-1.184-5.939-1.95-9-2.271v-12.976zm20 12.975c-3.061.321-6.032 1.088-9 2.271v-12.701c2.187-1.103 4.757-2.051 9-2.544v12.974z"
				fill="url(#prefix__SVGID_1_)"
			/>
			<g>
				<linearGradient
					id="prefix__SVGID_2_"
					gradientUnits="userSpaceOnUse"
					x1={22.02}
					y1={4.746}
					x2={11.421}
					y2={20.956}
				>
					<stop offset={0} stopColor="#eb7d31" />
					<stop offset={1} stopColor="#ee576f" />
				</linearGradient>
				<path
					d="M21 9.662c-2.287.194-5.197 1.038-7 1.794v-1.064c1.933-.721 4.598-1.54 7-1.745v1.015zm0 2.031c-2.287.194-5.197 1.038-7 1.794v-1.064c1.933-.721 4.598-1.54 7-1.745v1.015zm0 2.031c-2.287.194-5.197 1.038-7 1.794v-1.064c1.933-.721 4.598-1.54 7-1.745v1.015zm0 2.031c-2.287.194-5.197 1.038-7 1.794v-1.064c1.933-.721 4.598-1.54 7-1.745v1.015zm0-9.951c-2.402.204-5.068 1.024-7 1.745v1.933c1.804-.756 4.713-1.6 7-1.794v-1.884zm-18 2.843c2.402.205 5.067 1.024 7 1.745v1.064c-1.803-.756-4.713-1.6-7-1.794v-1.015zm0 2.031c2.402.205 5.067 1.024 7 1.745v1.064c-1.803-.756-4.713-1.6-7-1.794v-1.015zm0 2.031c2.402.205 5.067 1.024 7 1.745v1.064c-1.803-.756-4.713-1.6-7-1.794v-1.015zm0 2.032c2.402.205 5.067 1.024 7 1.745v1.064c-1.803-.756-4.713-1.6-7-1.794v-1.015zm0-7.054c2.287.194 5.196 1.038 7 1.794v-1.933c-1.932-.72-4.598-1.54-7-1.744v1.883zm9-2.724c-3.063-1.671-7.776-2.755-12-2.963v17c4.289.206 8.195 1.249 12 3 3.805-1.751 7.711-2.794 12-3v-17c-4.224.208-8.937 1.292-12 2.963zm-10-.791c4.264.496 6.86 1.467 9 2.545v12.702c-2.968-1.184-5.939-1.95-9-2.271v-12.976zm20 12.975c-3.061.321-6.032 1.088-9 2.271v-12.701c2.187-1.103 4.757-2.051 9-2.544v12.974z"
					fill="url(#prefix__SVGID_2_)"
				/>
			</g>
		</svg>
	),
	category: "guteblock",
	keywords: [
		__("input", "guteblock"),
		__("submit", "guteblock"),
		__("keyword3", "guteblock")
	],
	supports: {
		reusable: false,
		html: false,
		align: ["wide", "full"]
	},
	styles: [
		{
			name: "1",
			label: __("Basic", "guteblock"),
			isDefault: true
		},
		{
			name: "2",
			label: __("Transparent", "guteblock"),
			isDefault: false
		},
		{
			name: "3",
			label: __("Dash Icon", "guteblock"),
			isDefault: false
		}
	],
	attributes,
	edit,
	save: () => {
		return false;
	}
	// save: ({ attributes }) => {
	// 	const {
	// 		title,
	// 		bgColor,
	// 		bgColorTwo,
	// 		alignment,
	// 		buttonTitle,
	// 		borderLeftRadius,
	// 		borderRightRadius,
	// 		verticalOuterPadding,
	// 		horizontalOuterPadding,
	// 		verticalInnerPadding,
	// 		horizontalPadding,
	// 		fontSize,
	// 		inputBackgroundColor,
	// 		inputTextColor,
	// 		inputTextTransform,
	// 		inputTextFontWeight,
	// 		buttonTextFontWeight,
	// 		buttonTextColor,
	// 		borderTopLeftRadius,
	// 		borderBottomLeftRadius,
	// 		borderBottomLeftRadiusTwo,
	// 		buttonHorizontalPadding,
	// 		buttonBackgroundColor,
	// 		buttonTextTransform,
	// 		buttonLetterSpacing,
	// 		icon,
	// 		hoverButtonTextColor,
	// 		hoverButtonBackgroundColor
	// 	} = attributes;

	// 	const classes = classnames({
	// 		[`align-${alignment}`]: alignment
	// 	});

	// 	const isStyle = RegExp(/is-style-/);
	// 	const styleName = isStyle.test(attributes.className)
	// 		? attributes.className.replace(isStyle, "")
	// 		: null;

	// 	let bg,
	// 		TopLeft,
	// 		btnTopLeft,
	// 		btnBottomLeft,
	// 		btnBottomLeftThreeOne,
	// 		placehoderThreeOne,
	// 		placeholder;

	// 	{
	// 		styleName == 3
	// 			? (btnBottomLeftThreeOne = borderBottomLeftRadiusTwo)
	// 			: (btnBottomLeftThreeOne = borderBottomLeftRadius);
	// 	}
	// 	{
	// 		styleName == 1 ? (bg = bgColor) : (bg = bgColorTwo);
	// 	}
	// 	{
	// 		styleName == 2 ? (TopLeft = 100) : (TopLeft = borderLeftRadius);
	// 	}
	// 	{
	// 		styleName != 1
	// 			? (btnTopLeft = 0)
	// 			: (btnTopLeft = borderTopLeftRadius);
	// 	}
	// 	{
	// 		styleName == 2
	// 			? (btnBottomLeft = 24)
	// 			: (btnBottomLeft = btnBottomLeftThreeOne);
	// 	}
	// 	{
	// 		styleName == 3
	// 			? (placehoderThreeOne = "Subscribe Now")
	// 			: (placehoderThreeOne = "Enter Your Email Id");
	// 	}
	// 	{
	// 		styleName == 2
	// 			? (placeholder = "Your mail Id goes here...")
	// 			: (placeholder = placehoderThreeOne);
	// 	}

	// 	return (
	// 		<div
	// 			className={classes}
	// 			style={{
	// 				backgroundColor: bg,
	// 				paddingLeft: horizontalOuterPadding,
	// 				paddingRight: horizontalOuterPadding,
	// 				paddingTop: verticalOuterPadding,
	// 				paddingBottom: verticalOuterPadding,
	// 				alignment: alignment
	// 			}}
	// 		>
	// 			<div
	// 				className="wp-block-guteblock-newsletter__container"
	// 				title={title}
	// 			>
	// 				<form
	// 					action=""
	// 					method="post"
	// 					className="newsletterSubmit"
	// 				>
	// 					<input
	// 						type="text"
	// 						className={
	// 							"wp-block-guteblock-newsletter__input"
	// 						}
	// 						placeholder={__(placeholder, "guteblock")}
	// 						style={{
	// 							paddingLeft: horizontalPadding,
	// 							paddingRight:
	// 								horizontalPadding +
	// 								4.5 * fontSize +
	// 								2 * buttonHorizontalPadding,
	// 							paddingTop: verticalInnerPadding,
	// 							paddingBottom: verticalInnerPadding,
	// 							textTransform: inputTextTransform,
	// 							fontWeight: inputTextFontWeight,
	// 							borderTopLeftRadius: TopLeft,
	// 							borderBottomLeftRadius: TopLeft,
	// 							borderTopRightRadius: borderRightRadius,
	// 							borderBottomRightRadius: borderRightRadius,
	// 							fontSize: fontSize,
	// 							backgroundColor: inputBackgroundColor,
	// 							color: inputTextColor,
	// 							border: "none"
	// 						}}
	// 					></input>
	// 					<Button
	// 						type="submit"
	// 						target="_blank"
	// 						rel="noopener noreferrer"
	// 						className="wp-block-guteblock-newsletter-inner"
	// 						style={{
	// 							paddingLeft: buttonHorizontalPadding,
	// 							paddingRight: buttonHorizontalPadding,
	// 							paddingTop: verticalInnerPadding,
	// 							paddingBottom: verticalInnerPadding,
	// 							borderTopLeftRadius: btnTopLeft,
	// 							borderBottomLeftRadius: btnBottomLeft,
	// 							borderTopRightRadius: borderRightRadius,
	// 							borderBottomRightRadius: borderRightRadius,
	// 							backgroundColor: buttonBackgroundColor,
	// 							textTransform: buttonTextTransform,
	// 							fontWeight: buttonTextFontWeight,
	// 							textDecoration: "none",
	// 							letterSpacing: `${buttonLetterSpacing}px`,
	// 							border: "none",
	// 							color: buttonTextColor,
	// 							fontSize: fontSize
	// 						}}
	// 					>
	// 						{styleName != 3 && (
	// 							<div className="wp-block-guteblock-newsletter__content">
	// 								<RichText.Content
	// 									style={{}}
	// 									tagName="span"
	// 									value={buttonTitle}
	// 								/>
	// 							</div>
	// 						)}
	// 						{styleName == 3 && (
	// 							<div className="wp-block-guteblock-newsletter__content">
	// 								<Dashicon
	// 									icon={icon}
	// 									size={fontSize + 1}
	// 									fill={buttonTextColor}
	// 								/>
	// 							</div>
	// 						)}
	// 					</Button>
	// 					<style
	// 						dangerouslySetInnerHTML={{
	// 							__html: [
	// 								`.wp-block-guteblock-newsletter-inner:hover { color: ${hoverButtonTextColor} !important; background-color: ${hoverButtonBackgroundColor} !important; }`
	// 							].join("\n")
	// 						}}
	// 					></style>
	// 				</form>
	// 			</div>
	// 		</div>
	// 	);
	// }
});
