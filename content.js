chrome.runtime.onMessage.addListener(_processPage);

function _processPage(message) {
  console.log(message, 'msg');
}
