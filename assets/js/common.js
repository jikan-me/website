// document.getElementById('nav_trigger').onclick = () => {
//     document.getElementById('menu_mobile').classList.toggle('show');
// };

function triggerMenu( links, state){
    if (state) {
        links.style.opacity = 1;
        links.style.zIndex = 1;
    } else {
        links.style.opacity = 0;
        links.style.zIndex = -1;
    }

}

const hamburgerIcon = document.querySelector(".menu-icon");
const mobileLinks = document.querySelector(".menu__mobile-menu");
let state = true;

hamburgerIcon.addEventListener("click", () => {
    triggerMenu(mobileLinks, state)
    state = !state;
});
