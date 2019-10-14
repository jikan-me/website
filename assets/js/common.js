function triggerMenu( links, state, hamburger){
    if (state) {
        links.style.opacity = 1;
        links.style.zIndex = 1;
        hamburger.classList.add("menu-icon--close-x");
    } else {
        links.style.opacity = 0;
        links.style.zIndex = -1;
        hamburger.classList.remove("menu-icon--close-x");
    }
}

const hamburgerIcon = document.querySelector(".menu-icon");
const mobileLinks = document.querySelector(".menu__mobile-menu");
let state = true;

hamburgerIcon.addEventListener("click", () => {
    triggerMenu(mobileLinks, state, hamburgerIcon)
    state = !state;
});
