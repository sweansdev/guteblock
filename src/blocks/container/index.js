import "./style.editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { InnerBlocks } from "@wordpress/editor";
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
		default: "wide"
	},
	alignment: {
		type: "string",
		default: "left"
	}
};

registerBlockType("guteblock/container", {
	title: __("Container", "guteblock"),
	description: __("Container for other blocks", "guteblock"),
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
				x1={20.575}
				y1={4.608}
				x2={4.78}
				y2={18.224}
			>
				<stop offset={0} stopColor="#eb7d31" />
				<stop offset={1} stopColor="#ee576f" />
			</linearGradient>
			<path
				d="M20.47 5.06H3.53c-.55 0-1 .45-1 1v11.88c0 .55.45 1 1 1h16.95c.55 0 1-.45 1-1V6.06c-.01-.55-.45-1-1.01-1zm-1 11.88H4.53V7.06h14.95v9.88z"
				fill="url(#prefix__SVGID_1_)"
			/>
			<linearGradient
				id="prefix__SVGID_2_"
				gradientUnits="userSpaceOnUse"
				x1={18.465}
				y1={2.161}
				x2={2.67}
				y2={15.777}
			>
				<stop offset={0} stopColor="#eb7d31" />
				<stop offset={1} stopColor="#ee576f" />
			</linearGradient>
			<path
				d="M7.05 15.06c.55 0 1-.45 1-1V9.94c0-.55-.45-1-1-1s-1 .45-1 1v4.12c0 .55.45 1 1 1z"
				fill="url(#prefix__SVGID_2_)"
			/>
			<linearGradient
				id="prefix__SVGID_3_"
				gradientUnits="userSpaceOnUse"
				x1={19.872}
				y1={3.792}
				x2={4.077}
				y2={17.409}
			>
				<stop offset={0} stopColor="#eb7d31" />
				<stop offset={1} stopColor="#ee576f" />
			</linearGradient>
			<path
				d="M10.35 15.06c.55 0 1-.45 1-1V9.94c0-.55-.45-1-1-1s-1 .45-1 1v4.12c0 .55.45 1 1 1z"
				fill="url(#prefix__SVGID_3_)"
			/>
			<linearGradient
				id="prefix__SVGID_4_"
				gradientUnits="userSpaceOnUse"
				x1={21.278}
				y1={5.424}
				x2={5.484}
				y2={19.04}
			>
				<stop offset={0} stopColor="#eb7d31" />
				<stop offset={1} stopColor="#ee576f" />
			</linearGradient>
			<path
				d="M13.65 15.06c.55 0 1-.45 1-1V9.94c0-.55-.45-1-1-1s-1 .45-1 1v4.12c0 .55.45 1 1 1z"
				fill="url(#prefix__SVGID_4_)"
			/>
			<linearGradient
				id="prefix__SVGID_5_"
				gradientUnits="userSpaceOnUse"
				x1={22.685}
				y1={7.056}
				x2={6.89}
				y2={20.672}
			>
				<stop offset={0} stopColor="#eb7d31" />
				<stop offset={1} stopColor="#ee576f" />
			</linearGradient>
			<path
				d="M16.95 15.06c.55 0 1-.45 1-1V9.94c0-.55-.45-1-1-1s-1 .45-1 1v4.12c0 .55.45 1 1 1z"
				fill="url(#prefix__SVGID_5_)"
			/>
		</svg>
	),
	category: "guteblock",
	keywords: [__("container", "guteblock")],
	supports: {
		reusable: false,
		html: false,
		align: ["wide", "full"]
	},
	attributes,
	edit,
	save: ({ attributes }) => {
		const { alignment } = attributes;

		const classes = classnames({
			[`align-${alignment}`]: alignment
		});

		return (
			<div className={classes}>
				<InnerBlocks.Content />
			</div>
		);
	}
});
