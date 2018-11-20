var $toggleNavBtn = document.getElementById("toggleNavBtn");
var $navigationBlock = document.getElementById("navigation");
var $overlay = document.getElementById("morphSvg");

var openMenuAnimation = anime.timeline({
    loop: false,
    autoplay: false
});
openMenuAnimation
    .add({
        targets: ".menu-icon .line",
        translateY: {
            value: function(target) {
                return target.getAttribute("data-y");
            },
            easing: "linear",
            duration: 250,
            easing: "easeInOutQuart"
        },
        rotate: {
            value: function(target) {
                return target.getAttribute("data-rotate");
            },
            easing: "linear",
            duration: 250,
            delay: 750,
            easing: "easeInOutQuart"
        },
        opacity: {
            value: function(target) {
                return target.getAttribute("data-opacity");
            },
            delay: 750
        }
    })
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

function openMenu() {
    openMenuAnimation.play();
    if (toggleNavBtn.classList.contains("open")) {
        openMenuAnimation.reverse();
        toggleNavBtn.classList.remove("open");
    } else {
        if (toggleNavBtn.classList.contains("__first")) {
            openMenuAnimation.reverse();
        }
        toggleNavBtn.classList.add("open");
    }
    toggleNavBtn.classList.add("__first");
}

$toggleNavBtn.addEventListener("click", openMenu);
