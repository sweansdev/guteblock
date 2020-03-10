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
	TextControl,
	ToggleControl,
	SelectControl,
	RangeControl
} from "@wordpress/components";

import style1 from "./assets/images/button-style-1.png";
import style2 from "./assets/images/button-style-2.png";
import style3 from "./assets/images/button-style-3.png";
import style4 from "./assets/images/button-style-4.png";
import style5 from "./assets/images/button-style-5.png";
import style6 from "./assets/images/button-style-6.png";

 
import classnames from 'classnames';

class PaypalEdit extends Component {	
	toggleSandBox = () => {
		this.props.setAttributes({
			sandbox: !this.props.attributes.sandbox
		});
	};
	toggleButtonSize = () => {
		this.props.setAttributes({
			Buttonsize: !this.props.attributes.Buttonsize
		});
	};
	
	onChangeTitle = title => {
		this.props.setAttributes({ title });
	};

	onChangeAlignment = alignment => {
		this.props.setAttributes({ alignment });
	};

	toggleDonation = () => {
		this.props.setAttributes({
			donation: !this.props.attributes.donation
		});
	};

	toggleDonationType = () => {
		this.props.setAttributes({
			donationtype: !this.props.attributes.donationtype
		});
	};
	
	render() {
		const { className, attributes, setAttributes } = this.props;
		const {
			receiverEmail,
			description,
			alignment,
			sandbox,
			currency,
			buttonstyle,
			amount,
			returnlink,
			notifylink,
			cancellink,
			donation,
			title,
			button_color,
			font_color,
			button_vertical_padding,
			button_horizontal_padding,
			button_border_radius,
			button_font_size,
			button_font_weight,
			button_text_transform,
			donationtype
		} = attributes;

		const classes = classnames(className, {
			[`align-${alignment}`]: alignment
		})
		
		const isStyle = RegExp(/is-style-/)
		const styleName = isStyle.test(attributes.className)
			? attributes.className.replace(isStyle, '')
			: null

		let Donation;
		{donation ? Donation = amount : Donation=" "};

		let DonationType;
		{donationtype ? DonationType="_donations" : DonationType="_xclick"}

		
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
				{styleName === "style2"?(
					
					<PanelColorSettings
						title={__("Button Customization ", "guteblock")}
						initialOpen={false}
						colorSettings={[
							{
								value: button_color,
								onChange: color => {
									setAttributes({
										button_color: color
									});
								},
								label: __(
									"Button Color",
									"guteblock"
								)
							},
							{
								value: font_color,
								onChange: color => {
									setAttributes({
										font_color: color
									});
								},
								label: __(
									"Font Color",
									"guteblock"
								)
							}
						]}
					>
						<RangeControl
							label={__(
								"Font Size (px)",
								"guteblock"
							)}
							value={button_font_size}
							onChange={button_font_size =>
								setAttributes({ button_font_size })
							}
							min={12}
							max={50}
							step={1}
						/>
						<RangeControl
							label={__(
								"Vertical padding (px)",
								"guteblock"
							)}
							value={button_vertical_padding}
							onChange={button_vertical_padding =>
								setAttributes({ button_vertical_padding })
							}
							min={0}
							max={50}
							step={1}
						/>
						<RangeControl
							label={__(
								"Horizontal padding (px)",
								"guteblock"
							)}
							value={button_horizontal_padding}
							onChange={button_horizontal_padding =>
								setAttributes({ button_horizontal_padding })
							}
							min={0}
							max={50}
							step={1}
						/>
						<RangeControl
							label={__(
								"Border Radius (px)",
								"guteblock"
							)}
							value={button_border_radius}
							onChange={button_border_radius =>
								setAttributes({ button_border_radius })
							}
							min={0}
							max={100}
							step={1}
						/>
						<SelectControl
							label="Font Weight"
							value={button_font_weight}
							options={[
								{ label: "Light - 200", value: "200" },
								{ label: "Regular - 400", value: "400" },
								{ label: "Medium - 500", value: "500" },
								{ label: "Semi Bold - 600", value: "600" },
								{ label: "Bold - 700", value: "700" }
							]}
							onChange={FontWeightChange => {
								setAttributes( { button_font_weight:FontWeightChange } );
							}}
						/>
						<SelectControl
							label="Text/Font Transform"
							value={button_text_transform}
							options={[
								{ label: "Capitalize", value: "capitalize" },
								{ label: "Lowercase", value: "lowercase" },
								{ label: "Uppercase", value: "uppercase" }
							]}
							onChange={TextTransformChange => {
								setAttributes( { button_text_transform:TextTransformChange } );
							}}
						/>
					</PanelColorSettings>
							):(
								
								<PanelBody title={__("Buttons", "guteblock")} initialOpen={false}>
							<SelectControl
								label="PayPal Button Style"
								value={buttonstyle}
								options={[
									{ label: "Small", value: "https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" },
									{ label: "Large", value: "https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" },	
									{ label: "Large with accepted card logos", value: "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" },
									{ label: "Custom Style 1", value: guteblock.siteurl+`/wp-content/plugins/guteblock/src/blocks/paypal-donation/`+style1 },
									{ label: "Custom Style 2", value: guteblock.siteurl+`/wp-content/plugins/guteblock/src/blocks/paypal-donation/`+style5 },
									{ label: "Custom Style 3", value: guteblock.siteurl+`/wp-content/plugins/guteblock/src/blocks/paypal-donation/`+style3 },
									{ label: "Custom Style 4", value: guteblock.siteurl+`/wp-content/plugins/guteblock/src/blocks/paypal-donation/`+style4 },
									{ label: "Custom Style 5", value: guteblock.siteurl+`/wp-content/plugins/guteblock/src/blocks/paypal-donation/`+style2 },
									{ label: "Custom Style 6", value: guteblock.siteurl+`/wp-content/plugins/guteblock/src/blocks/paypal-donation/`+style6 },
								]}
								onChange={ButtonStyleChange => {
									setAttributes( { buttonstyle:ButtonStyleChange } );
								}}
							/>	
						</PanelBody>
						
							)}
						<PanelBody title={__("General Settings", "guteblock")} initialOpen={false}>
						<ToggleControl
								label={__("SandBox", "guteblock")}
								onChange={this.toggleSandBox}
								checked={sandbox}
						/>
						<ToggleControl
								label={__("Donation", "guteblock")}
								onChange={this.toggleDonationType}
								checked={donationtype}
								help= { __("If you turn 'Donation' ON you need a donation activated account to avail this feature", "guteblock") }
						/>
						<ToggleControl
									label={__("Fixed Donation", "guteblock")}
									onChange={this.toggleDonation}
									checked={donation}
							/>
						
						{donation &&
							<TextControl
								label="Amount *	"
								type="number"
								value= {amount}
								onChange= {onChangeAmount => {
									setAttributes( { amount:onChangeAmount } );
								}}
								placeholder= "5.00"
								// help= { __("You need to enter the amount otherwise it will not act as fixed amount donation", "guteblock") }
							/>
						}
						<TextControl
							label="Email address to receive payments *"
							value= {receiverEmail}
							onChange= {onChangeEmail => {
								setAttributes( { receiverEmail:onChangeEmail } );
							}}
							placeholder= "example@mail.com"
						/>
						<TextControl
							label="Description"
							value= {description}
							onChange= {onChangeDescription => {
								setAttributes( { description:onChangeDescription } );
							}}
							placeholder= "example@mail.com"
						/>
						<SelectControl
							label="Currency"
							value={currency}
							options={[
								{ label: "Australian dollar - AUD", value: "AUD" },
								{ label: "Brazilian real - BRL", value: "BRL" },	
								{ label: "Canadian dollar - CAD", value: "CAD" },
								{ label: "Czech koruna - CZK", value: "CZK" },
								{ label: "Danish krone - DKK", value: "DKK" },
								{ label: "Euro - EUR", value: "EUR" },
								{ label: "Hong Kong dollar - HKD", value: "HKD" },
								{ label: "Hungarian forint - HUF", value: "HUF" },
								{ label: "Indian rupee - INR", value: "INR" },
								{ label: "Israeli new shekel - ILS", value: "ILS" },
								{ label: "Japanese yen - JPY", value: "JPY" },
								{ label: "Malaysian ringgit - MYR", value: "MYR" },
								{ label: "Mexican peso - MXN", value: "MXN" },
								{ label: "New Taiwan dollar - TWD", value: "TWD" },
								{ label: "New Zealand dollar - NZD", value: "NZD" },
								{ label: "Norwegian krone - NOK", value: "NOK" },
								{ label: "Philippine peso - PHP", value: "PHP" },
								{ label: "Polish złoty - PLN", value: "PLN" },
								{ label: "Pound sterling - GBP", value: "GBP" },
								{ label: "Russian ruble - RUB", value: "RUB" },
								{ label: "Singapore dollar - SGD", value: "SGD" },
								{ label: "Swedish krona - SEK", value: "SEK" },
								{ label: "Swiss franc - CHF", value: "CHF" },
								{ label: "Thai baht - THB", value: "THB" },
								{ label: "United States dollar - USD", value: "USD" },
							]}
							onChange={CurrencyChange => {
								setAttributes( { currency:CurrencyChange } );
							}}
						/>
						<TextControl
							label="Return URL"
							value= {returnlink}
							onChange= {onChangeReturnLink => {
								setAttributes( { returnlink:onChangeReturnLink } );
							}}
							placeholder= "https://www.example.com"
						/>
						<TextControl
							label="Notify URL"
							value= {notifylink}
							onChange= {onChangeNotifyLink => {
								setAttributes( { notifylink:onChangeNotifyLink } );
							}}
							placeholder= "https://www.example.com"
						/>
						<TextControl
							label="Cancel Return URL"
							value= {cancellink}
							onChange= {onChangeCancelLink => {
								setAttributes( { cancellink:onChangeCancelLink } );
							}}
							placeholder= "https://www.example.com"
						/>
					</PanelBody>
				</InspectorControls>	
				<div className={classes}>
					<div className="wp-block-guteblock-paypal-doantion__container">
						{styleName === "style2"?(
							<>
							<input type="hidden" name="cmd" value={DonationType}/>
							<input type="hidden" name="business" value={receiverEmail}/>
							<input type="hidden" name="item_name" value={description}/>
							<input type="hidden" name="currency_code" value={currency}/>
							<input type="hidden" name="amount" value={Donation}/>
							<input type="hidden" name="return" value={returnlink} />
							<input type="hidden" name="notify_url" value={notifylink} />
							<input type="hidden" name="cancel_return" value={cancellink} />
							<button style={{
								backgroundColor: button_color,
								color: font_color,
								padding: `${button_vertical_padding}px ${button_horizontal_padding}px`,
								borderRadius:	`${button_border_radius}px`,
								fontSize:`${button_font_size}px`,
								fontWeight: button_font_weight,
								textTransform: button_text_transform
							}} ><RichText
								value= {title}
								onChange= {this.onChangeTitle}
								help= { __("This is a basic description", "guteblock") }
							/>
							</button>
							</>
						):(
							<>
							<input type="hidden" name="cmd" value={DonationType}/>
							<input type="hidden" name="business" value={receiverEmail}/>
							<input type="hidden" name="item_name" value={description}/>
							<input type="hidden" name="currency_code" value={currency}/>
							<input type="hidden" name="amount" value={Donation}/>
							<input type="hidden" name="return" value={returnlink} />
							<input type="hidden" name="notify_url" value={notifylink} />
							<input type="hidden" name="cancel_return" value={cancellink} />
							<input type="image" src={buttonstyle} name="PP-submit" alt="Make a donation with PayPal" /> 
						</>
						)}
					</div>
				</div>
			</>
		);
	}
}

export default PaypalEdit;