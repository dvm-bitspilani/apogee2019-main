function init() {
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
    window.onscroll = () => {
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
        document.getElementById("developers").style.top = '120%';
    }
};

init();