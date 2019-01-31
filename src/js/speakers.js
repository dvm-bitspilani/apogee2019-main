function init() {
    const MOBILE_WIDTH = 900;
    const data = [
        {
            image: require('../static/speakers/cara.jpg'),
            name: "Cara Something 01",
            occupation: "Yash ko nahi degi",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quas velit corporis ad sunt corrupti voluptatum consequatur quaerat et sed minima, quidem beatae est perferendis voluptas nesciunt doloribus in sint."
        },
        {
            image: require('../static/speakers/cara.jpg'),
            name: "Cara Something 02",
            occupation: "Yash ko nahi degi",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quas velit corporis ad sunt corrupti voluptatum consequatur quaerat et sed minima, quidem beatae est perferendis voluptas nesciunt doloribus in sint."
        },
        {
            image: require('../static/speakers/cara.jpg'),
            name: "Cara Something 03",
            occupation: "Yash ko nahi degi",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quas velit corporis ad sunt corrupti voluptatum consequatur quaerat et sed minima, quidem beatae est perferendis voluptas nesciunt doloribus in sint."
        },
        {
            image: require('../static/speakers/cara.jpg'),
            name: "Cara Something 04",
            occupation: "Yash ko nahi degi",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quas velit corporis ad sunt corrupti voluptatum consequatur quaerat et sed minima, quidem beatae est perferendis voluptas nesciunt doloribus in sint."
        },
        {
            image: require('../static/speakers/cara.jpg'),
            name: "Cara Something 05",
            occupation: "Yash ko nahi degi",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quas velit corporis ad sunt corrupti voluptatum consequatur quaerat et sed minima, quidem beatae est perferendis voluptas nesciunt doloribus in sint."
        },
        {
            image: require('../static/speakers/cara.jpg'),
            name: "Cara Something 06",
            occupation: "Yash ko nahi degi",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quas velit corporis ad sunt corrupti voluptatum consequatur quaerat et sed minima, quidem beatae est perferendis voluptas nesciunt doloribus in sint."
        },
        {
            image: require('../static/speakers/cara.jpg'),
            name: "Cara Something 07",
            occupation: "Yash ko nahi degi",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quas velit corporis ad sunt corrupti voluptatum consequatur quaerat et sed minima, quidem beatae est perferendis voluptas nesciunt doloribus in sint."
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
            vwWidth = newVwWidth;
            currentMobileIndex = 0;
            currentDesktopIndex = 0;
            speakersDiv.innerHTML =
                `<span id="speakers-heading">Speakers</span>
            <div id="arrows">
                <img src=${require('../static/speakers/arrow.png')} alt="GO LEFT" id="speaker-left-arrow" class="speaker-arrow" />
                <img src=${require('../static/speakers/arrow.png')} alt="GO LEFT" id="speaker-right-arrow" class="speaker-arrow" />
            </div>`;
            initialiseSpeakers();
        }
    });

    let currentMobileIndex = 0;
    let currentDesktopIndex = 0;
    let tempIndex = 0;
    let isArrowEnabled = true;

    document.getElementById("speaker-left-arrow").addEventListener("click", function () {
        if (vwWidth > MOBILE_WIDTH) {
            gotoIndex(currentDesktopIndex - 1);
        } else {
            gotoIndex(currentMobileIndex - 1);
        }
    });

    document.getElementById("speaker-right-arrow").addEventListener("click", function () {
        if (vwWidth > MOBILE_WIDTH) {
            gotoIndex(currentDesktopIndex + 1);
        } else {
            gotoIndex(currentMobileIndex + 1);
        }
    });

    function gotoIndex(index) {
        if (isArrowEnabled) {
            isArrowEnabled = false;
            if (vwWidth > MOBILE_WIDTH) {
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