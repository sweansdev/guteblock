import { Component } from "@wordpress/element";
import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { decodeEntities } from "@wordpress/html-entities";
import {
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl
	//	Dashicon
} from "@wordpress/components";
import {
	InspectorControls,
	BlockControls,
	AlignmentToolbar
} from "@wordpress/editor";
import classnames from "classnames";
//import {
//	PanelBody,
//	TextControl
//} from "@wordpress/components";
//import classnames from 'classnames';

class PostGridEdit extends Component {
	onChangeNumberofPosts = numberofposts => {
		this.props.setAttributes({ numberofposts });
	};

	onChangeNumberofWordsinExcerpt = numberofwords => {
		this.props.setAttributes({ numberofwords });
	};

	onChangeCategories = categories => {
		this.props.setAttributes({ postCategories: categories.join(",") });
	};

	onChangeColumns = columns => {
		this.props.setAttributes({ columns });
	};

	onChangeAlignment = alignment => {
		this.props.setAttributes({ alignment });
	};

	toggleExcerpt = enable_excerpt => {
		this.props.setAttributes({ enable_excerpt });
	};

	onChangeTitleFontSize = title_fontsize => {
		this.props.setAttributes({ title_fontsize });
	};

	onChangeContentFontSize = content_fontsize => {
		this.props.setAttributes({ content_fontsize });
	};

	render() {
		const { posts, className, attributes, categories } = this.props;
		const {
			numberofposts,
			postCategories,
			columns,
			alignment,
			numberofwords,
			enable_excerpt,
			title_fontsize,
			content_fontsize
		} = attributes;

		const classes = classnames(className, {
			[`has-${columns}-columns`]: columns,
			[`align-${alignment}`]: alignment
		});

		const regex = /(<([^>]+)>)/gi;

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
					{/* <div className="panel-outer"> */}
					{/* <div className="components-panel__body gb-admin-tabs">
							<div className="gb-admin-tab active" onClick={ this.onTabChange() }>
								<Dashicon icon="admin-home" />
								<span>Layout</span>
							</div>
							<div className="gb-admin-tab">
								<Dashicon icon="admin-home" />
								<span>Style</span>
							</div>
							<div className="gb-admin-tab">
								<Dashicon icon="admin-home" />
								<span>Advanced</span>
							</div>
							
						</div>
						<div className="panel-layout"> */}
					<PanelBody title={__("Font Size", "guteblock")}>
						<RangeControl
							label={__("Title Font Size", "guteblock")}
							value={title_fontsize}
							min={15}
							max={100}
							step={1}
							onChange={this.onChangeTitleFontSize}
						/>
						<RangeControl
							label={__("Content Font Size", "guteblock")}
							value={content_fontsize}
							min={10}
							max={50}
							step={1}
							onChange={this.onChangeContentFontSize}
						/>
					</PanelBody>
					<PanelBody title={__("Posts Settings", "guteblock")}>
						<RangeControl
							label={__("Columns", "guteblock")}
							value={columns}
							min={1}
							max={4}
							step={1}
							onChange={this.onChangeColumns}
						/>
						<RangeControl
							label={__("Number of Posts", "guteblock")}
							value={numberofposts}
							min={1}
							max={10}
							step={1}
							onChange={this.onChangeNumberofPosts}
						/>
						<SelectControl
							multiple
							label={__("Category", "guteblock")}
							onChange={this.onChangeCategories}
							options={
								categories &&
								categories.map(category => ({
									value: category.id,
									label: category.name
								}))
							}
							value={
								postCategories &&
								postCategories.split(",")
							}
						/>
					</PanelBody>
					<PanelBody title={__("Excerpt Settings", "guteblock")}>
						<ToggleControl
							label={__("Show Excerpt", "guteblock")}
							checked={enable_excerpt}
							onChange={this.toggleExcerpt}
						/>
						<RangeControl
							label={__(
								"Number of Words in Excerpt",
								"guteblock"
							)}
							value={numberofwords}
							min={5}
							max={50}
							step={1}
							onChange={
								this.onChangeNumberofWordsinExcerpt
							}
						/>
					</PanelBody>
					{/* </div>

						<div className="panel-style">

						</div>

						<div className="panel-advanced">
							
						</div>
					</div> */}
				</InspectorControls>
				{posts && posts.length > 0 ? (
					<div className={classes}>
						{posts.map(post => (
							<div
								className="wp-block-guteblock-post-grid__single-post"
								key={posts.id}
							>
								{post._embedded["wp:featuredmedia"] && (
									<a
										target="_blank"
										rel="noopener noreferrer"
										href={post.link}
									>
										<img
											src={
												post._embedded[
													"wp:featuredmedia"
												][0].source_url
											}
											alt={
												post._embedded[
													"wp:featuredmedia"
												][0].alt_text
											}
										/>
									</a>
								)}
								<h4
									style={{
										fontSize: title_fontsize
									}}
								>
									<a
										target="_blank"
										rel="noopener noreferrer"
										href={post.link}
									>
										{decodeEntities(
											post.title.rendered
										)}
									</a>
								</h4>
								{enable_excerpt && (
									<div
										className="post-excerpt"
										style={{
											fontSize: content_fontsize
										}}
									>
										{decodeEntities(
											post.excerpt.rendered.replace(
												regex,
												""
											)
										)
											.replace("[…]", "")
											.split(" ")
											.splice(0, numberofwords)
											.join(" ")}
									</div>
								)}
							</div>
						))}
					</div>
				) : (
					<div>
						{posts
							? __("No Posts Found", "guteblock")
							: __("Loading Posts", "guteblock")}
					</div>
				)}
			</>
		);
	}
}

export default withSelect((select, props) => {
	const { attributes } = props;
	const { numberofposts, postCategories } = attributes;
	let query = { per_page: numberofposts, _embed: true };
	if (postCategories) {
		query["categories"] = postCategories;
	}
	return {
		posts: select("core").getEntityRecords("postType", "post", query),
		categories: select("core").getEntityRecords("taxonomy", "category", {
			per_page: -1
		})
	};
})(PostGridEdit);
