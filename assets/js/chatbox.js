ua=navigator.userAgent.toLowerCase(),platform=navigator.platform.toLowerCase();platformName=ua.match(/ip(?:ad|od|hone)/)?"ios":(ua.match(/(?:webos|android)/)||platform.match(/mac|win|linux/)||["other"])[0],isMobile=/ios|android|webos/.test(platformName),isMobile||(window.$zopim||function(e,t){var n=$zopim=function(e){n._.push(e)},i=n.s=e.createElement(t),o=e.getElementsByTagName(t)[0];n.set=function(e){n.set._.push(e)},n._=[],n.set._=[],i.async=!0,i.setAttribute("charset","utf-8"),i.src="//v2.zopim.com/?3cQBoFplIdumhew779oMP9Z74YIjvGyO",n.t=+new Date,i.type="text/javascript",o.parentNode.insertBefore(i,o)}(document,"script"),$zopim(function(){window.setTimeout(function(){$zopim.livechat.window.show()},3e4),$zopim.livechat.window.setOffsetHorizontal(25),$zopim.livechat.window.setOffsetVertical(0),$zopim.livechat.theme.setColor(sitePrimaryColor),$zopim.livechat.window.setSize("small")}));

$(window).on('load', function() {
	setTimeout(() => {
		$('[data-test-id="ChatWidgetWindow"]').height(chatBoxHeight + 'px');
		$('[data-test-id="ChatWidgetWindow-iframe"]').contents().find(".meshim_widget_components_chatWindow_ChatPanel.cwp_small").css('height', chatBoxHeight + 'px');
	}, 500);
});