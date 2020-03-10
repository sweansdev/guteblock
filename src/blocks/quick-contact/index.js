import "./style.editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/editor";
// import { TextareaControl,TextControl,Button } from "@wordpress/components";
import edit from "./edit.js";
import classnames from 'classnames';

const attributes = {
	width: {
		type: "number",
		default: 100
	},
	bgColor: {
		type: "string",
		default: "#000000"
	},
	horizontalPadding: {
		type: "number",
		default: 15
	},
	verticalPadding: {
		type: "number",
		default: 15
	},
	formBackgroundColor: {
		type: "string",
		default: "#000000"
	},
	borderRadius: {
		type: "number",
		default: 0
	},
	padding: {
		type: "number",
		default: 20
	},
	showFormShadow: {
		type: "boolean",
		default: false
	},
	formShadow: {
		type: "number",
		default: 2
	},
	formShadowColor: {
		type: "string",
		default: "#806760"
	},
	title: {
		type: "string",
		source: "html",
		selector: "h4",
		default: "Quick Contact"
	},
	titleColor: {
		type: "string",
		default: "#ffffff"
	},
	titleFontSize: {
		type: "number",
		default: 35
	},
	titleTextTransform: {
		type: "string",
		default: "Uppercase"
	},
	titleVerticalPadding: {
		type: "number",
		default: 0
	},
	align: {
		type: "string",
		default: "wide"
	},
	alignment: {
		type: "string",
		default: "center"
	},
	info: {
		type: "string",
		source: "html",
		selector: "p",
		default: "Contact us today, and get reply with in 24 hours!"
	},
	infoColor: {
		type: "string",
		default: "#ffffff"
	},
	buttonTitle: {
		type: "string",
		source: "html",
		selector: "span",
		default: "Send"
	},
	inputVerticalMargin: {
		type: "number",
		default: 5
	},
	inputVerticalPadding: {
		type: "number",
		default: 15
	},
	inputBorderTopLeftRadius: {
		type: "number",
		default: 5
	},
	inputBorderTopRightRadius: {
		type: "number",
		default: 5
	},
	inputBorderBottomLeftRadius: {
		type: "number",
		default: 5
	},
	inputBorderBottomRightRadius: {
		type: "number",
		default: 5
	},
	inputHorizontalPadding: {
		type: "number",
		default: 15
	},
	inputTextColor: {
		type: "string",
		default: "#ffcebf"
	},
	inputBackgroundColor: {
		type: "string",
		default: "#000000"
	},
	inputFontSize: {
		type: "number",
		default: 15
	},
	showInputBorder: {
		type: "boolean",
		default: true
	},
	inputBorderColor: {
		type: "string",
		default: "#806760"
	},
	buttonTextColor: {
		type: "string",
		default: "#ffffff"
	},
	enablePhoneField: {
		type: "boolean",
		default: false
	},
	enableWebsiteField: {
		type: "boolean",
		default: false
	},
	buttonBackgroundColor: {
		type: "string",
		default: "#f24848"
	},
	buttonWidth: {
		type: "number",
		default:30
	},
	buttonBorderRadius: {
		type: "number",
		default:5
	},
	buttonPadding: {
		type: "number",
		default: 10
	},
	hoverButtonBackgroundColor: {
		type: "string"
	},
	hoverButtonTextColor: {
		type: "string"
	},
	authorEmailId: {
		type: "string",
		default: ""
	}

};

registerBlockType("guteblock/quick-contact", {
	title: __("Quick Contact", "guteblock"),
	description: __("Block For Showing Quick Contact", "guteblock"),
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
				x1={15.708}
				y1={0.619}
				x2={5.109}
				y2={16.829}
			>
				<stop offset={0} stopColor="#eb7d31" />
				<stop offset={1} stopColor="#ee576f" />
			</linearGradient>
			<path
				d="M19 9.062s-5.188-.333-7 1.938c2-4.896 7-5.938 7-5.938v-2l5 4-5 4.019v-2.019zm-18.974 14.938h23.947l-11.973-11.607-11.974 11.607zm1.673-14l10.291-7.488 3.053 2.218c.712-.459 1.391-.805 1.953-1.054l-5.006-3.637-11.99 8.725v12.476l7.352-7.127-5.653-4.113zm15.753 4.892l6.548 6.348v-11.612l-6.548 5.264z"
				fill="url(#prefix__SVGID_1_)"
			/>
			<g>
				<linearGradient
					id="prefix__SVGID_2_"
					gradientUnits="userSpaceOnUse"
					x1={22.02}
					y1={4.746}
					x2={11.421}
					y2={20.956}
				>
					<stop offset={0} stopColor="#eb7d31" />
					<stop offset={1} stopColor="#ee576f" />
				</linearGradient>
				<path
					d="M19 9.062s-5.188-.333-7 1.938c2-4.896 7-5.938 7-5.938v-2l5 4-5 4.019v-2.019zm-18.974 14.938h23.947l-11.973-11.607-11.974 11.607zm1.673-14l10.291-7.488 3.053 2.218c.712-.459 1.391-.805 1.953-1.054l-5.006-3.637-11.99 8.725v12.476l7.352-7.127-5.653-4.113zm15.753 4.892l6.548 6.348v-11.612l-6.548 5.264z"
					fill="url(#prefix__SVGID_2_)"
				/>
			</g>
		</svg>
	),
	category: "guteblock",
	keywords: [
		__("keyword1", "guteblock"),
		__("keyword2", "guteblock"),
		__("keyword3", "guteblock")
	],
	styles: [
		{
			name: "1",
			label: __("Basic", "guteblock"),
			isDefault: true
		},
		{
			name: "2",
			label: __("Advanced", "guteblock"),
			isDefault: false
		},
		{
			name: "3",
			label: __("Quick Contact Form 3", "guteblock"),
			isDefault: false
		}
	],
	supports: {
		reusable: false,
		html: false ,
		align: ["wide", "full"]
	},
	attributes,
	edit,
	save: ({ attributes }) => {
		
		const {
			width,
			bgColor,
			horizontalPadding,
			verticalPadding,
			formBackgroundColor,
			formShadow,
			formShadowColor,
			showFormShadow,
			borderRadius,
			padding,
			title,
			titleColor,
			titleTextTransform,
			titleFontSize,
			titleVerticalPadding,
			alignment,
			info,
			infoColor,
			buttonTitle,
			nameField,
			emailField,
			phoneField,
			websiteField,
			enablePhoneField,
			enableWebsiteField,
			messageField,
			inputHorizontalPadding,
			inputVerticalMargin,
			inputVerticalPadding,
			inputBorderBottomLeftRadius,
			inputBorderBottomRightRadius,
			inputBorderTopLeftRadius,
			inputBorderTopRightRadius,
			inputFontSize,
			inputBackgroundColor,
			showInputBorder,
			inputBorderColor,
			inputTextColor,	
			buttonTextColor,
			buttonBackgroundColor,
			hoverButtonBackgroundColor,
			hoverButtonTextColor,
			buttonBorderRadius,
			buttonWidth,
			buttonPadding,
			buttonTextTransform,
			authorEmailId
		} = attributes;

		const isStyle = RegExp(/is-style-/)
		const styleName = isStyle.test(attributes.className)
			? attributes.className.replace(isStyle, '')
			: 1
		
		const classes = classnames({
			[`align-${alignment}`]: alignment
		})
		let inputBorder,contactFormShadow,basicInputBorder,borderBottom,basicBorderRadius;
		{ showInputBorder ? (inputBorder = `1px solid ${inputBorderColor}`) : (inputBorder = "none")}
		{ showFormShadow ? (contactFormShadow= `0px 0px ${formShadow}px 0px ${formShadowColor}`): contactFormShadow = "none"}
		{ styleName == 3 ? (basicInputBorder = "none") : (basicInputBorder = inputBorder);}
		{ styleName == 3 ? (borderBottom = `2px solid ${inputBorderColor}`) : (borderBottom = inputBorder);}
		{ styleName == 3 ? (basicBorderRadius = "0") : (basicBorderRadius = inputBorderBottomLeftRadius);}
		{ styleName == 3 ? (basicBorderRadius = "0") : (basicBorderRadius = inputBorderBottomRightRadius);}
		return (
			<div className={classes}
				style={{
					alignment: alignment,
					backgroundColor:bgColor,
					paddingTop: verticalPadding,
					paddingBottom: verticalPadding,
					paddingLeft: horizontalPadding,
					paddingRight: horizontalPadding
				}}>
				<div className="wp-block-guteblock-quick-contact-form"
				style={{
					backgroundColor:formBackgroundColor,
					padding:padding,
					width: `${width}%`,
					borderRadius:borderRadius,
					boxShadow: contactFormShadow 
				}}>
					<div className={
						"wp-block-guteblock-quick-contact-form_align_center"
					}>
						<RichText.Content
							className={
								"wp-block-guteblock-quick-contact-form__title"
							}
							tagName="h4"
							value={title}
							placeholder={__(
								"Title",
								"guteblock"
							)}
							style={{
								color: titleColor,
								textTransform: titleTextTransform,
								fontSize: `${titleFontSize}px`,
								paddingTop: `${titleVerticalPadding}px`,
								paddingBottom: `${titleVerticalPadding}px`
							}}					
						/>
					</div>
					<div className={
						"wp-block-guteblock-quick-contact-form_align_center"
					}>
					{styleName != 3 && (	
						<RichText.Content
							className={
								"wp-block-guteblock-quick-contact-form__info"
							}
							tagName="p"
							value={info}
							placeholder={__(
								"Info",
								"guteblock"
							)}
							style={{
								color: infoColor
							}}						
						/>
					)}
					</div>
					<form
						action=""
						method="post"
						className="quickContactFormSubmit"
					>
						<div className={
							"wp-block-guteblock-quick-contact-form_align_left"
						}>
							<input
								className={
									"wp-block-guteblock-quick-contact-form__name_field"
								}
								placeholder={__(
									"Enter Your Name",
									"guteblock"
								)}
								style={{
									marginTop: `${inputVerticalMargin}px`,
									marginBottom: `${inputVerticalMargin}px`,  
									paddingTop: `${inputVerticalPadding}px`,
									paddingBottom: `${inputVerticalPadding}px`,
									paddingLeft: `${inputHorizontalPadding}px`,
									paddingRight: `${inputHorizontalPadding}px`, 
									fontSize: `${inputFontSize}px`,
									color: inputTextColor,
									backgroundColor: inputBackgroundColor,
									borderTop:basicInputBorder,
									borderBottom:borderBottom,
									borderLeft:basicInputBorder,
									borderRight:basicInputBorder,
									borderTopLeftRadius: `${inputBorderTopLeftRadius}px`,
									borderTopRightRadius: `${inputBorderTopRightRadius}px`, 
									borderBottomLeftRadius: `${basicBorderRadius}px`, 
									borderBottomRightRadius: `${basicBorderRadius}px` 
								}}
								type="text"
								name="quick_contact_form_name_field"
								value={nameField}
								required
							/>
						</div>
						<div className={
							"wp-block-guteblock-quick-contact-form_align_right"
						}>
							<input
								className={
									"wp-block-guteblock-quick-contact-form__email_field"
								}
								placeholder={__(
									"Enter Your Email",
									"guteblock"
								)}
								style={{
									marginTop: `${inputVerticalMargin}px`,
									marginBottom: `${inputVerticalMargin}px`,  
									paddingTop: `${inputVerticalPadding}px`,
									paddingBottom: `${inputVerticalPadding}px`,
									paddingLeft: `${inputHorizontalPadding}px`,
									paddingRight: `${inputHorizontalPadding}px`, 
									fontSize: `${inputFontSize}px`,
									color: inputTextColor,
									backgroundColor: inputBackgroundColor,
									borderTop:basicInputBorder,
									borderBottom:borderBottom,
									borderLeft:basicInputBorder,
									borderRight:basicInputBorder,
									borderTopLeftRadius: `${inputBorderTopLeftRadius}px`,
									borderTopRightRadius: `${inputBorderTopRightRadius}px`, 
									borderBottomLeftRadius: `${basicBorderRadius}px`, 
									borderBottomRightRadius: `${basicBorderRadius}px` 
								}}
								type="email"
								name="quick_contact_form_email_field"
								value={emailField}
								required
							/>
						</div>
						{enablePhoneField && (
						<div className={
							"wp-block-guteblock-quick-contact-form_align_left"
						}>
							<input
								className={
									"wp-block-guteblock-quick-contact-form__phone_field"
								}
								placeholder={__(
									"Enter Your Phone Number",
									"guteblock"
								)}
								style={{
									marginTop: `${inputVerticalMargin}px`,
									marginBottom: `${inputVerticalMargin}px`,  
									paddingTop: `${inputVerticalPadding}px`,
									paddingBottom: `${inputVerticalPadding}px`,
									paddingLeft: `${inputHorizontalPadding}px`,
									paddingRight: `${inputHorizontalPadding}px`, 
									fontSize: `${inputFontSize}px`,
									color: inputTextColor,
									backgroundColor: inputBackgroundColor,
									borderTop:basicInputBorder,
									borderBottom:borderBottom,
									borderLeft:basicInputBorder,
									borderRight:basicInputBorder,
									borderTopLeftRadius: `${inputBorderTopLeftRadius}px`,
									borderTopRightRadius: `${inputBorderTopRightRadius}px`, 
									borderBottomLeftRadius: `${basicBorderRadius}px`, 
									borderBottomRightRadius: `${basicBorderRadius}px` 
								}}
								type="text"
								name="quick_contact_form_phone_field"
								value={phoneField}
								required
							/>
						</div>
						)}
						{enableWebsiteField && (
						<div className={
							"wp-block-guteblock-quick-contact-form_align_right"
						}>
							<input
								className={
									"wp-block-guteblock-quick-contact-form__website_field"
								}
								placeholder={__(
									"Enter Your Website Here...",
									"guteblock"
								)}
								style={{
									marginTop: `${inputVerticalMargin}px`,
									marginBottom: `${inputVerticalMargin}px`,  
									paddingTop: `${inputVerticalPadding}px`,
									paddingBottom: `${inputVerticalPadding}px`,
									paddingLeft: `${inputHorizontalPadding}px`,
									paddingRight: `${inputHorizontalPadding}px`, 
									fontSize: `${inputFontSize}px`,
									color: inputTextColor,
									backgroundColor: inputBackgroundColor,
									borderTop:basicInputBorder,
									borderBottom:borderBottom,
									borderLeft:basicInputBorder,
									borderRight:basicInputBorder,
									borderTopLeftRadius: `${inputBorderTopLeftRadius}px`,
									borderTopRightRadius: `${inputBorderTopRightRadius}px`, 
									borderBottomLeftRadius: `${basicBorderRadius}px`, 
									borderBottomRightRadius: `${basicBorderRadius}px` 
								}}
								type="text"
								name="quick_contact_form_website_field"
								value={websiteField}
								required
							/>
						</div>
						)}
						<div className={
							"wp-block-guteblock-quick-contact-form_align_center"
						}>
							<textarea
								className={
									"wp-block-guteblock-quick-contact-form__message_field"
								}
								placeholder={__(
									"Type Message Here...",
									"guteblock"
								)}
								style={{
								marginTop: `${inputVerticalMargin}px`,
								marginBottom: `${inputVerticalMargin}px`,  
								paddingTop: `${inputVerticalPadding}px`,
								paddingBottom: `${inputVerticalPadding}px`,
								paddingLeft: `${inputHorizontalPadding}px`,
								paddingRight: `${inputHorizontalPadding}px`, 
								fontSize: `${inputFontSize}px`,
								color: inputTextColor,
								backgroundColor: inputBackgroundColor,
								borderTop:basicInputBorder,
								borderBottom:borderBottom,
								borderLeft:basicInputBorder,
								borderRight:basicInputBorder,
								borderTopLeftRadius: `${inputBorderTopLeftRadius}px`,
								borderTopRightRadius: `${inputBorderTopRightRadius}px`, 
								borderBottomLeftRadius: `${basicBorderRadius}px`, 
								borderBottomRightRadius: `${basicBorderRadius}px` 
							}}
								name="quick_contact_form_message_field"
								value={messageField}
								required
							/>
						</div>
							<input
								type="hidden"
								name="quick_contact_form_authorEmailId_field"
								value={authorEmailId}
							/>
							<input 
								type="hidden" 
								value=""
								name="recaptcha_response" 
								id="recaptchaResponse"
								/>
						<div className={
							"wp-block-guteblock-quick-contact-form_align_center"
						}>
							<button
								target="_blank"
								rel="noopener noreferrer"
								className={
									"wp-block-guteblock-quick-contact-form__submit_field"
								}
								style={{
									width: `${buttonWidth}%`,
									backgroundColor: buttonBackgroundColor,
									color: buttonTextColor,
									borderRadius: `${buttonBorderRadius}px`,
									padding: buttonPadding,
									textTransform:buttonTextTransform,
								}}
							>
								<RichText.Content
									style={{}}
									tagName="span"
									value={buttonTitle}
								/>
							</button>
						</div>
					</form>
					<style
						dangerouslySetInnerHTML={{
							__html: [
								`.wp-block-guteblock-quick-contact-form__submit_field:hover {
									color: ${hoverButtonTextColor} !important;
									background-color: ${hoverButtonBackgroundColor} !important;
									transition: 1s ease all !important;
								}
								`
							].join("\n")
						}}
					></style>
				</div>
				<div className="wp-block-guteblock-quick-contact__popup-window"></div>
			</div>
		);
	}
});
