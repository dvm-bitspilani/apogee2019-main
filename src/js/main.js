function init() {
    let hamburger = document.getElementById("hamburger");
    let sideMenu = document.getElementById("side-menu");
    let closeMenu = document.getElementById("close-hamburger");
    let sideMenuRight = sideMenu.style.right;
    let isMenuOpen = false;

    hamburger.addEventListener("click", function () {
        if(!isMenuOpen) {
            sideMenu.style.right = 0;
        } else {
            sideMenu.style.right = sideMenuRight;
        }
    });

    closeMenu.addEventListener("click", function () {
        if(isMenuOpen) {
            sideMenu.style.right = 0;
        } else {
            sideMenu.style.right = sideMenuRight;
        }
    });
};

init();