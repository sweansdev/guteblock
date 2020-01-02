import { Component } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import {
	RichText,
	InspectorControls,
	BlockControls,
	AlignmentToolbar
} from "@wordpress/editor";
import { PanelBody, TextControl } from "@wordpress/components";
import classnames from "classnames";
import CountUp from "react-countup";

class CountUpEdit extends Component {
	onChangeTitle = title => {
		this.props.setAttributes({ title });
	};
	onChangePrefix = prefix => {
		this.props.setAttributes({ prefix });
	};
	onChangeNumber = number => {
		this.props.setAttributes({ number });
	};

	onChangeAlignment = alignment => {
		this.props.setAttributes({ alignment });
	};

	render() {
		const { className, attributes } = this.props;
		const { title, prefix, number, alignment } = attributes;

		const classes = classnames(className, {
			[`align-${alignment}`]: alignment
		});

		return (
			<>
				<BlockControls>
					<AlignmentToolbar
						onChange={this.onChangeAlignment}
						value={alignment}
						isCollapsed={false}
					/>
				</BlockControls>
				<InspectorControls>
					<PanelBody title={__("Some Settings", "guteblock")}>
						<TextControl
							value={title}
							//onChange= {this.onChangeTitle}
							placeholder="Some settings"
							help={__(
								"This is a basic description",
								"guteblock"
							)}
						/>
					</PanelBody>
				</InspectorControls>

				<div className={classes}>
					<RichText
						className={"wp-block-guteblock-count-up__title"}
						tagName="h5"
						onChange={this.onChangeTitle}
						value={title}
						placeholder={__("Title", "guteblock")}
					/>
					<div className="wp-block-guteblock-count-up__container">
						<RichText
							className={
								"wp-block-guteblock-count-up__prefix"
							}
							tagName="h3"
							onChange={this.onChangePrefix}
							value={prefix}
							placeholder={__("Prefix", "guteblock")}
						/>
						<RichText
							className={
								"wp-block-guteblock-count-up__number"
							}
							tagName="h3"
							onChange={this.onChangeNumber}
							value={number}
							placeholder={__("Number", "guteblock")}
						/>
					</div>
					<CountUp delay={2} end={number} />
				</div>
			</>
		);
	}
}

export default CountUpEdit;
