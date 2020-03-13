import { Component } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import {
	RichText,
	InspectorControls,
	BlockControls,
	AlignmentToolbar,
	PanelColorSettings
} from "@wordpress/editor";
import {
	PanelBody,
	ToggleControl,
	TextControl,
	SelectControl,
	RangeControl,
	TextareaControl,
	Button
} from "@wordpress/components";
import classnames from "classnames";

class QuickContact extends Component {
	onChangeSiteKey = siteKey => {
		this.props.setAttributes({ siteKey });
	};
	onChangeSecretKey = secretKey => {
		this.props.setAttributes({ secretKey });
	};
	onChangeBgLinearGradientOne = bgLinearGradientOne => {
		this.props.setAttributes({ bgLinearGradientOne });
	};
	onChangeBgLinearGradientTwo = bgLinearGradientTwo => {
		this.props.setAttributes({ bgLinearGradientTwo });
	};
	onChangeTitle = title => {
		this.props.setAttributes({ title });
	};
	onChangeTitleColor = titleColor => {
		this.props.setAttributes({ titleColor });
	};
	onChangeInfo = info => {
		this.props.setAttributes({ info });
	};
	onChangeInfoColor = infoColor => {
		this.props.setAttributes({ infoColor });
	};
	onChangeAlignment = alignment => {
		this.props.setAttributes({ alignment });
	};
	onChangeShowFormShadow = showFormShadow => {
		this.props.setAttributes({ showFormShadow });
	};
	onChangeFormShadowColor = formShadowColor => {
		this.props.setAttributes({ formShadowColor });
	};
	onChangeFormBackgroundColor = formBackgroundColor => {
		this.props.setAttributes({ formBackgroundColor });
	};
	onChangeButtonTitle = buttonTitle => {
		this.props.setAttributes({ buttonTitle });
	};
	onChangeInputTextColor = inputTextColor => {
		this.props.setAttributes({ inputTextColor });
	};
	onChangeShowInputBorder = () => {
		this.props.setAttributes({
			showInputBorder: !this.props.attributes.showInputBorder
		});
	};
	onChangeShowFormShadow = () => {
		this.props.setAttributes({
			showFormShadow: !this.props.attributes.showFormShadow
		});
	};
	onChangeEnablePhoneField = () => {
		this.props.setAttributes({
			enablePhoneField: !this.props.attributes.enablePhoneField
		});
	};
	onChangeEnableWebsiteField = () => {
		this.props.setAttributes({
			enableWebsiteField: !this.props.attributes.enableWebsiteField
		});
	};
	onChangeInputBorderColor = inputBorderColor => {
		this.props.setAttributes({ inputBorderColor });
	};
	onChangeButtonBackgroundColor = buttonBackgroundColor => {
		this.props.setAttributes({ buttonBackgroundColor });
	};
	onChangeButtonTextColor = buttonTextColor => {
		this.props.setAttributes({ buttonTextColor });
	};
	onChangeHoverButtonTextColor = hoverButtonTextColor => {
		this.props.setAttributes({ hoverButtonTextColor });
	};
	onChangeHoverButtonBackgroundColor = hoverButtonBackgroundColor => {
		this.props.setAttributes({ hoverButtonBackgroundColor });
	};
	onChangeCaptchaSettings = () => {
		this.props.setAttributes({
			enablereCAPTCHA: !this.props.attributes.enablereCAPTCHA
		});
	};
	render() {
		const { className, attributes, setAttributes } = this.props;
		const {
			styleIs,
			width,
			bgLinearGradientOne,
			bgLinearGradientTwo,
			bgGradientTurn,
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
			titleFontSize,
			titleTextTransform,
			titleVerticalPadding,
			alignment,
			info,
			infoColor,
			emailSubject,
			nameField,
			emailField,
			phoneField,
			enablePhoneField,
			enableWebsiteField,
			websiteField,
			messageField,
			responseMessage,
			buttonTitle,
			inputVerticalPadding,
			inputVerticalMargin,
			inputHorizontalPadding,
			inputFontSize,
			inputTextColor,
			showInputBorder,
			inputBorderColor,
			inputBorderRadius,
			buttonTextColor,
			buttonBackgroundColor,
			hoverButtonTextColor,
			hoverButtonBackgroundColor,
			buttonWidth,
			buttonBorderRadius,
			buttonPadding,
			buttonTextTransform,
			authorEmailId,
			enablereCAPTCHA
		} = attributes;

		const isStyle = RegExp(/is-style-/);
		const styleName = isStyle.test(attributes.className)
			? attributes.className.replace(isStyle, "")
			: 1;

		setAttributes({ styleIs: styleName });

		const classes = classnames(className, {
			[`align-${alignment}`]: alignment
		});
		let inputBorder,
			contactFormShadow,
			basicInputBorder,
			basicInputBorderRadius,
			basicInputBottomBorderRadius,
			borderBottom,
			buttonBorder,
			basicInputBackground;
		{
			showInputBorder
				? (inputBorder = `1px solid ${inputBorderColor}`)
				: (inputBorder = "none");
		}
		{
			showFormShadow
				? (contactFormShadow = `0px 0px ${formShadow}px 0px ${formShadowColor}`)
				: (contactFormShadow = "none");
		}
		{
			styleName == 3
				? (basicInputBorder = "none")
				: (basicInputBorder = inputBorder);
		}
		{
			styleName == 3
				? (borderBottom = `2px solid ${inputBorderColor}`)
				: (borderBottom = inputBorder);
		}
		{
			styleName == 2
				? (basicInputBorderRadius = 25)
				: (basicInputBorderRadius = inputBorderRadius);
		}
		{
			styleName == 3
				? (basicInputBottomBorderRadius = 0)
				: (basicInputBottomBorderRadius = basicInputBorderRadius);
		}
		{
			styleName == 3
				? (basicInputBackground = "transparent")
				: (basicInputBackground = `rgba(255,255,255,0.1)`);
		}
		{
			styleName == 3
				? (buttonBorder = `2px solid ${inputBorderColor}`)
				: (buttonBorder = "none");
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
					<PanelBody
						title={__("Form Configuration", "guteblock")}
					>
						<TextControl
							type="email"
							label="Email Address"
							value={authorEmailId}
							onChange={authorEmailId =>
								setAttributes({ authorEmailId })
							}
						/>
						<TextControl
							type="text"
							label="Subject"
							placeholder={__(
								"Type Your Form Subject Here...",
								"guteblock"
							)}
							value={emailSubject}
							onChange={emailSubject =>
								setAttributes({ emailSubject })
							}
						/>
					</PanelBody>
					<PanelBody
						title={__("Form Response Message", "guteblock")}
					>
						<TextControl
							type="text"
							label="response Message"
							value={responseMessage}
							onChange={responseMessage =>
								setAttributes({ responseMessage })
							}
						/>
					</PanelBody>
					<PanelBody title={__("General Settings", "guteblock")}>
						<ToggleControl
							label={__("Enable reCAPTCHA", "guteblock")}
							onChange={this.onChangeCaptchaSettings}
							checked={enablereCAPTCHA}
						/>
						<ToggleControl
							label={__("Show Input border", "guteblock")}
							onChange={this.onChangeShowInputBorder}
							checked={showInputBorder}
						/>
						<p className="description">
							{__(
								"Enable Input Border Button For Style 3 Border Color.",
								"guteblock"
							)}
						</p>
						<ToggleControl
							label={__(
								"Show Phone Number Field",
								"guteblock"
							)}
							onChange={this.onChangeEnablePhoneField}
							checked={enablePhoneField}
						/>
						<ToggleControl
							label={__("Show Website Field", "guteblock")}
							onChange={this.onChangeEnableWebsiteField}
							checked={enableWebsiteField}
						/>
						<RangeControl
							label={__("Horizontal Padding", "guteblock")}
							value={horizontalPadding}
							onChange={horizontalPadding =>
								setAttributes({ horizontalPadding })
							}
							min={0}
							max={100}
							step={1}
						/>
						<RangeControl
							label={__("Vertical Padding", "guteblock")}
							value={verticalPadding}
							onChange={verticalPadding =>
								setAttributes({ verticalPadding })
							}
							min={0}
							max={100}
							step={1}
						/>
						<PanelColorSettings
							title={__(
								"Linear Background Color Settings",
								"guteblock"
							)}
							colorSettings={[
								{
									value: bgLinearGradientOne,
									onChange: this
										.onChangeBgLinearGradientOne,
									label: __(
										"Linear Background Color One",
										"guteblock"
									)
								},
								{
									value: bgLinearGradientTwo,
									onChange: this
										.onChangeBgLinearGradientTwo,
									label: __(
										"Linear Background Color Two",
										"guteblock"
									)
								}
							]}
						/>
						<RangeControl
							label={__(
								"Linear gradient Turn",
								"guteblock"
							)}
							value={bgGradientTurn}
							onChange={bgGradientTurn =>
								setAttributes({ bgGradientTurn })
							}
							min={-200}
							max={100}
							step={1}
						/>
					</PanelBody>
					<PanelBody
						title={__(
							"Contact Form General Settings",
							"guteblock"
						)}
					>
						<ToggleControl
							label={__("Show Box Shadow", "guteblock")}
							onChange={this.onChangeShowFormShadow}
							checked={showFormShadow}
						/>
						{showFormShadow ? (
							<PanelColorSettings
								title={__(
									"Form Color Settings",
									"guteblock"
								)}
								colorSettings={[
									{
										value: formBackgroundColor,
										onChange: this
											.onChangeFormBackgroundColor,
										label: __(
											"Form Background Color",
											"guteblock"
										)
									},
									{
										value: formShadowColor,
										onChange: this
											.onChangeFormShadowColor,
										label: __(
											"Form Shadow Color",
											"guteblock"
										)
									}
								]}
							/>
						) : (
							<PanelColorSettings
								title={__(
									"Form Color Settings",
									"guteblock"
								)}
								colorSettings={[
									{
										value: formBackgroundColor,
										onChange: this
											.onChangeFormBackgroundColor,
										label: __(
											"Form Background Color",
											"guteblock"
										)
									}
								]}
							/>
						)}
						{showFormShadow && (
							<RangeControl
								label={__(
									"Form Box Shadow",
									"guteblock"
								)}
								value={formShadow}
								onChange={formShadow =>
									setAttributes({ formShadow })
								}
								min={0}
								max={10}
								step={1}
							/>
						)}
						<RangeControl
							label={__("Form Border Radius", "guteblock")}
							value={borderRadius}
							onChange={borderRadius =>
								setAttributes({ borderRadius })
							}
							min={0}
							max={50}
							step={1}
						/>
						<RangeControl
							label={__("Padding", "guteblock")}
							value={padding}
							onChange={padding =>
								setAttributes({ padding })
							}
							min={0}
							max={50}
							step={1}
						/>
						<RangeControl
							label={__("Contact Form Width", "guteblock")}
							value={width}
							onChange={width => setAttributes({ width })}
							min={30}
							max={100}
							step={1}
						/>
					</PanelBody>
					<PanelBody title={__("Title Settings", "guteblock")}>
						<PanelColorSettings
							title={__(
								"Title Color Settings",
								"guteblock"
							)}
							colorSettings={[
								{
									value: titleColor,
									onChange: this.onChangeTitleColor,
									label: __(
										"Title Font Color",
										"guteblock"
									)
								}
							]}
						/>
						<RangeControl
							label={__("Font Size", "guteblock")}
							value={titleFontSize}
							onChange={titleFontSize =>
								setAttributes({ titleFontSize })
							}
							min={10}
							max={100}
							step={1}
						/>
						<SelectControl
							label={__(
								"Title Text Transform",
								"guteblock"
							)}
							value={titleTextTransform}
							options={[
								{
									label: "Normal",
									value: "none"
								},
								{
									label: "Uppercase",
									value: "uppercase"
								},
								{
									label: "Lowercase",
									value: "lowercase"
								},
								{
									label: "Capitalize",
									value: "capitalize"
								}
							]}
							onChange={titleTextTransform =>
								setAttributes({
									titleTextTransform
								})
							}
						/>
						<RangeControl
							label={__("Vertical Padding", "guteblock")}
							value={titleVerticalPadding}
							onChange={titleVerticalPadding =>
								setAttributes({ titleVerticalPadding })
							}
							min={0}
							max={50}
							step={1}
						/>
					</PanelBody>
					<PanelBody
						title={__("Description Settings", "guteblock")}
					>
						<PanelColorSettings
							title={__(
								"Description Color Settings",
								"guteblock"
							)}
							colorSettings={[
								{
									value: infoColor,
									onChange: this.onChangeInfoColor,
									label: __(
										"Description Color",
										"guteblock"
									)
								}
							]}
						/>
					</PanelBody>
					<PanelBody title={__("Input Settings", "guteblock")}>
						<RangeControl
							label={__("Vertical Margin", "guteblock")}
							value={inputVerticalMargin}
							onChange={inputVerticalMargin =>
								setAttributes({ inputVerticalMargin })
							}
							min={0}
							max={15}
							step={1}
						/>
						<RangeControl
							label={__("Vertical Padding", "guteblock")}
							value={inputVerticalPadding}
							onChange={inputVerticalPadding =>
								setAttributes({ inputVerticalPadding })
							}
							min={10}
							max={30}
							step={1}
						/>
						<RangeControl
							label={__("Horizontal Padding", "guteblock")}
							value={inputHorizontalPadding}
							onChange={inputHorizontalPadding =>
								setAttributes({
									inputHorizontalPadding
								})
							}
							min={10}
							max={30}
							step={1}
						/>
						{styleIs == 1 && (
							<RangeControl
								label={__(
									"Input Border Radius",
									"guteblock"
								)}
								value={inputBorderRadius}
								onChange={inputBorderRadius =>
									setAttributes({
										inputBorderRadius
									})
								}
								min={0}
								max={100}
								step={1}
							/>
						)}
						<RangeControl
							label={__("Input Font Size", "guteblock")}
							value={inputFontSize}
							onChange={inputFontSize =>
								setAttributes({ inputFontSize })
							}
							min={10}
							max={100}
							step={1}
						/>
						{showInputBorder ? (
							<PanelColorSettings
								title={__(
									"Input Color Settings",
									"guteblock"
								)}
								colorSettings={[
									{
										value: inputTextColor,
										onChange: this
											.onChangeInputTextColor,
										label: __(
											"Input Text Color",
											"guteblock"
										)
									},
									{
										value: inputBorderColor,
										onChange: this
											.onChangeInputBorderColor,
										label: __(
											"Input Border Color",
											"guteblock"
										)
									}
								]}
							/>
						) : (
							<PanelColorSettings
								title={__(
									"Input Color Settings",
									"guteblock"
								)}
								colorSettings={[
									{
										value: inputTextColor,
										onChange: this
											.onChangeInputTextColor,
										label: __(
											"Input Text Color",
											"guteblock"
										)
									}
								]}
							/>
						)}
					</PanelBody>
					<PanelBody title={__("Button Settings", "guteblock")}>
						<PanelColorSettings
							title={__(
								"Button Color Settings",
								"guteblock"
							)}
							colorSettings={[
								{
									value: buttonTextColor,
									onChange: this
										.onChangeButtonTextColor,
									label: __(
										"Button Text Color",
										"guteblock"
									)
								},
								{
									value: buttonBackgroundColor,
									onChange: this
										.onChangeButtonBackgroundColor,
									label: __(
										"Button Background Color",
										"guteblock"
									)
								},
								{
									value: hoverButtonTextColor,
									onChange: this
										.onChangeHoverButtonTextColor,
									label: __(
										"Hover Button Text Color",
										"guteblock"
									)
								},
								{
									value: hoverButtonBackgroundColor,
									onChange: this
										.onChangeHoverButtonBackgroundColor,
									label: __(
										"Hover Button Background Color",
										"guteblock"
									)
								}
							]}
						/>
						<SelectControl
							label={__(
								"Button Text Transform",
								"guteblock"
							)}
							value={buttonTextTransform}
							options={[
								{
									label: "Normal",
									value: "none"
								},
								{
									label: "Uppercase",
									value: "uppercase"
								},
								{
									label: "Lowercase",
									value: "lowercase"
								},
								{
									label: "Capitalize",
									value: "capitalize"
								}
							]}
							onChange={buttonTextTransform =>
								setAttributes({
									buttonTextTransform
								})
							}
						/>
						<RangeControl
							label={__("Button Padding", "guteblock")}
							value={buttonPadding}
							onChange={buttonPadding =>
								setAttributes({ buttonPadding })
							}
							min={5}
							max={100}
							step={1}
						/>
						<RangeControl
							label={__("Button Width", "guteblock")}
							value={buttonWidth}
							onChange={buttonWidth =>
								setAttributes({ buttonWidth })
							}
							min={20}
							max={100}
							step={1}
						/>
						<RangeControl
							label={__(
								"Button Border Radius",
								"guteblock"
							)}
							value={buttonBorderRadius}
							onChange={buttonBorderRadius =>
								setAttributes({ buttonBorderRadius })
							}
							min={10}
							max={100}
							step={1}
						/>
					</PanelBody>
				</InspectorControls>

				<div
					className={classes}
					style={{
						alignment: alignment,
						background: `linear-gradient(${bgGradientTurn}deg, ${bgLinearGradientOne}, ${bgLinearGradientTwo})`,
						paddingTop: verticalPadding,
						paddingBottom: verticalPadding,
						paddingLeft: horizontalPadding,
						paddingRight: horizontalPadding
					}}
				>
					<div
						className="wp-block-guteblock-quick-contact-form"
						style={{
							// backgroundColor: formBackgroundColor,
							padding: padding,
							width: `${width}%`,
							borderRadius: borderRadius,
							boxShadow: contactFormShadow
						}}
					>
						<div
							className={
								"wp-block-guteblock-quick-contact-form_align_center"
							}
						>
							<RichText
								className={
									"wp-block-guteblock-quick-contact-form__title"
								}
								tagName="h4"
								value={title}
								onChange={this.onChangeTitle}
								placeholder={__("Title", "guteblock")}
								style={{
									color: titleColor,
									fontSize: `${titleFontSize}px`,
									textTransform: titleTextTransform,
									paddingTop: `${titleVerticalPadding}px`,
									paddingBottom: `${titleVerticalPadding}px`
								}}
							/>
						</div>
						<div
							className={
								"wp-block-guteblock-quick-contact-form_align_center"
							}
						>
							<RichText
								className={
									"wp-block-guteblock-quick-contact-form__info"
								}
								tagName="p"
								value={info}
								onChange={this.onChangeInfo}
								placeholder={__("Info", "guteblock")}
								style={{
									color: infoColor
								}}
							/>
						</div>
						<div
							className={
								"wp-block-guteblock-quick-contact-form_align_left"
							}
						>
							<TextControl
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
									backgroundColor: basicInputBackground,
									borderTop: basicInputBorder,
									borderBottom: borderBottom,
									borderLeft: basicInputBorder,
									borderRight: basicInputBorder,
									borderTopLeftRadius: `${basicInputBorderRadius}px`,
									borderTopRightRadius: `${basicInputBorderRadius}px`,
									borderBottomLeftRadius: `${basicInputBottomBorderRadius}px`,
									borderBottomRightRadius: `${basicInputBottomBorderRadius}px`
								}}
								type="text"
								name="quick_contact_form_name_field"
								value={nameField}
							/>
						</div>
						<div
							className={
								"wp-block-guteblock-quick-contact-form_align_right"
							}
						>
							<TextControl
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
									backgroundColor: basicInputBackground,
									borderTop: basicInputBorder,
									borderBottom: borderBottom,
									borderLeft: basicInputBorder,
									borderRight: basicInputBorder,
									borderTopLeftRadius: `${basicInputBorderRadius}px`,
									borderTopRightRadius: `${basicInputBorderRadius}px`,
									borderBottomLeftRadius: `${basicInputBottomBorderRadius}px`,
									borderBottomRightRadius: `${basicInputBottomBorderRadius}px`
								}}
								type="email"
								name="quick_contact_form_email_field"
								value={emailField}
							/>
						</div>
						{enablePhoneField && (
							<div
								className={
									"wp-block-guteblock-quick-contact-form_align_left"
								}
							>
								<TextControl
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
										backgroundColor: basicInputBackground,
										borderTop: basicInputBorder,
										borderBottom: borderBottom,
										borderLeft: basicInputBorder,
										borderRight: basicInputBorder,
										borderTopLeftRadius: `${basicInputBorderRadius}px`,
										borderTopRightRadius: `${basicInputBorderRadius}px`,
										borderBottomLeftRadius: `${basicInputBottomBorderRadius}px`,
										borderBottomRightRadius: `${basicInputBottomBorderRadius}px`
									}}
									type="text"
									name="quick_contact_form_phone_field"
									value={phoneField}
								/>
							</div>
						)}
						{enableWebsiteField && (
							<div
								className={
									"wp-block-guteblock-quick-contact-form_align_right"
								}
							>
								<TextControl
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
										backgroundColor: basicInputBackground,
										borderTop: basicInputBorder,
										borderBottom: borderBottom,
										borderLeft: basicInputBorder,
										borderRight: basicInputBorder,
										borderTopLeftRadius: `${basicInputBorderRadius}px`,
										borderTopRightRadius: `${basicInputBorderRadius}px`,
										borderBottomLeftRadius: `${basicInputBottomBorderRadius}px`,
										borderBottomRightRadius: `${basicInputBottomBorderRadius}px`
									}}
									type="text"
									name="quick_contact_form_website_field"
									value={websiteField}
								/>
							</div>
						)}
						<div
							className={
								"wp-block-guteblock-quick-contact-form_align_center"
							}
						>
							<TextareaControl
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
									backgroundColor: basicInputBackground,
									borderTop: basicInputBorder,
									borderBottom: borderBottom,
									borderLeft: basicInputBorder,
									borderRight: basicInputBorder,
									borderTopLeftRadius: `${basicInputBorderRadius}px`,
									borderTopRightRadius: `${basicInputBorderRadius}px`,
									borderBottomLeftRadius: `${basicInputBottomBorderRadius}px`,
									borderBottomRightRadius: `${basicInputBottomBorderRadius}px`
								}}
								name="quick_contact_form_message_field"
								value={messageField}
							/>
						</div>
						<TextControl
							type="hidden"
							value={authorEmailId}
						/>
						<div
							className={
								"wp-block-guteblock-quick-contact-form_align_center"
							}
						>
							<Button
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
									textTransform: buttonTextTransform,
									alignment: alignment,
									border: `${buttonBorder}`
								}}
							>
								<RichText
									style={{}}
									tagName="span"
									value={buttonTitle}
									onChange={this.onChangeButtonTitle}
								/>
							</Button>
						</div>
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
				</div>
			</>
		);
	}
}

export default QuickContact;
