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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video
document.addEventListener("DOMContentLoaded", function() {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  let active = false;

  const lazyLoad = function() {
    if (active === false) {
      active = true;

      setTimeout(function() {
        lazyImages.forEach(function(lazyImage) {
          if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");

            lazyImages = lazyImages.filter(function(image) {
              return image !== lazyImage;
            });

            if (lazyImages.length === 0) {
              document.removeEventListener("scroll", lazyLoad);
              window.removeEventListener("resize", lazyLoad);
              window.removeEventListener("orientationchange", lazyLoad);
            }
          }
        });

        active = false;
      }, 200);
    }
  };

  document.addEventListener("scroll", lazyLoad);
  window.addEventListener("resize", lazyLoad);
  window.addEventListener("orientationchange", lazyLoad);
});


var scrollUp = document.getElementById('scrollyY');
document.onscroll = function(){
    if(window.scrollY>200){
        scrollUp.style.opacity = "1";
    }else{
        scrollUp.style.opacity = "0";
    }
};
scrollUp.onclick=function(){
        window.scrollTo({top: 0});
};

document.getElementById("currentYear").textContent = new Date().getFullYear();