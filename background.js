
var pageConditions = {
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { schemes: ['https', 'http'] }
    })
  ],
  actions: [new chrome.declarativeContent.ShowPageAction()]
}

chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([pageConditions]);
  });
});

var products;

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.method == "getCart") sendResponse(products);
});

chrome.runtime.onMessageExternal.addListener(function (
  message,
  sender,
  sendResponse
) {
  if (message.method == "setCart") products = message;
});
