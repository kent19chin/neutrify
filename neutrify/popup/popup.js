chrome.runtime.sendMessage({ method: "getTitle" }, function (response) {
  console.log(response);
  let list = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(response));
  list.appendChild(li);
  // $(".output").text(response);
});
