import "./style.editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/editor";
import edit from "./edit.js";
import classnames from "classnames";

const attributes = {
	title: {
		type: "string",
		source: "html",
		selector: "h4"
	},
	align: {
		type: "string",
		default: "full"
	},
	alignment: {
		type: "string",
		default: "center"
	},
	paddingTop: {
		type: "number",
		default: 200
	},
	paddingBottom: {
		type: "number",
		default: 200
	},
	imageID: {
		type: "number"
	},
	imageUrl: {
		type: "string"
	},
	overlay: {
		type: "boolean",
		default: false
	},
	overlayColor: {
		type: "string"
	},
	overlayOpacity: {
		type: "number",
		default: 0.3
	},
	fixedBackground: {
		type: "boolean",
		default: false
	},
	backgroundColor: {
		type: "string",
		default: "#333333"
	},
	textColor: {
		type: "string",
		default: "#ffffff"
	},
	enableButton: {
		type: "boolean",
		default: false
	},
	buttonText: {
		type: "string",
		default: "Click Me"
	},
	buttonLink: {
		type: "string",
		default: "#"
	},
	buttonTextColor: {
		type: "string",
		default: "#ffffff"
	},
	buttonBackgroundColor: {
		type: "string",
		default: "#1ebbff"
	},
	buttonBorderRadius: {
		type: "number",
		default: 5
	},
	containerWidth: {
		type: "number",
		default: 1100
	}
};

registerBlockType("guteblock/cta", {
	title: __("Call To Action", "guteblock"),
	description: __("Call to action block.", "guteblock"),
	icon: (
		<svg
			id="prefix__Layer_1"
			x={0}
			y={0}
			viewBox="0 0 24 24"
			xmlSpace="preserve"
		>
		<linearGradient
			id="prefix__SVGID_1_"
			gradientUnits="userSpaceOnUse"
			x1={17.226}
			y1={-0.516}
			x2={0.861}
			y2={14.617}
		>
			<stop offset={0} stopColor="#eb7d31" />
			<stop offset={1} stopColor="#ee576f" />
		</linearGradient>
		<path
			d="M4.07 5.32h15.84c.55 0 1-.45 1-1s-.45-1-1-1H4.07c-.55 0-1 .45-1 1s.45 1 1 1z"
			fill="url(#prefix__SVGID_1_)"
		/>
		<linearGradient
			id="prefix__SVGID_2_"
			gradientUnits="userSpaceOnUse"
			x1={24.218}
			y1={7.045}
			x2={7.854}
			y2={22.179}
		>
			<stop offset={0} stopColor="#eb7d31" />
			<stop offset={1} stopColor="#ee576f" />
		</linearGradient>
		<path
			fill="url(#prefix__SVGID_2_)"
			d="M18.79 16.99H4.74v2.72H19.25v-2.72h-.23z"
		/>
		<linearGradient
			id="prefix__SVGID_3_"
			gradientUnits="userSpaceOnUse"
			x1={24.02}
			y1={6.83}
			x2={7.655}
			y2={21.964}
		>
			<stop offset={0} stopColor="#eb7d31" />
			<stop offset={1} stopColor="#ee576f" />
		</linearGradient>
		<path
			d="M19.92 11.24h-3.5c-.55 0-1 .45-1 1s.45 1 1 1h3.5c.55 0 1-.45 1-1s-.45-1-1-1z"
			fill="url(#prefix__SVGID_3_)"
		/>
		<linearGradient
			id="prefix__SVGID_4_"
			gradientUnits="userSpaceOnUse"
			x1={17.726}
			y1={0.024}
			x2={1.361}
			y2={15.157}
		>
			<stop offset={0} stopColor="#eb7d31" />
			<stop offset={1} stopColor="#ee576f" />
		</linearGradient>
		<path
			d="M14.28 8.39c0-.55-.45-1-1-1H4.07c-.55 0-1 .45-1 1s.45 1 1 1h9.21c.55 0 1-.44 1-1z"
			fill="url(#prefix__SVGID_4_)"
		/>
		</svg>
	),
	category: "guteblock",
	keywords: [
			__("call to action", "guteblock"),
			__("button", "guteblock")
	],
	supports: {
		reusable: false,
		html: false,
		align: ["wide", "full"]
	},
	styles: [
		{
			name: "left",
			label: __("Content Left", "guteblock"),
			isDefault: true
		},
		{
			name: "right",
			label: __("Content Right", "guteblock"),
			isDefault: false
		}
	],
	attributes,
	edit,	
	save: ({ attributes }) => {
		const {
			title,
			alignment,
			paddingTop,
			paddingBottom,
			imageUrl,
			overlay,
			overlayColor,
			overlayOpacity,
			textColor,
			fixedBackground,
			enableButton,
			buttonText,
			buttonLink,
			buttonTextColor,
			buttonBackgroundColor,
			buttonBorderRadius
		} = attributes;
		const classes = classnames({
			"background-fixed": fixedBackground,
			[`align-${alignment}`]: alignment
		});

		return (
			<div
				className={classes}
				style={{
					paddingTop: paddingTop,
					paddingBottom: paddingBottom,
					backgroundImage: `url(${imageUrl})`
				}}
			>
				{overlay && (
					<div
						className="wp-block-guteblock-cta__overlay"
						style={{
							backgroundColor: overlayColor,
							opacity: overlayOpacity
						}}
					></div>
				)}
				<div className="wp-block-guteblock-cta__contentOuter">
					<RichText.Content
						className={"wp-block-guteblock-cta__title"}
						tagName="h4"
						value={title}
						style={{
							color: textColor
						}}
					/>
					{enableButton && (
						<a href={buttonLink}>
							<RichText.Content
								className={
									"wp-block-guteblock-cta__button"
								}
								tagName="btn"
								value={buttonText}
								style={{
									color: buttonTextColor,
									backgroundColor: buttonBackgroundColor,
									borderRadius: [
										`${buttonBorderRadius}px`
									]
								}}
							/>
						</a>
					)}
				</div>
			</div>
		);
	}
});
