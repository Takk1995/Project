let menuDom = document.getElementById("menu");
menuDom.addEventListener("click", function () {
    let popUpMenuDom = document.getElementById("pop-up-menu");
    popUpMenuDom.style.display = "block";
});

let closeMenuDom = document.getElementById("pop-up-menu-close");
closeMenuDom.addEventListener("click", function () {
    let popUpMenuDom = document.getElementById("pop-up-menu");
    popUpMenuDom.style.display = "none";
});

let cartDom = document.getElementById("cart");
cartDom.addEventListener("click", function () {
    let popUpCartDom = document.getElementById("pop-up-cart");
    popUpCartDom.style.display = "block";
});

let closeCartDom = document.getElementById("pop-up-cart-close");
closeCartDom.addEventListener("click", function () {
    let popUpCartDom = document.getElementById("pop-up-cart");
    popUpCartDom.style.display = "none";
});












