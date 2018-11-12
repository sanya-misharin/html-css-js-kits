var $toggleNavBtn = document.getElementById("toggleNavBtn");
var $navigationBlock = document.getElementById("navigation");
var $overlay = document.getElementById("morphSvg");

var openMenuAnimation = anime.timeline({
    loop: false,
    autoplay: false
});
openMenuAnimation
    .add({
        targets: ".morph",
        d: [
            {
                value:
                    "M0,0V1400s105.932-319,370-319,315.067,579,599,579,304.485-510,611-510,340,450,340,450V0Z"
            }
        ],
        easing: "easeInOutQuad",
        duration: 1800,
        offset: "0"
    })
    .add({
        targets: "#navigation",
        translateY: "100%",
        easing: "easeInOutQuad",
        duration: 1800,
        offset: "0"
    });

/* var menuToBottom = anime({
    targets: "#navigation",
    translateY: 0,
    easing: "easeInOutQuad",
    duration: 2000,
    loop: false,
    autoplay: false
}); */

function openMenu() {
    if (toggleNavBtn.classList.contains("open")) {
        openMenuAnimation.play();
        openMenuAnimation.reverse();
        toggleNavBtn.classList.remove("open");
    } else {
        openMenuAnimation.restart();
        toggleNavBtn.classList.add("open");
    }
    
}

$toggleNavBtn.addEventListener("click", openMenu);
