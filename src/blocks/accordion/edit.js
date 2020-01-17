import { Component } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import {
	RichText,
	InspectorControls,
	BlockControls,
	AlignmentToolbar
} from "@wordpress/editor";
import {
	PanelBody
} from "@wordpress/components";
import classnames from 'classnames';

class AccordionEdit extends Component {	

	state = {
		status: null
	};

	componentDidMount() {

		this.setState({
			status: true
		});

	}
	
	onChangeTitle = title => {
		this.props.setAttributes({ title });
	};

	onChangeContent = content => {
		this.props.setAttributes({ content });
	};

	onToggleAccordion = () => {
		this.setState({
			status: !this.state.status
		});
		console.log(this.state.status);
	};

	onChangeAlignment = alignment => {
		this.props.setAttributes({ alignment });
	};
	
	render() {
		const { className, attributes } = this.props;
		const {
			title,
			content,
			alignment
		} = attributes;

		const classes = classnames(className, {
			[`align-${alignment}`]: alignment,
			[`gb-accordion-open`]: this.state.status
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

					</PanelBody>
				</InspectorControls>				

				<div className={classes}>
					<div className="wp-block-guteblock-accordion__title-outer">
						<RichText
							className={
								"wp-block-guteblock-accordion__title"
							}
							tagName="p"
							onChange={this.onChangeTitle}
							value={title}
							placeholder={__(
								"Accordion Title",
								"guteblock"
							)}
						/>
						<i onClick={this.onToggleAccordion} className="accordion-arrow"></i>
					</div>
					<div className="wp-block-guteblock-accordion__content-outer">
						<RichText
							className={
								"wp-block-guteblock-accordion__content"
							}
							tagName="p"
							onChange={this.onChangeContent}
							value={content}
							placeholder={__(
								"Accordion Content",
								"guteblock"
							)}						
						/>
					</div>
					<div className="clear"></div>
				</div>
			</>
		);
	}
}

export default AccordionEdit;