chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  // Check that tab url is not excluded by user options
  chrome.pageAction.show(tab.id);
});

chrome.pageAction.onClicked.addListener(function () {
  console.log('page action clicked');
});
