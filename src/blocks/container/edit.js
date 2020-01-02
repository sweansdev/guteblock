import { Component } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import {
	InspectorControls,
	InnerBlocks,
	BlockControls,
	AlignmentToolbar
} from "@wordpress/editor";
import { PanelBody } from "@wordpress/components";
import classnames from "classnames";

class ContainerEdit extends Component {
	onChangeAlignment = alignment => {
		this.props.setAttributes({ alignment });
	};

	render() {
		const { className, attributes } = this.props;
		const { alignment } = attributes;

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
					<PanelBody title={__("Panel Settings", "guteblock")}>
						<h4 style={{ textAlign: "center" }}>
							More settings will be coming in our future
							upgrades
						</h4>
					</PanelBody>
				</InspectorControls>

				<div className={classes}>
					<InnerBlocks
					//allowedBlocks={["guteblock/testimonial"]}
					// template={[
					// 	["guteblock/team-member"],
					// 	["guteblock/team-member"],
					// 	["guteblock/team-member"]
					// ]}
					//templateLock="insert"
					/>
				</div>
			</>
		);
	}
}

export default ContainerEdit;
