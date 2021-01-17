let li;

checkButtonExist = setInterval(function () {
  if (document.querySelector("#pullCartItems")) {
    clearInterval(checkButtonExist);
    let pullCartItems = document.querySelector("#pullCartItems");
    pullCartItems.addEventListener("click", function () {
      // response is an array of tuples, each tuple has a cart item name and it's corresponding weight
      chrome.runtime.sendMessage({ method: "getCart" }, function (response) {
        console.log("getCart", response);
        if (response) {
          let list = document.getElementById("list");
          response.forEach((product) => {
            li = document.createElement("li");
            li.appendChild(document.createTextNode(response[0]));
            list.appendChild(li);
          });
        }
      });
    });
  }
}, 100);

//Sample Api Call to Our Backend (For User Info)
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3000/users", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    console.log(xhr.responseText);
    // document.getElementById("resp").innerText = xhr.responseText;
  }
};
xhr.send();

//Sample Api Call to Dropbase (For Carbon Emission Info)
var xhr2 = new XMLHttpRequest();
xhr2.open(
  "GET",
  "https://query.dropbase.io/MPEvgaL74k8KZGbJFFJTeN/footprints",
  true
);
xhr2.setRequestHeader("Authorization", "Bearer ");
xhr2.onreadystatechange = function () {
  if (xhr2.readyState == 4) {
    console.log(xhr2.responseText);
    // document.getElementById("resp").innerText = xhr.responseText;
  }
};
xhr2.send();
