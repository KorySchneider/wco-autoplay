chrome.runtime.onInstalled.addListener(() => {
	// Disable extension by default
	chrome.action.disable();

	// Enable extension only on watchcartoononline.tv
	chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
		let pageRule = {
			conditions: [
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: { hostSuffix: '.thewatchcartoononline.tv' }
				})
			],
			actions: [new chrome.declarativeContent.ShowAction()],
		};
		
		chrome.declarativeContent.onPageChanged.addRules([pageRule]);
	});
});