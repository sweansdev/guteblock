import { Component } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import {
	InspectorControls,
	BlockControls,
	AlignmentToolbar
} from "@wordpress/editor";
import { PanelBody } from "@wordpress/components";
import classnames from "classnames";

import { withSelect } from "@wordpress/data";

class SocialShareEdit extends Component {
	onChangeTitle = title => {
		this.props.setAttributes({ title });
	};

	onChangeAlignment = alignment => {
		this.props.setAttributes({ alignment });
	};

	render() {
		const { className, attributes, posturl } = this.props;
		const { alignment, url } = attributes;

		this.props.setAttributes({ url: posturl });

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
					<PanelBody
						title={__("Share Icon Settings", "guteblock")}
					></PanelBody>
				</InspectorControls>

				<div className={classes}>
					<a
						className="wp-block-guteblock-share-icons__icon wp-block-guteblock-share-icons__facebook"
						href={
							"https://www.facebook.com/share.php?u=" + url
						}
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
			</>
		);
	}
}

export default withSelect(select => {
	return {
		posturl: select("core/editor").getPermalink()
	};
})(SocialShareEdit);
