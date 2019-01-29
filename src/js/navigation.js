function init() {
    let sections = document.getElementsByClassName('section');
    let navItems = document.getElementsByClassName('nav-item');
    let vwHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let waiting = false;
    
    window.addEventListener("scroll", function () {
        if(!waiting) {
            onScrollHandler();
            waiting = true;
            setTimeout(function () {waiting = false;}, 50);
        }
    })

    function onScrollHandler() {
        for (let i = 0; i < sections.length; i++) {
            let top = sections[i].getBoundingClientRect().top;
            if (top / vwHeight <= 0.7 && top / vwHeight >= -0.3) {
                navItems[i].classList.add('nav-active');
            } else {
                navItems[i].classList.remove('nav-active');
            }
        }
    }
}

init();