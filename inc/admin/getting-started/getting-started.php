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
function atomic_blocks_start_load_admin_scripts( $hook ) {

	if ( ! ( $hook === 'toplevel_page_guteblock' ) ) {
		return;
	}

	// phpcs:ignore WordPress.PHP.StrictComparisons.LooseComparison -- Could be true or 'true'.
	$postfix = ( SCRIPT_DEBUG == true ) ? '' : '.min';

	/**
	 * Load scripts and styles
	 *
	 * @since 1.0
	 */

	// Getting Started javascript.
	wp_enqueue_script( 'guteblock-getting-started', plugins_url( 'getting-started/getting-started.js', dirname( __FILE__ ) ), array( 'jquery' ), '1.0.0', true );

	// Getting Started styles.
	wp_register_style( 'guteblock-getting-started', plugins_url( 'getting-started/getting-started.css', dirname( __FILE__ ) ), false, '1.0.0' );
	wp_enqueue_style( 'guteblock-getting-started' );

	// FontAwesome.
	wp_register_style( 'guteblock-fontawesome', plugins_url( '/assets/fontawesome/css/all' . $postfix . '.css', dirname( __FILE__ ) ), false, '1.0.0' );
	wp_enqueue_style( 'guteblock-fontawesome' );
}
add_action( 'admin_enqueue_scripts', 'atomic_blocks_start_load_admin_scripts' );


/**
 * Adds a menu item for the Getting Started page.
 *
 * @since 1.0.0
 */
function atomic_blocks_getting_started_menu() {

	add_menu_page(
		__( 'Guteblock', 'guteblock' ),
		__( 'Guteblock', 'guteblock' ),
		'manage_options',
		'guteblock',
		'atomic_blocks_getting_started_page',
		'dashicons-building'
	);

	add_submenu_page(
		'guteblock',
		esc_html__( 'Getting Started', 'guteblock' ),
		esc_html__( 'Getting Started', 'guteblock' ),
		'manage_options',
		'guteblock',
		'atomic_blocks_getting_started_page'
	);

	add_submenu_page(
		'guteblock',
		esc_html__( 'Guteblock Settings', 'guteblock' ),
		esc_html__( 'Settings', 'guteblock' ),
		'manage_options',
		'guteblock-plugin-settings',
		'atomic_blocks_render_settings_page'
	);

}
add_action( 'admin_menu', 'atomic_blocks_getting_started_menu' );


/**
 * Outputs the markup used on the Getting Started
 *
 * @since 1.0.0
 */
function atomic_blocks_getting_started_page() {

	/**
	 * Create recommended plugin install URLs
	 *
	 * @since 1.0.0
	 */
	$gberg_install_url = wp_nonce_url(
		add_query_arg(
			array(
				'action' => 'install-plugin',
				'plugin' => 'gutenberg',
			),
			admin_url( 'update.php' )
		),
		'install-plugin_gutenberg'
	);

	$ab_install_url = wp_nonce_url(
		add_query_arg(
			array(
				'action' => 'install-plugin',
				'plugin' => 'guteblock',
			),
			admin_url( 'update.php' )
		),
		'install-plugin_guteblock'
	);

	$ab_theme_install_url = wp_nonce_url(
		add_query_arg(
			array(
				'action' => 'install-theme',
				'theme'  => 'guteblock',
			),
			admin_url( 'update.php' )
		),
		'install-theme_guteblock'
	);
	?>
	<div class="wrap ab-getting-started">
		<div class="intro-wrap">
			<div class="intro">
				<a href="https://guteblock.com/"><img class="atomic-logo" src="<?php echo esc_url( plugins_url( 'newimages/logo.png', __FILE__ ) ); ?>" alt="<?php esc_html_e( 'Visit Guteblock', 'guteblock' ); ?>" /></a>
				<h3><?php printf( esc_html__( 'Getting started with', 'guteblock' ) ); ?> <strong><?php printf( esc_html__( 'Guteblock', 'guteblock' ) ); ?></strong></h3>
			</div>

			<ul class="inline-list">
				<li class="current"><a id="guteblock-panel" href="#"><i class="fa fa-check"></i> <?php esc_html_e( 'Getting Started', 'guteblock' ); ?></a></li>
				<li><a id="plugin-help" href="#"><i class="fa fa-plug"></i> <?php esc_html_e( 'Plugin Help File', 'guteblock' ); ?></a></li>
				<li><a id="themesvillage" href="#"><?php esc_html_e( 'Themesvillage', 'guteblock' ); ?></a></li>
				<li><a id="themesvillage" href="#"><?php esc_html_e( 'Settings', 'guteblock' ); ?></a></li>
			</ul>
		</div>

		<div class="panels">
			<div id="panel" class="panel">

				<div id="guteblock-panel" class="panel-full visible">
					<div class="ab-block-split clearfix">
						<div class="ab-block-split-left">							
							<div class="ab-titles">
								<h2><?php esc_html_e( 'Enhance your Gutenberg experience with Guteblock!', 'guteblock' ); ?></h2>
								<p><?php esc_html_e( 'The Guteblock collection is now ready to use in your posts and pages. Check out the help file link above for detailed instructions!', 'guteblock' ); ?></p>
							</div>
						</div>
						<div class="ab-block-split-right">
							<div class="ab-block-theme">
								<img src="<?php echo esc_url( plugins_url( 'newimages/img-right.jpg', __FILE__ ) ); ?>" alt="<?php esc_html_e( 'Guteblock Theme', 'guteblock' ); ?>" />
							</div>
						</div>
					</div>
				</div>


				<div id="guteblock-panel" class="panel-left visible">
					<div class="ab-block-split clearfix">
						<div class="ab-block-split-left">							
							<div class="ab-titles">
								<h2><?php esc_html_e( 'Welcome to the future of site building with Gutenberg and Guteblock!', 'guteblock' ); ?></h2>
								<p><?php esc_html_e( 'The Guteblock collection is now ready to use in your posts and pages. Check out the help file link above for detailed instructions!', 'guteblock' ); ?></p>
							</div>
						</div>
						<div class="ab-block-split-right">
							<div class="ab-block-theme">
								<img src="<?php echo esc_url( plugins_url( 'images/build-content.svg', __FILE__ ) ); ?>" alt="<?php esc_html_e( 'Guteblock Theme', 'guteblock' ); ?>" />
							</div>
						</div>
					</div>

					<div class="ab-block-feature-wrap clear">
						<i class="fas fa-cube"></i>
						<h2><?php esc_html_e( 'Available Guteblock', 'guteblock' ); ?></h2>
						<p><?php esc_html_e( 'The following blocks are available in Guteblock. More blocks are on the way so stay tuned!', 'guteblock' ); ?></p>

						<div class="ab-block-features">
							<div class="ab-block-feature">
								<div class="ab-block-feature-icon"><img src="<?php echo esc_url( plugins_url( 'images/cc26.svg', __FILE__ ) ); ?>" alt="Post Grid Block" /></div>
								<div class="ab-block-feature-text">
									<h3><?php esc_html_e( 'Post Grid Block', 'guteblock' ); ?></h3>
									<p><?php esc_html_e( 'Add an eye-catching, full-width section with a big title, paragraph text, and a customizable button.', 'guteblock' ); ?></p>
								</div>
							</div>

							<div class="ab-block-feature">
								<div class="ab-block-feature-icon"><img src="<?php echo esc_url( plugins_url( 'images/cc430.svg', __FILE__ ) ); ?>" alt="Container Block" /></div>
								<div class="ab-block-feature-text">
									<h3><?php esc_html_e( 'Container Block', 'guteblock' ); ?></h3>
									<p><?php esc_html_e( 'Wrap several blocks into a section and add padding, margins, background colors and images.', 'guteblock' ); ?></p>
								</div>
							</div>

							<div class="ab-block-feature">
								<div class="ab-block-feature-icon"><img src="<?php echo esc_url( plugins_url( 'images/cc41.svg', __FILE__ ) ); ?>" alt="<?php esc_html_e( 'Call To Action Block', 'guteblock' ); ?>" /></div>
								<div class="ab-block-feature-text">
									<h3><?php esc_html_e( 'Call-To-Action Block', 'guteblock' ); ?></h3>
									<p><?php esc_html_e( 'Add an eye-catching, full-width section with a big title, paragraph text, and a customizable button.', 'guteblock' ); ?></p>
								</div>
							</div>

							<div class="ab-block-feature">
								<div class="ab-block-feature-icon"><img src="<?php echo esc_url( plugins_url( 'images/cc4.svg', __FILE__ ) ); ?>" alt="<?php esc_html_e( 'Testimonials Block', 'guteblock' ); ?>" /></div>
								<div class="ab-block-feature-text">
									<h3><?php esc_html_e( 'Testimonial Block', 'guteblock' ); ?></h3>
									<p><?php esc_html_e( 'Add a customer or client testimonial to your site with an avatar, text, citation and more.', 'guteblock' ); ?></p>
								</div>
							</div>

							<div class="ab-block-feature">
								<div class="ab-block-feature-icon"><img src="<?php echo esc_url( plugins_url( 'images/cc184.svg', __FILE__ ) ); ?>" alt="<?php esc_html_e( 'Inline Notices Block', 'guteblock' ); ?>" /></div>
								<div class="ab-block-feature-text">
									<h3><?php esc_html_e( 'Inline Notice Block', 'guteblock' ); ?></h3>
									<p><?php esc_html_e( 'Add a colorful notice or message to your site with text, a title and a dismiss icon.', 'guteblock' ); ?></p>
								</div>
							</div>

							<div class="ab-block-feature">
								<div class="ab-block-feature-icon"><img src="<?php echo esc_url( plugins_url( 'images/cc50.svg', __FILE__ ) ); ?>" alt="<?php esc_html_e( 'Sharing Icons Block', 'guteblock' ); ?>" /></div>
								<div class="ab-block-feature-text">
									<h3><?php esc_html_e( 'Sharing Icons Block', 'guteblock' ); ?></h3>
									<p><?php esc_html_e( 'Add social sharing icons to your page with size, shape, color and style options.', 'guteblock' ); ?></p>
								</div>
							</div>

							<div class="ab-block-feature">
								<div class="ab-block-feature-icon"><img src="<?php echo esc_url( plugins_url( 'images/cc94-f.svg', __FILE__ ) ); ?>" alt="<?php esc_html_e( 'Author Profile Block', 'guteblock' ); ?>" /></div>
								<div class="ab-block-feature-text">
									<h3><?php esc_html_e( 'Author Profile Block', 'guteblock' ); ?></h3>
									<p><?php esc_html_e( 'Add a user profile box to your site with a title, bio info, an avatar and social media links.', 'guteblock' ); ?></p>
								</div>
							</div>

							<div class="ab-block-feature">
								<div class="ab-block-feature-icon"><img src="<?php echo esc_url( plugins_url( 'images/cc115.svg', __FILE__ ) ); ?>" alt="<?php esc_html_e( 'Accordion Toggle', 'guteblock' ); ?>" /></div>
								<div class="ab-block-feature-text">
									<h3><?php esc_html_e( 'Accordion Block', 'guteblock' ); ?></h3>
									<p><?php esc_html_e( 'Add an accordion text toggle with a title and descriptive text. Includes font size and toggle options.', 'guteblock' ); ?></p>
								</div>
							</div>

							<div class="ab-block-feature">
								<div class="ab-block-feature-icon"><img src="<?php echo esc_url( plugins_url( 'images/cc45.svg', __FILE__ ) ); ?>" alt="<?php esc_html_e( 'Customizable Button Block', 'guteblock' ); ?>" /></div>
								<div class="ab-block-feature-text">
									<h3><?php esc_html_e( 'Customizable Button', 'guteblock' ); ?></h3>
									<p><?php esc_html_e( 'Add a fancy stylized button to your post or page with size, shape, target, and color options.', 'guteblock' ); ?></p>
								</div>
							</div>

							<div class="ab-block-feature">
								<div class="ab-block-feature-icon"><img src="<?php echo esc_url( plugins_url( 'images/cc38.svg', __FILE__ ) ); ?>" alt="<?php esc_html_e( 'Drop Cap Block', 'guteblock' ); ?>" /></div>
								<div class="ab-block-feature-text">
									<h3><?php esc_html_e( 'Drop Cap Block', 'guteblock' ); ?></h3>
									<p><?php esc_html_e( 'Add a stylized drop cap to the beginning of your paragraph. Choose from three different styles.', 'guteblock' ); ?></p>
								</div>
							</div>

							<div class="ab-block-feature">
								<div class="ab-block-feature-icon"><img src="<?php echo esc_url( plugins_url( 'images/cc402.svg', __FILE__ ) ); ?>" alt="<?php esc_html_e( 'Spacer and Divider Block', 'guteblock' ); ?>" /></div>
								<div class="ab-block-feature-text">
									<h3><?php esc_html_e( 'Spacer & Divider', 'guteblock' ); ?></h3>
									<p><?php esc_html_e( 'Add an adjustable spacer between your blocks with an optional divider with styling options.', 'guteblock' ); ?></p>
								</div>
							</div>
						</div><!-- .ab-block-features -->
					</div><!-- .ab-block-feature-wrap -->
				</div><!-- .panel-left -->

				<!-- Plugin help file panel -->
				<div id="plugin-help" class="panel-left">
					<!-- Grab feed of help file -->
					<?php
						$plugin_help = get_transient( 'guteblock-plugin-help-feed' );

					if ( false === $plugin_help ) {
						$plugin_feed = wp_remote_get( 'https://atomicblocks.com/plugin-help-file//?atomicblocks_api=post_content' );

						if ( ! is_wp_error( $plugin_feed ) && 200 === wp_remote_retrieve_response_code( $plugin_feed ) ) {
							$plugin_help = json_decode( wp_remote_retrieve_body( $plugin_feed ) );
							set_transient( 'guteblock-plugin-help-feed', $plugin_help, DAY_IN_SECONDS );
						} else {
							$plugin_help = __( 'This help file feed seems to be temporarily down. You can always view the help file on the Guteblock site in the meantime.', 'guteblock' );
							set_transient( 'guteblock-plugin-help-feed', $plugin_help, MINUTE_IN_SECONDS * 5 );
						}
					}

						echo wp_kses_post( $plugin_help );
					?>
				</div>

				<!-- Theme help file panel -->
				<?php if ( function_exists( 'atomic_blocks_setup' ) ) { ?>
					<div id="theme-help" class="panel-left">
						<!-- Grab feed of help file -->
						<?php
							$theme_help = get_transient( 'guteblock-theme-help-feed' );

						if ( false === $theme_help ) {
							$theme_feed = wp_remote_get( 'https://atomicblocks.com/theme-help-file//?atomicblocks_api=post_content' );

							if ( ! is_wp_error( $theme_feed ) && 200 === wp_remote_retrieve_response_code( $theme_feed ) ) {
								$theme_help = json_decode( wp_remote_retrieve_body( $theme_feed ) );
								set_transient( 'guteblock-theme-help-feed', $theme_help, DAY_IN_SECONDS );
							} else {
								$theme_help = __( 'This help file feed seems to be temporarily down. You can always view the help file on the Guteblock site in the meantime.', 'guteblock' );
								set_transient( 'guteblock-theme-help-feed', $theme_help, MINUTE_IN_SECONDS * 5 );
							}
						}

							echo wp_kses_post( $theme_help );
						?>
					</div><!-- #theme-help -->
				<?php } ?>

				<div class="panel-right">

					<?php if ( ! function_exists( 'atomic_blocks_setup' ) ) { ?>
					<div class="panel-aside panel-ab-plugin panel-club">
						<div class="panel-club-inside">
							<div class="cell panel-title">
								<h3><i class="fa fa-download"></i> <?php esc_html_e( 'Free Theme Download', 'guteblock' ); ?></h3>
							</div>

							<ul>
								<li class="cell">
									<p><a class="ab-theme-image" href="#"><img src="<?php echo esc_url( plugins_url( 'theme.jpg', __FILE__ ) ); ?>" alt="<?php esc_html_e( 'Visit Guteblock', 'guteblock' ); ?>" /></a></p>

									<p><?php esc_html_e( 'Download our FREE Guteblock theme to help you get started with the Guteblock plugin and the new WordPress block editor.', 'guteblock' ); ?></p>

									<a class="button-primary club-button" target="_blank" href="<?php echo esc_url( $ab_theme_install_url ); ?>"><?php esc_html_e( 'Install Now', 'guteblock' ); ?> &rarr;</a>
								</li>
							</ul>
						</div>
					</div>
					<?php } ?>

					<div class="panel-aside panel-ab-plugin panel-club">
						<div class="panel-club-inside">
							<div class="cell panel-title">
								<h3><i class="fa fa-envelope"></i> <?php esc_html_e( 'Stay Updated', 'guteblock' ); ?></h3>
							</div>

							<ul>
								<li class="cell">
								<p><?php esc_html_e( 'Join the newsletter to receive emails when we add new blocks, release plugin and theme updates, send out free resources, and more!', 'guteblock' ); ?></p>

									<a class="button-primary club-button" target="_blank" href="#"><?php esc_html_e( 'Subscribe Now', 'guteblock' ); ?> &rarr;</a>
								</li>
							</ul>
						</div>
					</div>

					<div class="panel-aside panel-ab-plugin panel-club">
						<div class="panel-club-inside">
							<div class="cell panel-title">
								<h3><i class="fa fa-arrow-circle-down"></i> <?php esc_html_e( 'Free Blocks & Tutorials', 'guteblock' ); ?></h3>
							</div>

							<ul>
								<li class="cell">
									<p><?php esc_html_e( 'Check out the Guteblock site to find block editor tutorials, free blocks and updates about the Guteblock plugin and theme!', 'guteblock' ); ?></p>
									<a class="button-primary club-button" target="_blank" href="#"><?php esc_html_e( 'Visit AtomicBlocks.com', 'guteblock' ); ?> &rarr;</a>
								</li>
							</ul>
						</div>
					</div>
				</div><!-- .panel-right -->

				<div class="footer-wrap">
					<h2 class="visit-title"><?php esc_html_e( 'Free Blocks and Resources', 'guteblock' ); ?></h2>

					<div class="ab-block-footer">
						<div class="ab-block-footer-column">
							<i class="far fa-envelope"></i>
							<h3><?php esc_html_e( 'Blocks In Your Inbox', 'guteblock' ); ?></h3>
							<p><?php esc_html_e( 'Join the newsletter to receive emails when we add new blocks, release plugin and theme updates, send out free resources, and more!', 'guteblock' ); ?></p>
							<a class="button-primary" href="#"><?php esc_html_e( 'Subscribe Today', 'guteblock' ); ?></a>
						</div>

						<div class="ab-block-footer-column">
							<i class="far fa-edit"></i>
							<h3><?php esc_html_e( 'Articles & Tutorials', 'guteblock' ); ?></h3>
							<p><?php esc_html_e( 'Check out the Guteblock site to find block editor tutorials, free blocks and updates about the Guteblock plugin and theme!', 'guteblock' ); ?></p>
							<a class="button-primary" href="#"><?php esc_html_e( 'Visit the Blog', 'guteblock' ); ?></a>
						</div>

						<div class="ab-block-footer-column">
							<i class="far fa-newspaper"></i>
							<h3><?php esc_html_e( 'Gutenberg News', 'guteblock' ); ?></h3>
							<p><?php esc_html_e( 'Stay up to date with the new WordPress editor. Gutenberg News curates Gutenberg articles, tutorials, videos and more free resources.', 'guteblock' ); ?></p>
							<a class="button-primary" href="#"><?php esc_html_e( 'Visit Gutenberg News', 'guteblock' ); ?></a>
						</div>
					</div>

					<div class="ab-footer">
						<p>
							<?php
							/* translators: %1$s StudioPress website URL. %2$s WP Engine website URL. */
							echo sprintf( esc_html__( 'Made by the fine folks at %1$s and %2$s.', 'guteblock' ), '<a href=" ' . esc_url( 'https://studiopress.com/' ) . ' ">StudioPress</a>', '<a href=" ' . esc_url( 'https://wpengine.com/' ) . ' ">WP Engine</a>' );
							?>
						</p>
						<div class="ab-footer-links">
							<a href="#"><?php esc_html_e( 'Guteblock.com', 'guteblock' ); ?></a>
							<a href="#"><?php esc_html_e( 'Blog', 'guteblock' ); ?></a>
							<a href="#"><?php esc_html_e( 'Docs', 'guteblock' ); ?></a>
							<a href="#"><?php esc_html_e( 'Twitter', 'guteblock' ); ?></a>
						</div>
					</div>
				</div><!-- .footer-wrap -->
			</div><!-- .panel -->
		</div><!-- .panels -->
	</div><!-- .getting-started -->
	<?php
}

/**
 * Renders the plugin settings page.
 */
function atomic_blocks_render_settings_page() {

	$pages_dir = trailingslashit( dirname( __FILE__ ) ) . 'pages/';

	include $pages_dir . 'settings-main.php';
}

add_action( 'admin_init', 'atomic_blocks_save_settings' );
/**
 * Saves the plugin settings.
 */
function atomic_blocks_save_settings() {

	// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotValidated,WordPress.Security.ValidatedSanitizedInput.MissingUnslash,WordPress.Security.ValidatedSanitizedInput.InputNotSanitized -- Handled below.
	if ( empty( $_POST['guteblock-settings'] ) ) {
		return;
	}

	if ( empty( $_POST['guteblock-settings-save-nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['guteblock-settings-save-nonce'] ) ), 'guteblock-settings-save-nonce' ) ) {
		return;
	}

	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}

	// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotValidated,WordPress.Security.ValidatedSanitizedInput.MissingUnslash,WordPress.Security.ValidatedSanitizedInput.InputNotSanitized -- Handled below.
	$posted_settings = $_POST['guteblock-settings'];

	/**
	 * Process the Mailchimp API key setting.
	 */
	if ( ! empty( $posted_settings['mailchimp-api-key'] ) ) {
		update_option( 'atomic_blocks_mailchimp_api_key', sanitize_text_field( wp_unslash( $posted_settings['mailchimp-api-key'] ) ), false );
	} else {
		delete_option( 'atomic_blocks_mailchimp_api_key' );
	}

	/**
	 * Trigger an event to let integrations save their settings.
	 */
	do_action( 'atomic_blocks_save_settings', $_POST );

	$redirect = remove_query_arg( 'guteblock-settings-saved', wp_get_referer() );
	wp_safe_redirect( $redirect . '&guteblock-settings-saved=true' );
	exit;
}

/**
 * Loads the settings page scripts.
 *
 * @param string $hook The current admin page.
 */
function atomic_blocks_load_settings_page_scripts( $hook ) {
	if ( 'guteblock_page_guteblock-plugin-settings' !== $hook ) {
		return;
	}

	wp_enqueue_script( 'guteblock-settings-page-scripts', plugins_url( 'getting-started/settings.js', __DIR__ ), array( 'jquery' ), '1.0.0', true );
}
add_action( 'admin_enqueue_scripts', 'atomic_blocks_load_settings_page_scripts' );
