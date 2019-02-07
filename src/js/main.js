function init() {
    const MOBILE_WIDTH = 900;
    const vwWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    let img = document.createElement("img");
    // console.log(vwWidth, MOBILE_WIDTH);
    if(vwWidth > MOBILE_WIDTH) {
        img.src = require('../static/desktop-bg.jpg');
        img.id = "desktop-bg";
        document.getElementById("home").appendChild(img);
    } else {
        img.src = require('../static/mobile-bg.jpg');
        img.id = "mobile-bg";
        document.getElementById("home").innerHTML += 
        `
        <div id='mobile-bg'></div>
        <div id='mobile-subtitle'>THE REALITY ROULETTE</div>
        <a id="watch-teaser-mobile" href="https://youtu.be/MqpPYIjDw4I" target="_blank" class="teaser-button">
            WATCH TEASER
        </a>
        `;
    }

    window.onload = () => {
        let loader = document.getElementById("loader-wrap");
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 400);
        document.body.classList.remove('scroll-disable');

        const BASE_URL = "https://bits-apogee.org/2019";
        setColleges();
        function setColleges() {
            fetch(BASE_URL + '/registrations/get_college')
                .then((resp) => resp.json())
                .then(function (data) {
                    let colleges = data.data;
                    let regClgDropDown = document.getElementById('register-college');
                    let regClgLabel = document.getElementById('reg-clg-label');

                    function lazyRenderClgs (clgs, index) {
                      let count = 0;
                      for (; index < clgs.length && count < 500; index++, count++) {
                        let college = clgs[index];
    
                        let opt = document.createElement('option');
                        opt.setAttribute('value', college.id);
                        opt.innerHTML = college.name;
                        regClgDropDown.appendChild(opt);
                      }
                      if (index != clgs.length) setTimeout(() => lazyRenderClgs(clgs, index), 1000);
                      else {
                        // console.log(index);
                        regClgLabel.innerHTML = "Select College*";
                      }
                      // console.log('a');
                    }
                    lazyRenderClgs(colleges, 0);
                })
                .catch(err => console.log(err))
        }
    }
    
    let homeFooterVisible = true;
    let homeFooter = document.getElementsByClassName("home-footer")[0];
    window.onscroll = (e) => {
        if (homeFooterVisible && window.scrollY/window.innerHeight > 0.05) {
            homeFooter.style.opacity = 0;
            homeFooterVisible = false;
        }
        else if (!homeFooterVisible && window.scrollY < 0.2) {
            homeFooter.style.opacity = 1;
            homeFooterVisible = true;
        }
    }

    document.getElementById("dev-navlink").addEventListener("click", function (e) {
        e.preventDefault();
        openDev();
    })

    document.getElementById("close-dev").addEventListener("click", function (e) {
        e.preventDefault();
        closeDev();
    });

    function openDev() {
        document.getElementById("developers").style.top = 0;
        window.closeMenu();
        document.body.classList.add('scroll-disable');
        document.documentElement.classList.add('scroll-disable');
    }

    function closeDev() {
        document.getElementById("developers").style.top = '120%';
        document.body.classList.remove('scroll-disable');
        document.documentElement.classList.remove('scroll-disable');
    }
};

init();