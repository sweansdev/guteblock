import "./style.editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/editor";
import edit from "./edit.js";
import classnames from "classnames";
import { useCountUp } from "react-countup";
import CountUp from "react-countup";

const attributes = {
	title: {
		type: "string",
		source: "html",
		selector: "h4"
	},
	prefix: {
		type: "string"
	},
	number: {
		type: "string"
	},
	alignment: {
		type: "string"
	}
};

registerBlockType("guteblock/count-up", {
	title: __("Count Up", "guteblock"),
	description: __("Count Up Block", "guteblock"),
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
				x1={21.914}
				y1={4.7}
				x2={4.652}
				y2={17.49}
			>
				<stop offset={0} stopColor="#eb7d31" />
				<stop offset={1} stopColor="#ee576f" />
			</linearGradient>
			<path
				d="M20.39 4.44H3.61c-.55 0-1 .45-1 1v13.22c0 .55.45 1 1 1h16.78c.55 0 1-.45 1-1V5.44c0-.56-.45-1-1-1zm-1 13.21H4.61V6.44h14.78v11.21z"
				fill="url(#prefix__SVGID_1_)"
			/>
			<linearGradient
				id="prefix__SVGID_2_"
				gradientUnits="userSpaceOnUse"
				x1={19.108}
				y1={0.914}
				x2={1.846}
				y2={13.703}
			>
				<stop offset={0} stopColor="#eb7d31" />
				<stop offset={1} stopColor="#ee576f" />
			</linearGradient>
			<path
				fill="url(#prefix__SVGID_2_)"
				d="M6.18 12.23h.96V8.66H5.36v.77h.82z"
			/>
			<linearGradient
				id="prefix__SVGID_3_"
				gradientUnits="userSpaceOnUse"
				x1={22.591}
				y1={5.615}
				x2={5.33}
				y2={18.404}
			>
				<stop offset={0} stopColor="#eb7d31" />
				<stop offset={1} stopColor="#ee576f" />
			</linearGradient>
			<path
				d="M11.42 11.93c.15-.07.31-.1.49-.1.22 0 .38.04.49.13.11.09.17.22.17.38 0 .11-.03.23-.09.35-.06.12-.17.25-.34.42l-1.59 1.5v.62h3.12v-.78H11.9l.95-.9c.27-.25.45-.48.55-.67.09-.2.14-.41.14-.63 0-.25-.06-.46-.19-.65-.13-.18-.31-.32-.54-.42-.23-.1-.5-.15-.8-.15-.37 0-.69.07-.97.2-.28.14-.51.32-.67.56l.7.45c.08-.13.2-.24.35-.31z"
				fill="url(#prefix__SVGID_3_)"
			/>
			<linearGradient
				id="prefix__SVGID_4_"
				gradientUnits="userSpaceOnUse"
				x1={22.17}
				y1={5.045}
				x2={4.908}
				y2={17.835}
			>
				<stop offset={0} stopColor="#eb7d31" />
				<stop offset={1} stopColor="#ee576f" />
			</linearGradient>
			<path
				d="M16.71 10.6c-.22 0-.43-.03-.63-.1-.21-.06-.39-.16-.55-.27l-.37.73c.2.14.44.25.72.33.28.08.57.11.86.11.37 0 .69-.06.95-.18s.45-.28.57-.49c.13-.2.19-.42.19-.66 0-.31-.1-.57-.29-.78-.19-.21-.47-.34-.83-.4l.93-1.06V7.2h-2.89v.77h1.76l-.85.96v.63h.44c.51 0 .77.17.77.51 0 .17-.07.3-.21.39-.14.09-.33.14-.57.14z"
				fill="url(#prefix__SVGID_4_)"
			/>
		</svg>
	),
	category: "guteblock",
	keywords: [
		__("countup", "guteblock"),
		__("counter", "guteblock"),
		__("count", "guteblock")
	],
	supports: {
		reusable: false,
		html: false,
		align: ["wide", "full"]
	},
	attributes,
	edit,
	save: ({ attributes }) => {
		const { title, prefix, number } = attributes;
		const classes = classnames({
			//	'some-class-name': condition,
		});

		const CompleteHook = () => {
			const {
				countUp,
				start,
				pauseResume,
				reset,
				update
			} = useCountUp({
				start: 0,
				end: 1234567,
				delay: 1000,
				duration: 5,
				onReset: () => console.log("Resetted!"),
				onUpdate: () => console.log("Updated!"),
				onPauseResume: () => console.log("Paused or resumed!"),
				onStart: ({ pauseResume }) => console.log(pauseResume),
				onEnd: ({ pauseResume }) => console.log(pauseResume)
			});
			return (
				<div>
					<div>{countUp}</div>
					<button onClick={start}>Start</button>
					<button onClick={reset}>Reset</button>
					<button onClick={pauseResume}>Pause/Resume</button>
					<button onClick={() => update(2000)}>
						Update to 2000
					</button>
				</div>
			);
		};

		return (
			<div className={classes}>
				<RichText.Content
					className={"wp-block-guteblock-count-up__title"}
					tagName="h4"
					value={title}
				/>
				<div className="wp-block-guteblock-count-up__container">
					<h5 className="wp-block-guteblock-count-up__prefix">
						{prefix}
					</h5>
					<h5 className="wp-block-guteblock-count-up__number">
						{number}
					</h5>
					<h5 className="wp-block-guteblock-count-up__number">
						{CompleteHook}
					</h5>
					<CountUp delay={2} end={number} />
				</div>
			</div>
		);
	}
});
