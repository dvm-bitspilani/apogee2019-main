import jump from 'jump.js';

function init() {
    let sections = document.getElementsByClassName('section');
    let navItems = document.getElementsByClassName('nav-item');
    let navTexts = document.getElementsByClassName('nav-text');
    let navNumPrimary = document.getElementsByClassName('nav-number-primary');
    let navNumSecondary = document.getElementsByClassName('nav-number-secondary');
    let bars = document.getElementsByClassName('bar');
    let vwHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let waiting = false;
    

    // initalise nav
    let nav = document.getElementById("nav");
    let navData = ["About", "Events", "Speakers", "Workshops", "Contact"];
    let navToPage = ["about", "events", "speakers", "workshop", "contact"]; // MAINTAIN ORDER
    navData.map((data, index) => {
        nav.innerHTML += `
        <div class="nav-item">
            <div class="bar"></div>
            <div class="nav-number-primary">${index < 10 ? '0' : null}${index+2}
            </div>
            <span class="nav-hover-text">&nbsp;&nbsp;&nbsp;${data}</span>
            <div class="nav-number-secondary">${index < 10 ? '0' : null}${index+2}</div>
            <div class="nav-text">${data}</div>
        </div>
        `;
    });

    bars[0].classList.add('active-bar');
    navItems[0].classList.add('nav-active');
    navNumPrimary[0].style.opacity = 0;
    navTexts[0].style.opacity = 1;
    navNumSecondary[0].style.opacity = 1;

    window.addEventListener("scroll", function () {
        if (!waiting) {
            onScrollHandler();
            waiting = true;
            setTimeout(function () { waiting = false; }, 0);
        }
    })

    function onScrollHandler() {
        let active = false;
        for (let i = 0; i < sections.length; i++) {
            let top = sections[i].getBoundingClientRect().top;
            let bottom = sections[i].getBoundingClientRect().bottom;

            if ((top / vwHeight <= 0.7 && top>0) || (bottom/vwHeight >=0.7)  && !active) {
                bars[i].classList.add('active-bar');
                navItems[i].classList.add('nav-active');
                navNumPrimary[i].style.opacity = 0;
                navTexts[i].style.opacity = 1;
                navTexts[i].style.zIndex = 5;
                navNumSecondary[i].style.opacity = 1;
                active = true;
            } else {
                bars[i].classList.remove('active-bar');
                navItems[i].classList.remove('nav-active');
                navNumPrimary[i].style.opacity = 1;
                navTexts[i].style.opacity = 0;
                navTexts[i].style.zIndex = 4;
                navNumSecondary[i].style.opacity = 0;
            }
        }
    }


    let hamburger = document.getElementById("hamburger");
    let sideMenu = document.getElementById("side-menu");
    let closeMenuIcon = document.getElementById("close-hamburger");
    let sideMenuRight = sideMenu.style.right;
    let isMenuOpen = false;

    function openMenu () {
        if(!isMenuOpen) {
            sideMenu.style.right = 0;
        } else {
            sideMenu.style.right = sideMenuRight;
        }
    }

    function closeMenu () {
        if(isMenuOpen) {
            sideMenu.style.right = 0;
        } else {
            sideMenu.style.right = sideMenuRight;
        }
    }

    window.closeMenu = closeMenu;

    hamburger.addEventListener("click", openMenu);

    closeMenuIcon.addEventListener("click", closeMenu);


    let navLinks = document.getElementsByClassName("nav-link");
    let isScrolling = false;
    let prevScroll = window.scrollY;

    function goToPage(pageId) {
        setTimeout(() => isScrolling = true, 100);

        jump(document.getElementById(pageId), {
            callback: () => {
                isScrolling = false;
            }
        });
    }

    Array.from(navLinks).forEach((link) => {
        (function () {
                link.addEventListener("click", function () {
                    if(link.dataset.to) 
                        goToPage(link.dataset.to);
                    closeMenu();
                })
            }
        )();
    });

    document.addEventListener('scroll', handleNavHiding);

    function handleNavHiding () {
        let currScroll;
        if (!isScrolling) {
            currScroll = window.scrollY;
            if (currScroll > 0) {
                if (currScroll > prevScroll) {
                    // scroll down
                    navbar.style.transform = "translateY(-100%)";
                }
                else if (currScroll < prevScroll) {
                    // scroll up
                    navbar.style.transform = "translateY(0%)";
                }
            }
        }
        prevScroll = currScroll;
    }

}

init();
