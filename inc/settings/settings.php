<?php
/**
 * Getting Started page
 *
 * @package Guteblock
 */

/**
 * Load Getting Started styles in the admin
 *
 * @since 1.0.0
 * @param string $hook The current admin page.
 */
function guteblock_start_load_admin_scripts( $hook ) {
	
	if ( ! ( $hook === 'toplevel_page_guteblock' || $hook === 'guteblock_page_guteblock-plugin-settings') ) {
		return;
	}

	// Getting Started javascript.
	wp_enqueue_script( 'guteblock-settings-script', plugins_url( 'settings/settings.js', dirname( __FILE__ ) ), array( 'jquery' ), '1.0.0', true );

	// Getting Started styles.
	wp_register_style( 'guteblock-settings-style', plugins_url( 'settings/settings.css', dirname( __FILE__ ) ), false, '1.0.0' );
	wp_enqueue_style( 'guteblock-settings-style' );

}
add_action( 'admin_enqueue_scripts', 'guteblock_start_load_admin_scripts' );

function guteblock_getting_started_menu() {

	add_menu_page(
		__( 'Guteblock', 'guteblock' ),
		__( 'Guteblock', 'guteblock' ),
		'manage_options',
		'guteblock',
		'guteblock_getting_started_page',
		'dashicons-building'
	);

	add_submenu_page(
		'guteblock',
		esc_html__( 'Getting Started', 'guteblock' ),
		esc_html__( 'Getting Started', 'guteblock' ),
		'manage_options',
		'guteblock',
		'guteblock_getting_started_page'
	);

	add_submenu_page(
		'guteblock',
		esc_html__( 'Guteblock Settings', 'guteblock' ),
		esc_html__( 'Settings', 'guteblock' ),
		'manage_options',
		'guteblock-plugin-settings',
		'guteblock_settings_page'
	);

}
add_action( 'admin_menu', 'guteblock_getting_started_menu' );

function guteblock_getting_started_page() {		
?>
	<div class="wrap gb-getting-started">
		<div class="intro-wrap">
			<div class="intro">
				<a href="https://guteblock.com/"><img class="guteblock-logo" src="<?php echo esc_url( plugins_url( 'newimages/logo.png', __FILE__ ) ); ?>" alt="<?php esc_html_e( 'Visit Guteblock', 'guteblock' ); ?>" /></a>
				<h3><?php printf( esc_html__( 'Getting started with', 'guteblock' ) ); ?> <strong><?php printf( esc_html__( 'Guteblock', 'guteblock' ) ); ?></strong></h3>
			</div>

			<ul class="gb-menu">
				<li class="current" data-target="#getting-started"><a href="#"><i class="fa fa-check"></i><?php esc_html_e( 'Getting Started', 'guteblock' ); ?></a></li>
				<li data-target="#plugin-help"><a href="#"><i class="fa fa-plug"></i> <?php esc_html_e( 'Plugin Help File', 'guteblock' ); ?></a></li>
			</ul>

		</div>

		<div class="panels">
			<div id="panel" class="panel">

				<div id="getting-started" class="content-panel<?php if(!isset($_POST["updated"])) echo ' current'; ?>">
					<div class="gb-block-split clearfix">
						<div class="gb-block-split-left">							
							<div class="gb-titles">
								<h2><?php esc_html_e( 'Enhance your Gutenberg experience with Guteblock!', 'guteblock' ); ?></h2>
								<p><?php esc_html_e( 'The Guteblock collection is now ready to use in your posts and pages. Check out the help file link above for detailed instructions!', 'guteblock' ); ?></p>
							</div>
						</div>
						<div class="gb-block-split-right">
							<div class="gb-block-theme">
								<img src="<?php echo esc_url( plugins_url( 'newimages/img-right.jpg', __FILE__ ) ); ?>" alt="<?php esc_html_e( 'Guteblock Theme', 'guteblock' ); ?>" />
							</div>
						</div>
					</div>
				</div>

				<div id="plugin-help" class="content-panel">
					<div class="gb-block-split clearfix">
						<div class="gb-block-split-left">							
							<div class="gb-titles">
								<h2><?php esc_html_e( '2222 Enhance your Gutenberg experience with Guteblock!', 'guteblock' ); ?></h2>
								<p><?php esc_html_e( '2222 The Guteblock collection is now ready to use in your posts and pages. Check out the help file link above for detailed instructions!', 'guteblock' ); ?></p>
							</div>
						</div>
						<div class="gb-block-split-right">
							<div class="gb-block-theme">
								<img src="<?php echo esc_url( plugins_url( 'newimages/img-right.jpg', __FILE__ ) ); ?>" alt="<?php esc_html_e( 'Guteblock Theme', 'guteblock' ); ?>" />
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
	<?php
}

function guteblock_settings_page() {	
	if(isset($_POST["updated"])) {

		handle_form_data();

	}
?>
	<div class="wrap gb-getting-started">
		<div class="intro-wrap">
			<div class="intro">
				<a href="https://guteblock.com/"><img class="guteblock-logo" src="<?php echo esc_url( plugins_url( 'newimages/logo.png', __FILE__ ) ); ?>" alt="<?php esc_html_e( 'Visit Guteblock', 'guteblock' ); ?>" /></a>
				<h3><?php printf( esc_html__( 'Configure ', 'guteblock' ) ); ?> <strong><?php printf( esc_html__( 'Guteblock', 'guteblock' ) ); ?></strong></h3>
			</div>

			<ul class="gb-menu">
				<li class="current" data-target="#gb-mailchimp-settings"><a href="#"><i class="fa fa-check"></i><?php esc_html_e( 'Mailchimp Settings', 'guteblock' ); ?></a></li>
				<li data-target="#gb-recaptcha-settings"><a href="#"><i class="fa fa-check"></i><?php esc_html_e( 'reCAPTCHA Settings', 'guteblock' ); ?></a></li>
			</ul>

		</div>

		<div class="panels">
			<div id="panel" class="panel">

				<?php if(isset($_POST["updated"])) { ?>
					<div class="guteblock-alert gb-success">
						<?php esc_html_e( 'Settings updated!', 'guteblock' ); ?>
					</div>
				<?php } ?>

				<form action="" method="POST">
					<?php wp_nonce_field('gb_settings', 'gb_settings_nonce'); ?>
					<input type="hidden" name="updated" value="true" />
						
					<div id="gb-mailchimp-settings" class="content-panel current">
					
						<h3>MailChimp</h3>
						<div class="gb-settings-container">
							<label>MailChimp API Key</label>
							<input type="text" name="mailchimp-api" placeholder="" value="<?php echo get_option('guteblock_mailchimp_api_key'); ?>" />

							<label>List ID</label>
							<input type="text" name="mailchimp-list-id" placeholder="" value="<?php echo get_option('guteblock_mailchimp_list_id'); ?>" />

							<label>Success Response</label>
							<textarea name="mailchimp-success-response"><?php echo get_option('guteblock_mailchimp_success_response'); ?></textarea>

							<label>Success Response (Double Optin Enabled)</label>
							<textarea name="mailchimp-success-response-do"><?php echo get_option('guteblock_mailchimp_success_response_do'); ?></textarea>
							<span class="field-help">You can enable / disable double optin feature for each newsletter block separately.</span>

							<input type="submit" class="sw-btn-submit" value="Save Settings" />		
						</div>	

					</div>

					<div id="gb-recaptcha-settings" class="content-panel">
					
						<h3>reCAPTCHA</h3>
						<div class="gb-settings-container">						
							<label>Site Key</label>
							<input type="text" name="recaptcha-site-key" placeholder="" value="<?php echo get_option('guteblock_recaptcha_site_key'); ?>" />
							<label>Secret Key</label>
							<input type="text" name="recaptcha-secret-key" placeholder="" value="<?php echo get_option('guteblock_recaptcha_secret_key'); ?>" />
							<input type="submit" class="sw-btn-submit" value="Save Settings" />
						</div>

					</form>
				</div>
			</div>
		</div>
	</div>
	<?php
}


function handle_form_data() {

	if(!isset( $_POST['gb_settings_nonce'] ) || ! wp_verify_nonce( $_POST['gb_settings_nonce'], 'gb_settings' )) {

		print 'Sorry, your nonce did not verify.';
		exit;

	}
	
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}

	$settings = $_POST;

	// Saving API Key
	if ( ! empty( $settings['mailchimp-api'] ) ) {
		update_option( 'guteblock_mailchimp_api_key', sanitize_text_field( wp_unslash( $settings['mailchimp-api'] ) ), false );
	} else {
		delete_option( 'guteblock_mailchimp_api_key' );
	}

	// Saving List ID
	if ( ! empty( $settings['mailchimp-list-id'] ) ) {
		update_option( 'guteblock_mailchimp_list_id', sanitize_text_field( wp_unslash( $settings['mailchimp-list-id'] ) ), false );
	} else {
		delete_option( 'guteblock_mailchimp_list_id' );
	}

	// Saving Success Response
	if ( ! empty( $settings['mailchimp-success-response'] ) ) {
		update_option( 'guteblock_mailchimp_success_response', sanitize_text_field( wp_unslash( $settings['mailchimp-success-response'] ) ), false );
	} else {
		delete_option( 'guteblock_mailchimp_success_response' );
	}

	// Saving Success Response (Double Optin Enabled)
	if ( ! empty( $settings['mailchimp-success-response'] ) ) {
		update_option( 'guteblock_mailchimp_success_response_do', sanitize_text_field( wp_unslash( $settings['mailchimp-success-response-do'] ) ), false );
	} else {
		delete_option( 'guteblock_mailchimp_success_response_do' );
	}

	// Saving 
	if ( ! empty( $settings['recaptcha-site-key'] ) ) {
		update_option( 'guteblock_recaptcha_site_key', sanitize_text_field( wp_unslash( $settings['recaptcha-site-key'] ) ), false );
	} else {
		delete_option( 'guteblock_recaptcha_site_key' );
	}

	// Saving 
	if ( ! empty( $settings['recaptcha-secret-key'] ) ) {
		update_option( 'guteblock_recaptcha_secret_key', sanitize_text_field( wp_unslash( $settings['recaptcha-secret-key'] ) ), false );
	} else {
		delete_option( 'guteblock_recaptcha_secret_key' );
	}


	return;

}