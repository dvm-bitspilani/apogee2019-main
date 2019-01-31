function init() {
    window.onload = () => {
        let loader = document.getElementById("loader-wrap");
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 400);
        window.scrollTo(5,0);
    }


    document.getElementById("dev-navlink").addEventListener("click", function (e) {
        e.preventDefault();
        openReg();
    })

    document.getElementById("close-dev").addEventListener("click", function (e) {
        e.preventDefault();
        closeReg();
    });

    function openReg() {
        document.getElementById("developers").style.top = 0;
        window.closeMenu();
    }

    function closeReg() {
        document.getElementById("developers").style.top = '100%';
    }
};

init();