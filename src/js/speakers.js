function init() {
    const MOBILE_WIDTH = 900;
    const data = [
        {
            image: require('../imgs/speakers/alan.png'),
            name: "Alan Emtage",
            occupation: "FOUNDER",
            info: "The man who laid the foundation of the internet. Creator of world's first search engine - ARCHIE. \"I wrote a piece of code that gave birth to a multibillion-dollar industry.\""
        },
        {
            image: require('../imgs/speakers/rakesh.jpg'),
            name: "Rakesh Sharma",
            occupation: "Indian space traveller",
            info: "The first Indian citizen to travel to space. Recipient of prestigious Ashok Chakra."
        },
        {
            image: require('../imgs/speakers/ashwin.jpg'),
            name: "Ashwin Sanghi",
            occupation: "Author",
            info: "India's best-selling and most popular author. Author of three best-selling novels: The Rozabal Line, Chanakya's Chant and The Krishna Key. \"The Indian Dan Brown\""
        },
        {
            image: require('../imgs/speakers/vikramaditya.jpg'),
            name: "Vikramaditya Motwane",
            occupation: "Indian film director",
            info: "Film director, producer and screenwriter for films and web series like Sacred Games, Dev.D and Dhan Dhana Dhan Goal."
        },
        {
            image: require('../imgs/speakers/arun.jpg'),
            name: "Arun Shourie",
            occupation: "Renowned Journalist, Former Politician",
            info: "An economist with the World Bank, a consultant to the Planning Commission of India, editor of the Indian Express and The Times of India."
        },
        {
            image: require('../imgs/speakers/morse.jpg'),
            name: "Stephen Morse",
            occupation: "Chief Architect, Intel 8086 processor",
            info: ""
        },
        {
            image: require('../imgs/speakers/hasabnis.png'),
            name: "Lt Gen SS Hasabnis",
            occupation: "Deputy Army Chief of India",
            info: ""
        }
    ];

    const speakersDiv = document.getElementById("speakers");
    let vwWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    // initialise speakers
    function initialiseSpeakers() {
        let div = null;
        for (let i = 0, count = 0; i < data.length; i++) {
            if (vwWidth > MOBILE_WIDTH) {
                if (i % 3 === 0) {
                    div = document.createElement("div");
                    div.className = `speakers-container ${count >= 1 ? "speaker-hidden" : ''}`;
                    count++;
                };

                let isCenter = false;
                if (data.length % 3 === 0) {
                    if (i % 3 === 1) {
                        isCenter = true;
                    }
                } else {
                    if (i % 3 === 1 && i !== data.length - 1) {
                        isCenter = true;
                    }
                }

                div.innerHTML += `
                <div class="speaker ${isCenter ? "speaker-center" : ''}">
                    <img src=${(data[i].image)} alt=${data[i].name} class="speaker-img" />
                    <div class="speaker-content">
                        <span class="speaker-name">${data[i].name}</span>
                        <span class="speaker-occupation">${data[i].occupation}</span>
                        <p class="speaker-info">${data[i].info}</p>
                        <span class="speaker-bar"></span>
                    </div>
                </div>
                `;
                if (i % 3 === 2 || i === data.length - 1) {
                    speakersDiv.appendChild(div);
                }
            } else {
                speakersDiv.innerHTML += `
                <div class="speaker ${i > 0 ? 'speaker-hidden' : ''}">
                    <img src=${(data[i].image)} alt=${data[i].name} class="speaker-img" />
                    <div class="speaker-content">
                        <span class="speaker-name">${data[i].name}</span>
                        <span class="speaker-occupation">${data[i].occupation}</span>
                        <p class="speaker-info">${data[i].info}</p>
                        <span class="speaker-bar"></span>
                    </div>
                </div>
                `;
            }
        }
    }
    initialiseSpeakers();

    // initialise speakers on dimension change
    window.addEventListener("resize", function () {
        let newVwWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if ((vwWidth >= MOBILE_WIDTH && newVwWidth < MOBILE_WIDTH) || (vwWidth <= MOBILE_WIDTH && newVwWidth > MOBILE_WIDTH)) {
            // console.log("resized!");
            vwWidth = newVwWidth;
            currentMobileIndex = 0;
            currentDesktopIndex = 0;
            speakersDiv.innerHTML =
            `
            <span id="speakers-heading">Speakers</span>
            `;
            let div = document.createElement("div");
            div.id = "arrows";
            
            let leftImgDiv = document.createElement("img");
            leftImgDiv.src = require('../static/arrow.png');
            leftImgDiv.alt = "GO LEFT";
            leftImgDiv.id = "speaker-left-arrow";
            leftImgDiv.className = "speaker-arrow";
            leftImgDiv.addEventListener("click", speakerLeft);
            
            let rightImgDiv = document.createElement("img");
            rightImgDiv.src = require('../static/arrow.png');
            rightImgDiv.alt = "GO LEFT";
            rightImgDiv.id = "speaker-right-arrow";
            rightImgDiv.className = "speaker-arrow";
            rightImgDiv.addEventListener("click", speakerRight);

            div.appendChild(leftImgDiv);
            div.appendChild(rightImgDiv);
            speakersDiv.appendChild(div);

            initialiseSpeakers();
        }
    });

    let currentMobileIndex = 0;
    let currentDesktopIndex = 0;
    let tempIndex = 0;
    let isArrowEnabled = true;

    function speakerLeft () {
        if (vwWidth > MOBILE_WIDTH) {
            gotoIndex(currentDesktopIndex - 1);
        } else {
            gotoIndex(currentMobileIndex - 1);
        }
    }

    function speakerRight () {
        if (vwWidth > MOBILE_WIDTH) {
            gotoIndex(currentDesktopIndex + 1);
        } else {
            gotoIndex(currentMobileIndex + 1);
        }
    }
    
    document.getElementById("speaker-left-arrow").addEventListener("click", speakerLeft);
    document.getElementById("speaker-right-arrow").addEventListener("click", speakerRight);
    document.getElementById("mobile-speaker-left-arrow").addEventListener("click", speakerLeft);
    document.getElementById("mobile-speaker-right-arrow").addEventListener("click", speakerRight);

    let left, top;
    speakers.addEventListener('touchstart', function (e) {
        left = e.changedTouches[0].screenX;
        top = e.changedTouches[0].screenY;
    });

    speakers.addEventListener('touchend', function (e) {
        let leftNow = e.changedTouches[0].screenX;
        let topNow = e.changedTouches[0].screenY;

        let delLeft = Math.abs(leftNow - left);
        let delTop = Math.abs(topNow - top);


        if (delLeft != 0 && delTop/delLeft < 0.15) {
            if (leftNow > left) {
                //right swipe
                speakerRight();
            }
            else {
                //left swipe
                speakerLeft();
            }
        }
    })

    function gotoIndex(index) {
        if (isArrowEnabled) {
            isArrowEnabled = false;
            if (vwWidth > MOBILE_WIDTH) {
                if(Math.ceil(data.length / 3) - 1 == 0)
                    return;
                if (index > Math.ceil(data.length / 3) - 1)
                    index = 0;
                if (index < 0)
                    index = Math.ceil(data.length / 3) - 1
                let speakersContainers = document.getElementsByClassName("speakers-container");
                speakersContainers[currentDesktopIndex].classList.add('fadeOffDesktop');
                speakersContainers[index].style.display = 'flex';
                speakersContainers[index].classList.add('fadeInDesktop');
                tempIndex = currentDesktopIndex;
                setTimeout(function () {
                    speakersContainers[tempIndex].classList.remove('fadeOffDesktop');
                    speakersContainers[tempIndex].style.display = 'none';
                    speakersContainers[currentDesktopIndex].style.opacity = 1;
                    speakersContainers[currentDesktopIndex].classList.remove('fadeInDesktop');
                    isArrowEnabled = true;
                }, 510);
                currentDesktopIndex = index;
            } else {
                if (index > data.length - 1)
                    index = 0;
                if (index < 0)
                    index = data.length - 1;
                let speakers = document.getElementsByClassName("speaker");
                speakers[currentMobileIndex].classList.add('fadeOffMobile');
                speakers[index].style.display = 'flex';
                speakers[index].classList.add('fadeInMobile');
                tempIndex = currentMobileIndex;
                setTimeout(function () {
                    speakers[tempIndex].classList.remove('fadeOffMobile');
                    speakers[tempIndex].style.display = 'none';
                    speakers[currentMobileIndex].style.opacity = 1;
                    speakers[currentMobileIndex].classList.remove('fadeInMobile');
                    isArrowEnabled = true;
                }, 510);
                currentMobileIndex = index;
            }
        }
    }
}

init();