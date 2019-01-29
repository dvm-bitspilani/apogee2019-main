function init() {
    let sections = document.getElementsByClassName('section');
    let navItems = document.getElementsByClassName('nav-item');
    let navTexts = document.getElementsByClassName('nav-text');
    let navNumPrimary = document.getElementsByClassName('nav-number-primary');
    let navNumSecondary = document.getElementsByClassName('nav-number-secondary');
    let bars = document.getElementsByClassName('bar');
    let vwHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let waiting = false;

    onScrollHandler();
    
    window.addEventListener("scroll", function () {
        if(!waiting) {
            onScrollHandler();
            waiting = true;
            setTimeout(function () {waiting = false;}, 50);
        }
    })

    function onScrollHandler() {
        let active = false;
        for (let i = 0; i < sections.length; i++) {
            let top = sections[i].getBoundingClientRect().top;
            if (top / vwHeight <= 0.7 && top / vwHeight >= -0.3 && !active) {
                bars[i].classList.add('active-bar');
                navItems[i].classList.add('nav-active');
                navNumPrimary[i].style.opacity = 0;
                navTexts[i].style.opacity = 1;
                navNumSecondary[i].style.opacity = 1;
                active = true;
            } else {
                bars[i].classList.remove('active-bar');
                navItems[i].classList.remove('nav-active');
                navNumPrimary[i].style.opacity = 1;
                navTexts[i].style.opacity = 0;
                navNumSecondary[i].style.opacity = 0;
            }
        }
    }
}

init();