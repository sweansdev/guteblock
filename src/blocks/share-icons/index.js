import "./style.editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import {} from "@wordpress/editor";
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
		default: "center"
	},
	alignment: {
		type: "string",
		default: "center"
	},
	url: {
		type: "string"
	}
};

registerBlockType("guteblock/share-icons", {
	title: __("Share Icons", "guteblock"),
	description: __("Block for displaying share icons.", "guteblock"),
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
				x1={14.832}
				y1={-0.836}
				x2={0.52}
				y2={14.415}
			>
				<stop offset={0} stopColor="#eb7d31" />
				<stop offset={1} stopColor="#ee576f" />
			</linearGradient>
			<path
				d="M7.05 3.28c-2.3 0-4.17 1.87-4.17 4.17s1.87 4.17 4.17 4.17 4.17-1.87 4.17-4.17-1.87-4.17-4.17-4.17zm0 6.35c-1.2 0-2.17-.98-2.17-2.17 0-1.2.98-2.17 2.17-2.17s2.17.98 2.17 2.17c.01 1.19-.97 2.17-2.17 2.17z"
				fill="url(#prefix__SVGID_1_)"
			/>
			<linearGradient
				id="prefix__SVGID_2_"
				gradientUnits="userSpaceOnUse"
				x1={14.832}
				y1={-0.836}
				x2={0.52}
				y2={14.415}
			>
				<stop offset={0} stopColor="#eb7d31" />
				<stop offset={1} stopColor="#ee576f" />
			</linearGradient>
			<path
				d="M7.29 6.45h-.48c-.55 0-1 .45-1 1s.45 1 1 1h.48c.55 0 1-.45 1-1s-.45-1-1-1z"
				fill="url(#prefix__SVGID_2_)"
			/>
			<linearGradient
				id="prefix__SVGID_3_"
				gradientUnits="userSpaceOnUse"
				x1={25.076}
				y1={8.778}
				x2={10.764}
				y2={24.029}
			>
				<stop offset={0} stopColor="#eb7d31" />
				<stop offset={1} stopColor="#ee576f" />
			</linearGradient>
			<path
				d="M16.97 13.24c-2.3 0-4.17 1.87-4.17 4.17s1.87 4.17 4.17 4.17 4.17-1.87 4.17-4.17-1.87-4.17-4.17-4.17zm0 6.35c-1.2 0-2.17-.98-2.17-2.17 0-1.2.98-2.17 2.17-2.17 1.2 0 2.17.98 2.17 2.17 0 1.2-.97 2.17-2.17 2.17z"
				fill="url(#prefix__SVGID_3_)"
			/>
			<linearGradient
				id="prefix__SVGID_4_"
				gradientUnits="userSpaceOnUse"
				x1={25.076}
				y1={8.778}
				x2={10.764}
				y2={24.029}
			>
				<stop offset={0} stopColor="#eb7d31" />
				<stop offset={1} stopColor="#ee576f" />
			</linearGradient>
			<path
				d="M16.97 15.81c-.55 0-1 .45-1 1v1.22c0 .55.45 1 1 1s1-.45 1-1v-1.22c0-.56-.45-1-1-1z"
				fill="url(#prefix__SVGID_4_)"
			/>
			<linearGradient
				id="prefix__SVGID_5_"
				gradientUnits="userSpaceOnUse"
				x1={20.018}
				y1={4.031}
				x2={5.706}
				y2={19.282}
			>
				<stop offset={0} stopColor="#eb7d31" />
				<stop offset={1} stopColor="#ee576f" />
			</linearGradient>
			<path
				d="M14.05 11.2h5.84c.55 0 1-.45 1-1V4.36c0-.55-.45-1-1-1h-5.84c-.55 0-1 .45-1 1v5.84c0 .55.45 1 1 1zm1-5.84h3.84V9.2h-3.84V5.36z"
				fill="url(#prefix__SVGID_5_)"
			/>
			<linearGradient
				id="prefix__SVGID_6_"
				gradientUnits="userSpaceOnUse"
				x1={19.855}
				y1={4.206}
				x2={6.31}
				y2={18.639}
			>
				<stop offset={0} stopColor="#eb7d31" />
				<stop offset={1} stopColor="#ee576f" />
			</linearGradient>
			<path
				d="M16.97 5.66c-.55 0-1 .41-1 .92v1.39c0 .51.45.92 1 .92s1-.41 1-.92V6.59c0-.51-.45-.93-1-.93z"
				fill="url(#prefix__SVGID_6_)"
			/>
			<linearGradient
				id="prefix__SVGID_7_"
				gradientUnits="userSpaceOnUse"
				x1={19.803}
				y1={3.829}
				x2={5.491}
				y2={19.08}
			>
				<stop offset={0} stopColor="#eb7d31" />
				<stop offset={1} stopColor="#ee576f" />
			</linearGradient>
			<path
				d="M8.46 13.5H5.64c-1.38 0-2.51 1.12-2.51 2.51v2.82c0 1.38 1.12 2.51 2.51 2.51h2.82c1.38 0 2.51-1.12 2.51-2.51v-2.82c0-1.39-1.12-2.51-2.51-2.51zm.51 5.33c0 .28-.23.51-.51.51H5.64c-.28 0-.51-.23-.51-.51v-2.82c0-.28.23-.51.51-.51h2.82c.28 0 .51.23.51.51v2.82z"
				fill="url(#prefix__SVGID_7_)"
			/>
			<linearGradient
				id="prefix__SVGID_8_"
				gradientUnits="userSpaceOnUse"
				x1={19.698}
				y1={3.731}
				x2={5.386}
				y2={18.982}
			>
				<stop offset={0} stopColor="#eb7d31" />
				<stop offset={1} stopColor="#ee576f" />
			</linearGradient>
			<path
				d="M7.45 15.87h-.16c-.55 0-1 .45-1 1s.45 1 1 1h.15c.55 0 1-.45 1-1s-.44-1-.99-1z"
				fill="url(#prefix__SVGID_8_)"
			/>
		</svg>
	),
	category: "guteblock",
	keywords: [__("social", "guteblock"), __("icons", "guteblock")],
	supports: {
		reusable: false,
		html: false,
		align: ["wide", "full"]
	},
	attributes,
	edit,
	save: ({ attributes }) => {
		const { alignment, url } = attributes;

		const classes = classnames({
			[`align-${alignment}`]: alignment
		});

		return (
			<div className={classes}>
				<a
					className="wp-block-guteblock-share-icons__icon wp-block-guteblock-share-icons__facebook"
					href={"https://www.facebook.com/share.php?u=" + url}
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className={`icon-facebook`}></i>
				</a>
				<a
					className="wp-block-guteblock-share-icons__icon wp-block-guteblock-share-icons__twitter"
					href={"https://twitter.com/share?url=" + url}
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className={`icon-twitter`}></i>
				</a>
			</div>
		);
	}
});
