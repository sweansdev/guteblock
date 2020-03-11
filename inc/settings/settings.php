<?php
/**
 * About Guteblock page
 *
 * @package Guteblock
 */

/**
 * Load About Guteblock styles in the admin
 *
 * @since 1.0.0
 * @param string $hook The current admin page.
 */
function guteblock_start_load_admin_scripts( $hook ) {
	
	if ( ! ( $hook === 'toplevel_page_guteblock' || $hook === 'guteblock_page_guteblock-plugin-settings') ) {
		return;
	}

	// About Guteblock javascript.
	wp_enqueue_script( 'guteblock-settings-script', plugins_url( 'settings/settings.js', dirname( __FILE__ ) ), array( 'jquery' ), '1.0.0', true );

	// About Guteblock styles.
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
		esc_html__( 'About Guteblock', 'guteblock' ),
		esc_html__( 'About Guteblock', 'guteblock' ),
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
				<a href="https://guteblock.com/"><img class="guteblock-logo" src="<?php echo esc_url( plugins_url( 'images/logo.png', __FILE__ ) ); ?>" alt="<?php esc_html_e( 'Visit Guteblock', 'guteblock' ); ?>" /></a>
				<h3><?php printf( esc_html__( 'Do more with', 'guteblock' ) ); ?> <strong><?php printf( esc_html__( 'Guteblock', 'guteblock' ) ); ?></strong></h3>
			</div>

			<ul class="gb-menu">
				<li class="current" data-target="#getting-started"><a href="#"><i class="fa fa-check"></i><?php esc_html_e( 'About Guteblock', 'guteblock' ); ?></a></li>
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
								<img src="<?php echo esc_url( plugins_url( 'images/img-right.jpg', __FILE__ ) ); ?>" alt="<?php esc_html_e( 'Guteblock Theme', 'guteblock' ); ?>" />
							</div>
						</div>
					</div>
					<div class="gb-block-split gb-content-outer clearfix">
						<h3>Discover our Blocks Collection</h3>
						<p>Boost up your Gutenberg editor to next level with our powerful Blocks and build websites in no time! A unique and advanced collection of professionally designed 20 blocks that are absolutely free!</p>
						<div class="gb-block-listing">
							<div class="gb-block">
								<div class="gb-block-img gb-post-grid"></div>
								<p>Post Grid</p>
							</div>
							<div class="gb-block">
								<div class="gb-block-img gb-post-grid"></div>
								<p>Post Grid</p>
							</div>
							<div class="gb-block">
								<div class="gb-block-img gb-post-grid"></div>
								<p>Post Grid</p>
							</div>
							<div class="gb-block">
								<div class="gb-block-img gb-post-grid"></div>
								<p>Post Grid</p>
							</div>
							<div class="gb-block">
								<div class="gb-block-img gb-post-grid"></div>
								<p>Post Grid</p>
							</div>
							<div class="gb-block">
								<div class="gb-block-img gb-post-grid"></div>
								<p>Post Grid</p>
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
								<img src="<?php echo esc_url( plugins_url( 'images/img-right.jpg', __FILE__ ) ); ?>" alt="<?php esc_html_e( 'Guteblock Theme', 'guteblock' ); ?>" />
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
				<a href="https://guteblock.com/"><img class="guteblock-logo" src="<?php echo esc_url( plugins_url( 'images/logo.png', __FILE__ ) ); ?>" alt="<?php esc_html_e( 'Visit Guteblock', 'guteblock' ); ?>" /></a>
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

				<form id="guteblock-settings" action="" method="POST">
					<?php wp_nonce_field('gb_settings', 'gb_settings_nonce'); ?>
					<input type="hidden" name="updated" value="true" />
					

					<div id="gb-mailchimp-settings" class="content-panel current">

						<div class="tab-content">
							<table class="form-table">
								<tbody>
									<tr>
										<th>
											<label><?php esc_html_e( 'Mailchimp API Key', 'guteblock' ); ?></label>
										</th>
										<td>
											<input type="text" name="mailchimp-api" placeholder="" value="<?php echo get_option('guteblock_mailchimp_api_key'); ?>" size="40" />
											<p class="guteblock-settings-description"><a href="https://mailchimp.com/help/about-api-keys/#Find_or_generate_your_API_key" target="_blank" rel="noreferrer noopener"><?php esc_html_e( 'Need help finding API Keys?', 'guteblock' ); ?></a></p>
										</td>
									</tr>
									<tr>
										<th>
											<label><?php esc_html_e( 'List ID', 'guteblock' ); ?></label>
										</th>
										<td>
											<input type="text" name="mailchimp-list-id" placeholder="" value="<?php echo get_option('guteblock_mailchimp_list_id'); ?>" size="40" /><p class="guteblock-settings-description"><a href="https://mailchimp.com/help/find-audience-id/" target="_blank" rel="noreferrer noopener"><?php esc_html_e( 'How to find this?', 'guteblock' ); ?></a></p>
										</td>
									</tr>
									<tr>
										<th>
											<label><?php esc_html_e( 'Success Response', 'guteblock' ); ?></label>
										</th>
										<td>
											<textarea name="mailchimp-success-response"><?php echo get_option('guteblock_mailchimp_success_response'); ?></textarea>
										</td>
									</tr>
									<tr>
										<th>
											<label><?php esc_html_e( 'Success Response (Double Optin Enabled)', 'guteblock' ); ?></label>
										</th>
										<td>
											<textarea name="mailchimp-success-response-do" size="40"><?php echo get_option('guteblock_mailchimp_success_response_do'); ?></textarea>
											<p class="guteblock-settings-description gb-desc-small"><?php esc_html_e( 'You can enable / disable double optin feature for each newsletter block separately.', 'guteblock' ); ?></p>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<p class="submit">
							<input type="submit" class="sw-btn-submit" value="Save Settings" />	
						</p>
					
					</div>

					<div id="gb-recaptcha-settings" class="content-panel">
					
						<div class="tab-content">
							<table class="form-table">
								<tbody>
									<tr>
										<th>
											<label><label><?php esc_html_e( 'Site Key', 'guteblock' ); ?></label></label>
										</th>
										<td>
											<input type="text" name="recaptcha-site-key" placeholder="" value="<?php echo get_option('guteblock_recaptcha_site_key'); ?>" />
										</td>
									</tr>
									<tr>
										<th>
											<label><?php esc_html_e( 'Secret Key', 'guteblock' ); ?></label>
										</th>
										<td>
											<input type="text" name="recaptcha-secret-key" placeholder="" value="<?php echo get_option('guteblock_recaptcha_secret_key'); ?>" />
										</td>
									</tr>
									

								</tbody>
							</table>
						</div>
						<p class="submit">
							<input type="submit" class="sw-btn-submit" value="Save Settings" />	
						</p>

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
	gb_update_settings( 'guteblock_mailchimp_api_key', $settings['mailchimp-api']);
	
	// Saving List ID
	gb_update_settings( 'guteblock_mailchimp_list_id', $settings['mailchimp-list-id']);
	
	// Saving Success Response
	gb_update_settings( 'guteblock_mailchimp_success_response', $settings['mailchimp-success-response']);

	// Saving Success Response (Double Optin Enabled)
	gb_update_settings( 'guteblock_mailchimp_success_response_do', $settings['mailchimp-success-response-do']);

	// Saving site key
	gb_update_settings( 'guteblock_recaptcha_site_key', $settings['recaptcha-site-key']);

	// Saving secret key
	gb_update_settings( 'guteblock_recaptcha_secret_key', $settings['recaptcha-secret-key']);

	return;

}

function gb_update_settings($param, $value) {
	if ( ! empty( $value ) ) {
		update_option( $param, sanitize_text_field( wp_unslash( $value ) ), false );
	} else {
		delete_option( $param );
	}
}