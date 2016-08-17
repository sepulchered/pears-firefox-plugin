console.log('inserted PeARS plugin');

chrome.runtime.onMessage.addListener(processPage);

function processPage(message) {
  console.log('received message from background script', message);
}
