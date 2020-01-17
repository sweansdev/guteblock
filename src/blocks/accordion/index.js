import "./style.editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/editor";
import edit from "./edit.js";
import classnames from 'classnames';

const attributes = {
	title: {
		type: "string",
		source: "html",
		selector: "p.wp-block-guteblock-accordion__title"
	},
	content: {
		type: "string",
		source: "html",
		selector: "p.wp-block-guteblock-accordion__content"
	},
	align: {
		type: "string",
		default: "center"
	},
	alignment: {
		type: "string",
		default: "left"
	}
};

registerBlockType("guteblock/accordion", {
	title: __("Accordion Block", "guteblock"),
	description: __("Block for adding accordion.", "guteblock"),
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
				x1={18.698}
				y1={-1.483}
				x2={-0.839}
				y2={15.648}
			>
				<stop offset={0} stopColor="#eb7d31" />
				<stop offset={1} stopColor="#ee576f" />
			</linearGradient>
			<path
				d="M3.86 5.39h16.29c.55 0 1-.45 1-1s-.45-1-1-1H3.86c-.55 0-1 .45-1 1s.44 1 1 1z"
				fill="url(#prefix__SVGID_1_)"
			/>
			<linearGradient
				id="prefix__SVGID_2_"
				gradientUnits="userSpaceOnUse"
				x1={20.441}
				y1={0.505}
				x2={0.903}
				y2={17.635}
			>
				<stop offset={0} stopColor="#eb7d31" />
				<stop offset={1} stopColor="#ee576f" />
			</linearGradient>
			<path
				d="M20.14 6.91H3.86c-.55 0-1 .45-1 1s.45 1 1 1h16.29c.55 0 1-.45 1-1s-.45-1-1.01-1z"
				fill="url(#prefix__SVGID_2_)"
			/>
			<linearGradient
				id="prefix__SVGID_3_"
				gradientUnits="userSpaceOnUse"
				x1={20.524}
				y1={0.6}
				x2={0.987}
				y2={17.73}
			>
				<stop offset={0} stopColor="#eb7d31" />
				<stop offset={1} stopColor="#ee576f" />
			</linearGradient>
			<path
				d="M3.86 12.86h7.64c.55 0 1-.45 1-1s-.45-1-1-1H3.86c-.55 0-1 .45-1 1s.44 1 1 1z"
				fill="url(#prefix__SVGID_3_)"
			/>
			<linearGradient
				id="prefix__SVGID_4_"
				gradientUnits="userSpaceOnUse"
				x1={22.376}
				y1={2.711}
				x2={2.838}
				y2={19.841}
			>
				<stop offset={0} stopColor="#eb7d31" />
				<stop offset={1} stopColor="#ee576f" />
			</linearGradient>
			<path
				d="M3.86 16.6h7.64c.55 0 1-.45 1-1s-.45-1-1-1H3.86c-.55 0-1 .45-1 1s.44 1 1 1z"
				fill="url(#prefix__SVGID_4_)"
			/>
			<linearGradient
				id="prefix__SVGID_5_"
				gradientUnits="userSpaceOnUse"
				x1={26.242}
				y1={7.122}
				x2={6.705}
				y2={24.252}
			>
				<stop offset={0} stopColor="#eb7d31" />
				<stop offset={1} stopColor="#ee576f" />
			</linearGradient>
			<path
				d="M20.14 18.61H3.86c-.55 0-1 .45-1 1s.45 1 1 1h16.29c.55 0 1-.45 1-1s-.45-1-1.01-1z"
				fill="url(#prefix__SVGID_5_)"
			/>
		</svg>
    ),
	category: "guteblock",
	keywords: [
		__("accordion", "guteblock")
	],
	supports: {
		reusable: false,
		html: false ,
		align: ["wide", "full"]
	},
	attributes,
	edit,
	save: ({ attributes }) => {
		
		const {
			title,
			content,
			alignment
		} = attributes;

		const classes = classnames({
			[`align-${alignment}`]: alignment
		})

		return (
			<div className={classes}>
				<div className="wp-block-guteblock-accordion__title-outer">
					<RichText.Content
						className={
							"wp-block-guteblock-accordion__title"
						}
						tagName="p"
						value={title}
						placeholder={__(
							"Accordion Title",
							"guteblock"
						)}
					/>
					<i className="accordion-arrow"></i>
				</div>
				<div className="wp-block-guteblock-accordion__content-outer">
					<RichText.Content
						className={
							"wp-block-guteblock-accordion__content"
						}
						tagName="p"
						value={content}
						placeholder={__(
							"Accordion Content",
							"guteblock"
						)}						
					/>
				</div>	
				<div className="clear"></div>				
			</div>
		);
	}
});
