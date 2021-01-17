window.addEventListener("load", main, false);

function main(evt) {
  var fromDOM = document.querySelector(".item-title");
  if (fromDOM) {
    console.log(fromDOM.textContent);
    chrome.runtime.sendMessage({
      method: "setTitle",
      title: fromDOM.textContent,
    });
  }
}
