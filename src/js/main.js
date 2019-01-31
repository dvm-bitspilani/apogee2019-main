function init() {
    window.onload = () => {
        let loader = document.getElementById("loader-wrap");
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 400);
        window.scrollTo(5,0);
    }
};

init();