import { Component } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import {
	RichText,
	InspectorControls,
	BlockControls,
	AlignmentToolbar
} from "@wordpress/editor";
import {
	PanelBody,
	TextControl
} from "@wordpress/components";
import classnames from 'classnames';

class SomeClassName extends Component {	
	
	onChangeTitle = title => {
		this.props.setAttributes({ title });
	};

	onChangeAlignment = alignment => {
		this.props.setAttributes({ alignment });
	};
	
	render() {
		const { className, attributes } = this.props;
		const {
			title,
			alignment
		} = attributes;

		const classes = classnames(className, {
			[`align-${alignment}`]: alignment
		})
		
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
							value= {title}
							//onChange= {this.onChangeTitle}
							placeholder= "Some settings"
							help= { __("This is a basic description", "guteblock") }
						/>

					</PanelBody>
				</InspectorControls>				

				<div className={classes}>
					<RichText
						className={
							"wp-block-guteblock-some-block__title"
						}
						tagName="h2"
						onChange={this.onChangeTitle}
						value={title}
						placeholder={__(
							"Title",
							"guteblock"
						)}						
					/>
				</div>
			</>
		);
	}
}

export default SomeClassName;