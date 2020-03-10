<?php
/**
 * Wrapper for main settings page.
 *
 * @package guteblockBlocks\Settings
 */

?>

<div class="wrap gb-getting-started">
	<div class="intro-wrap">
		<div class="intro">
			<a href="https://guteblockblocks.com"><img class="guteblock-logo" src="<?php echo esc_url( plugins_url( '/logo.png', __DIR__ ) ); ?>" alt="<?php esc_html_e( 'Visit guteblock Blocks', 'guteblock' ); ?>" /></a>
			<h1><?php echo esc_html( get_admin_page_title() ); ?></h1>
		</div>

		<ul class="gb-menu">

			<li id="guteblock-settings-tgb-general" class="current">
				<a data-tab="general" href="#general">
					<i class="fa fa-cog"></i> <?php esc_html_e( 'General Settings', 'guteblock' ); ?>
				</a>
			</li>

			<?php do_action( 'guteblock_settings_tabs' ); ?>

		</ul>
	</div>

	<div class="panels">
		<div id="panel" class="panel">
			<div id="guteblock-settings" class="panel-left visible">
				<?php
				// phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Nonce verified in settings save routine. This is a false positive.
				if ( ! empty( $_GET['guteblock-settings-saved'] ) && $_GET['guteblock-settings-saved'] === 'true' ) {
					echo '<div class="updated fade"><p>' . esc_html__( 'Settings saved.', 'guteblock' ) . '</p></div>';
				}
				?>

				<form method="post" action="options.php" class="guteblock-options-form">
						<?php
						require $pages_dir . 'settings-general.php';
						do_action( 'guteblock_settings_page_bottom' );
						submit_button( esc_html__( 'Save Settings', 'guteblock' ) );
						wp_nonce_field( 'guteblock-settings-save-nonce', 'guteblock-settings-save-nonce' );
						?>
				</form>
			</div><!-- .panel-left -->

			<div class="panel-right">
				<div class="panel-aside panel-gb-plugin panel-club">
					<div class="panel-club-inside">
						<div class="cell panel-title">
							<h3><i class="fa fa-plug"></i> <?php esc_html_e( 'Plugin Documentation', 'guteblock' ); ?></h3>
						</div>

						<ul>
							<li class="cell">
								<p><?php esc_html_e( 'Check out the guteblock Blocks documentation for feature and setting explanations, advanced usage, and code examples.', 'guteblock' ); ?></p>
								<a class="button-primary club-button" target="_blank" href="<?php echo esc_url( 'https://github.com/studiopress/guteblock/wiki' ); ?>"><?php esc_html_e( 'View Documentation', 'guteblock' ); ?> &rarr;</a>
							</li>
						</ul>
					</div>
				</div>

				<?php do_action( 'guteblock_settings_page_panel_right' ); ?>

			</div><!-- .panel-right -->
		</div><!-- .panel -->
	</div><!-- .panels -->
</div><!-- .getting-started -->
