<?php
/**
 * General tab for the settings page.
 *
 * @package guteblockBlocks\Settings
 */

$guteblock_mailchimp_api_key = get_option( 'guteblock_mailchimp_api_key', '' );
?>
<div id="guteblock-settings-general" class="tgb-content">
	<table class="form-table">
		<tbody>
			<tr>
				<th>
					<label for="guteblock-settings[mailchimp-api-key]">
						<?php esc_html_e( 'Mailchimp API Key', 'guteblock' ); ?>
					</label>
				</th>
				<td>
					<input type="text" id="guteblock-settings[mailchimp-api-key]" name="guteblock-settings[mailchimp-api-key]" size="40" value="<?php echo esc_attr( $guteblock_mailchimp_api_key ); ?>" />
					<?php
						$guteblock_mailchimp_api_key_link = sprintf(
							'<p class="guteblock-settings-description"><a href="%1$s" target="_blank" rel="noreferrer noopener">%2$s</a></p>',
							'https://mailchimp.com/help/about-api-keys/',
							esc_html__( 'Find your Mailchimp API key.', 'guteblock' )
						);
						echo wp_kses_post( $guteblock_mailchimp_api_key_link );
						?>
				</td>
			</tr>
		</tbody>
	</table>
</div>
