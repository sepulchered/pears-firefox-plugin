// Get data for page from content script
chrome.runtime.onMessage.addListener(processPageData);

function processPageData(message) {
  console.log(message);
}

function getSettings() {}
function checkPageAllowed(pageUrl) {}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  // Send message to content script with data on whether it should process page data
  chrome.tabs.sendMessage(tabId, {allowed: true});  // for now allow for all pages
  // Show PeARS page action if page is not allowed for user to be able to manually process page
  chrome.pageAction.show(tab.id);  // for now always on
});

chrome.pageAction.onClicked.addListener(function () {
  console.log('page action clicked');
});
