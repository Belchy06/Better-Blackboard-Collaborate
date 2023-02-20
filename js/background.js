chrome.tabs.onActivated.addListener(function (activeInfo) {
	chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
		if(changeInfo.url && changeInfo.url.includes("https://au.bbcollab.com/collab/ui/session/join")) {
			chrome.scripting.executeScript({
				target: { tabId: tabId },
				files: ["./js/content.js"]
			  });
		}
	})
  })