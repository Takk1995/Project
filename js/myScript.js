let menuDom = document.getElementById("menu")
menuDom.addEventListener("click", function(){
    let popUpMenuDom = document.getElementById("pop-up-menu");
    popUpMenuDom.style.display = "block"; 
})

let closeMenuDom = document.getElementById("pop-up-menu-close")
closeMenuDom.addEventListener("click", function(){
    let popUpMenuDom = document.getElementById("pop-up-menu");
    popUpMenuDom.style.display = "none";
})

let cartDom = document.getElementById("cart")
cartDom.addEventListener("click", function(){
    let popUpCartDom = document.getElementById("pop-up-cart");
    popUpCartDom.style.display = "block";
})

let closeCartDom = document.getElementById("pop-up-cart-close")
closeCartDom.addEventListener("click", function(){
    let popUpCartDom = document.getElementById("pop-up-cart");
    popUpCartDom.style.display = "none";
})

let loginDom = document.getElementById("loginBtn")
loginDom.addEventListener("click", function(){
    let onLoginDom = document.getElementById("login");
    onLoginDom.style.display = "block";
    let closeRegisterDom = document.getElementById("register");
    closeRegisterDom.style.display = "none";
})

let registerDom = document.getElementById("registerBtn")
registerDom.addEventListener("click", function(){
    let onRegisterDom = document.getElementById("register");
    onRegisterDom.style.display = "block";
    let closeLoginDom = document.getElementById("login");
    closeLoginDom.style.display = "none";
})











