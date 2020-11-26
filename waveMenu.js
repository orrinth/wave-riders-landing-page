const burger = document.querySelector(".burger");
const navPage = document.querySelector(".side-bar");
let burgerCount = 0;
burger.onclick = function() {
    if (burgerCount % 2 == 1) {
        navPage.classList.add("hide-menu");
        navPage.classList.remove("show-menu");
    } else {
        navPage.classList.remove("hide-menu");
        navPage.classList.add("show-menu");
    }
    burgerCount++;
}
