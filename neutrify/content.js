window.addEventListener("load", main, false);

function main(evt) {
  var fromDOM = document.querySelector(".item-title").textContent;
  console.log(fromDOM);
  chrome.runtime.sendMessage({ method: "setTitle", title: fromDOM });
}
