window.addEventListener("load", main, false);

function main(evt) {
  let cart = document.querySelector(".rmq-872ec8ed");
  if (cart) {
    let cartVisibility = cart.style && cart.style.visibility;

    if (cartVisibility == "visible") {
      let cartItemNames = document.querySelectorAll(".clamped-name");
      let cartItemWeights = document.querySelectorAll(".rmq-10c8c9ce");
      const products = [];

      if (cartItemNames) {
        for (let i = 0; i < cartItemNames.length; i++) {
          products.push([
            cartItemNames[i].textContent,
            cartItemWeights[i].textContent,
          ]);
        }
        chrome.runtime.sendMessage({
          method: "setCart",
          cart: products,
        });
      }
    } else {
      var actualCode =
        "var checkExist = setInterval(function () {" +
        'if (document.querySelector(".css-u7q90y")) {' +
        "clearInterval(checkExist);" +
        'element = document.querySelector(".css-u7q90y");' +
        'element.addEventListener("click", function () {' +
        'checkCartItemsExist = setInterval(function () {  if (document.querySelector(".clamped-name")) {    clearInterval(checkCartItemsExist);    let cartItemNames = document.querySelectorAll(".clamped-name");    let cartItemWeights = document.querySelectorAll(".rmq-10c8c9ce");    const products = [];    if (cartItemNames) {      for (let i = 0; i < cartItemNames.length; i++) {        products.push([          cartItemNames[i].textContent,          cartItemWeights[i].textContent,        ]);      }      console.log(products);      let extensionId = "apfohpnpkgcacedcjadineighopfmedf";      chrome.runtime.sendMessage(extensionId, {        method: "setCart",        cart: products,      });    }  }}, 100);' +
        "});" +
        "}" +
        "}, 100);";

      var script = document.createElement("script");
      script.textContent = actualCode;
      (document.head || document.documentElement).appendChild(script);
      script.parentNode.removeChild(script);
    }
  }
}

// Line 40 code (non-stringified)
// checkCartItemsExist = setInterval(function () {
//   if (document.querySelector(".clamped-name")) {
//     clearInterval(checkCartItemsExist);
//     let cartItemNames = document.querySelectorAll(".clamped-name");
//     let cartItemWeights = document.querySelectorAll(".rmq-10c8c9ce");
//     const products = [];

//     if (cartItemNames) {
//       for (let i = 0; i < cartItemNames.length; i++) {
//         products.push([
//           cartItemNames[i].textContent,
//           cartItemWeights[i].textContent,
//         ]);
//       }
//       console.log(products);

//       let extensionId = "apfohpnpkgcacedcjadineighopfmedf";

//       chrome.runtime.sendMessage(extensionId, {
//         method: "setCart",
//         cart: products,
//       });
// }
// }
// }, 100);
