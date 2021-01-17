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
