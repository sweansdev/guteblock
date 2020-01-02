import { Component } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import {
	RichText,
	InspectorControls,
	BlockControls,
	AlignmentToolbar,
	MediaUpload,
	PanelColorSettings
} from "@wordpress/editor";
import {
	PanelBody,
	RangeControl,
	IconButton,
	TextControl
} from "@wordpress/components";
import classnames from "classnames";
import { withSelect } from "@wordpress/data";

class AuthorProfileEdit extends Component {
	onChangeAuthorName = author_name => {
		this.props.setAttributes({ author_name });
	};

	onChangeAuthorDescription = author_description => {
		this.props.setAttributes({ author_description });
	};

	onChangeAlignment = alignment => {
		this.props.setAttributes({ alignment });
	};

	onSelectAuthorImage = ({ id, url }) => {
		this.props.setAttributes({ author_image_id: id });
		this.props.setAttributes({ author_image: url });
	};

	onChangeBackgroundColor = backgroundColor => {
		this.props.setAttributes({ backgroundColor });
	};
	onChangeImageBorderColor = imageBorderColor => {
		this.props.setAttributes({ imageBorderColor });
	};
	onChangeTitleColor = titleColor => {
		this.props.setAttributes({ titleColor });
	};
	onChangeTextColor = textColor => {
		this.props.setAttributes({ textColor });
	};

	render() {
		const {
			className,
			attributes,
			author_details,
			setAttributes
		} = this.props;
		const {
			is_first_load,
			author_name,
			author_description,
			author_image,
			author_image_id,
			alignment,
			paddingTop,
			paddingBottom,
			social_facebook,
			social_twitter,
			social_instagram,
			social_pinterest,
			social_linkedin,
			social_youtube,
			backgroundColor,
			imageBorderColor,
			titleColor,
			textColor
		} = attributes;

		const classes = classnames(className, {
			[`align-${alignment}`]: alignment
		});

		if (author_details && is_first_load) {
			this.props.setAttributes({ is_first_load: false });
			this.props.setAttributes({ author_name: author_details.name });
			this.props.setAttributes({
				author_description: author_details.description
			});
			this.props.setAttributes({
				author_image: author_details.avatar_urls[96]
			});
			this.props.setAttributes({ author_link: author_details.link });
		}

		let socialInitialOpen = false;
		if (
			social_facebook ||
			social_twitter ||
			social_instagram ||
			social_pinterest ||
			social_linkedin ||
			social_youtube
		) {
			socialInitialOpen = true;
		}

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
					<PanelColorSettings
						title={__("Color Settings", "guteblock")}
						colorSettings={[
							{
								value: backgroundColor,
								onChange: this.onChangeBackgroundColor,
								label: __(
									"Background Color",
									"guteblock"
								)
							},
							{
								value: imageBorderColor,
								onChange: this.onChangeImageBorderColor,
								label: __(
									"Image Border Color",
									"guteblock"
								)
							},
							{
								value: titleColor,
								onChange: this.onChangeTitleColor,
								label: __("Title Color", "guteblock")
							},
							{
								value: textColor,
								onChange: this.onChangeTextColor,
								label: __("Text Color", "guteblock")
							}
						]}
					/>
					<PanelBody
						title={__("Social Links", "guteblock")}
						initialOpen={socialInitialOpen}
					>
						<TextControl
							label={__("Facebook URL", "guteblock")}
							value={social_facebook}
							onChange={social_facebook =>
								setAttributes({ social_facebook })
							}
						/>
						<TextControl
							label={__("Twitter URL", "guteblock")}
							value={social_twitter}
							onChange={social_twitter =>
								setAttributes({ social_twitter })
							}
						/>
						<TextControl
							label={__("Instagram URL", "guteblock")}
							value={social_instagram}
							onChange={social_instagram =>
								setAttributes({ social_instagram })
							}
						/>
						<TextControl
							label={__("Pinterest URL", "guteblock")}
							value={social_pinterest}
							onChange={social_pinterest =>
								setAttributes({ social_pinterest })
							}
						/>
						<TextControl
							label={__("YouTube URL", "guteblock")}
							value={social_youtube}
							onChange={social_youtube =>
								setAttributes({ social_youtube })
							}
						/>
						<TextControl
							label={__("LinkedIn URL", "guteblock")}
							value={social_linkedin}
							onChange={social_linkedin =>
								setAttributes({ social_linkedin })
							}
						/>
					</PanelBody>
					<PanelBody
						title={__("Padding Settings", "guteblock")}
						initialOpen={false}
					>
						<RangeControl
							label={__("Padding Top", "guteblock")}
							value={paddingTop}
							onChange={paddingTop =>
								setAttributes({ paddingTop })
							}
							min={0}
							max={500}
							step={1}
						/>
						<RangeControl
							label={__("Padding Bottom", "guteblock")}
							value={paddingBottom}
							onChange={paddingBottom =>
								setAttributes({ paddingBottom })
							}
							min={0}
							max={500}
							step={1}
						/>
					</PanelBody>
				</InspectorControls>

				<div
					className={classes}
					style={{
						paddingTop: paddingTop,
						paddingBottom: paddingBottom,
						backgroundColor: backgroundColor
					}}
				>
					<MediaUpload
						onSelect={this.onSelectAuthorImage}
						allowedTypes={["image"]}
						value={author_image_id} // To highlight the selected image in the Media Library
						render={({ open }) => {
							return (
								<>
									{author_image ? (
										<div
											className="wp-block-guteblock-author-profile__avatarOuter"
											style={{
												borderColor: imageBorderColor
											}}
										>
											<img
												src={author_image}
												alt={author_name}
												onClick={open}
												data-id={
													author_image_id
												}
											/>
										</div>
									) : (
										<IconButton
											className="components-icon-button-components-toolbar__control"
											label={__(
												"Edit Image",
												"guteblock"
											)}
											onClick={open}
											icon="format-image"
										/>
									)}
								</>
							);
						}}
					/>
					{(social_facebook ||
						social_twitter ||
						social_instagram ||
						social_pinterest ||
						social_youtube ||
						social_linkedin) && (
						<div className="wp-block-guteblock-author-profile__socialOuter">
							{social_facebook && (
								<a
									className="social_links social_facebook"
									href={social_facebook}
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="icon-facebook"></i>
								</a>
							)}
							{social_twitter && (
								<a
									className="social_links social_twitter"
									href={social_twitter}
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="icon-twitter"></i>
								</a>
							)}
							{social_instagram && (
								<a
									className="social_links social_instagram"
									href={social_instagram}
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="icon-instagram"></i>
								</a>
							)}
							{social_pinterest && (
								<a
									className="social_links social_pinterest"
									href={social_pinterest}
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="icon-pinterest"></i>
								</a>
							)}
							{social_youtube && (
								<a
									className="social_links social_youtube"
									href={social_youtube}
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="icon-youtube"></i>
								</a>
							)}
							{social_linkedin && (
								<a
									className="social_links social_linkedin"
									href={social_linkedin}
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="icon-linkedin-squared"></i>
								</a>
							)}
						</div>
					)}
					<div className="wp-block-guteblock-author-profile__contentOuter">
						<RichText
							className={
								"wp-block-guteblock-author-profile__authorName"
							}
							tagName="h4"
							onChange={this.onChangeAuthorName}
							value={author_name}
							placeholder={__("Author Name", "guteblock")}
							style={{ color: titleColor }}
						/>
						<RichText
							className={
								"wp-block-guteblock-author-profile__authorDescription"
							}
							tagName="p"
							onChange={this.onChangeAuthorDescription}
							value={author_description}
							placeholder={__(
								"Author Description",
								"guteblock"
							)}
							style={{ color: textColor }}
						/>
					</div>
				</div>
			</>
		);
	}
}

export default withSelect(select => {
	const author_details = select("core").getAuthors();
	return {
		author_details: author_details[0]
	};
})(AuthorProfileEdit);
