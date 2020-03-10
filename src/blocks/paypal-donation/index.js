import "./style.editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit.js";
import classnames from 'classnames';

const attributes = {
	title: {
		type: "string",
		default:"Donate"
	},
	align: {
		type: "string",
		default: "wide"
	},
	alignment: {
		type: "string",
		default: "center"
	},
	currency: {
		type: "string",
		default: "USD"
	},
	buttonstyle: {
		type: "string",
		default: "https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"
	},
	receiverEmail: {
		type: "string"
	},
	description: {
		type: "string",
		default: "Donation for website"
	},
	amount: {
		type: "float",
		default: 15.00
	},
	returnlink: {
		type: "string"
	},
	notifylink: {
		type: "string"
	},
	cancellink: {
		type: "string"
	},
	donation:{
		type: "boolean",
		default: true
	},
	button_color: {
		type: "string",
		default: "#cd2653"
	},
	font_color: {
		type: "string",
		default: "#f5efe0"
	},
	button_vertical_padding:{
		type: "number",
		default: 5
	},
	button_horizontal_padding:{
		type: "number",
		default: 5
	},
	button_border_radius:{
		type: "number",
		default: 5
	},
	button_font_size:{
		type: "number",
		default: 20
	},
	button_font_weight:{
		type:"string",
		default: "400"
	},
	button_text_transform:{
		type:"string",
		default: "capitalize"
	},
	sandbox:{
		type:"boolean",
		default: false
	},
	donationtype:{
		type:"boolean",
		default: false
	}
};

registerBlockType("guteblock/paypal-donation", {
	title: __("PayPal Donation Block", "guteblock"),
	description: __("PayPal Donation Block", "guteblock"),
	icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>
    ),
	category: "guteblock",
	keywords: [
		__("keyword1", "guteblock"),
		__("keyword2", "guteblock"),
		__("keyword3", "guteblock")
	],
	supports: {
		reusable: false,
		html: false ,
		align: ["wide", "full"]
	},
	attributes,
	edit,
	styles: [
		{
			name: "style1",
			label: __("Image Button", "guteblock"),
			isDefault: true
		},
		{
			name: "style2",
			label: __("Text Button", "guteblock"),
			isDefault: false
		},
	],
	save: ({ attributes }) => {
		
		const {
			receiverEmail,
			description,
			alignment,
			sandbox	,
			currency,
			amount,
			buttonstyle,
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

		const classes = classnames({
			[`align-${alignment}`]: alignment
		})

		const isStyle = RegExp(/is-style-/)
		const styleName = isStyle.test(attributes.className)
			? attributes.className.replace(isStyle, '')
			: null


		let sandBox;
		{sandbox ? sandBox="https://www.sandbox.paypal.com/cgi-bin/webscr" : sandBox="https://www.paypal.com/cgi-bin/webscr"}

		let Donation;
		{donation ? Donation= amount : Donation=" "}

		let DonationType;
		{donationtype ? DonationType="_donations" : DonationType="_xclick"}

		
		return (
			<div className={classes}>	
				<div className="wp-block-guteblock-paypal-doantion__container">
				{styleName === "style2"?(
							<>
							<form name="_xclick" action={sandBox} method="post" >
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
								}} >{title}</button>
							</form>
							</>
						):(
						<form name="_xclick" action={sandBox} method="post" >
							<input type="hidden" name="cmd" value={DonationType}/>
							<input type="hidden" name="business" value={receiverEmail}/>
							<input type="hidden" name="item_name" value={description}/>
							<input type="hidden" name="currency_code" value={currency}/>
							<input type="hidden" name="amount" value={Donation}/>
							<input type="hidden" name="return" value={returnlink} />
							<input type="hidden" name="notify_url" value={notifylink} />
							<input type="hidden" name="cancel_return" value={cancellink} />
							<input type="image" src={buttonstyle} name="PP-submit" alt="Make a donation with PayPal" /> 
						</form>
						)}
				</div>
			</div>
		);
	}
});
