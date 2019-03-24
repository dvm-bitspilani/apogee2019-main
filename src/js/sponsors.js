import '../scss/common.scss'
import '../scss/desktop.scss'
import '../scss/fonts.scss'
import '../scss/mobile.scss'
import '../scss/sponsors.scss'

function init() {
    // define divs here
    const categoriesContainer = document.getElementById("all-sponsors-categories");
    const sponsorsContainer = document.getElementById("category-sponsors");

    let sponsors = [
        {
            category_name: "All",
            sponsors: [
                {
                    name: "L&T",
                    image: require("../static/sponsors/L&T.png"),
                    role: 'Title sponsor',
                    link: 'http://www.larsentoubro.com/'
                },
                {
                    name: "Cisco",
                    image: require("../static/sponsors/cisco.png"),
                    role: 'Associate Title sponsor',
                    link: 'https://www.cisco.com/c/en_in/index.html'
                },
                {
                    name: "Verzeo",
                    image: require("../static/sponsors/verzeo.jpg"),
                    role: 'Associate Title sponsor',
                    link: 'https://verzeo.in/'
                },
                {
                    name: "Casio",
                    image: require("../static/sponsors/Casio.jpg"),
                    role: 'Official Education Partner',
                    link: 'https://www.casio.com/'
                },
                {
                    name: "AB InBev Innovation Brewery",
                    image: require("../static/sponsors/ABInBev.png"),
                    role: 'Official Innovation Partner',
                    link: 'https://www.ab-inbev.com/'
                },
                {
                    name: "Beardo",
                    image: require("../static/sponsors/beardo.png"),
                    role: 'Official Grooming Partner',
                    link: 'https://www.beardo.in/?utm_source=google&utm_medium=cpc&utm_campaignid=1496397113&utm_adgroupId=58903062718&utm_adtextid=286039786492&utm_keyword=beardo&placement=&device=c&matchtype=e&adposition=1t1&target=&network=g&gclid=EAIaIQobChMI3Iu2kpWT4QIVj4iPCh36NQeHEAAYASAAEgI_1PD_BwE'
                },
                {
                    name: "Qalaxia",
                    image: require("../static/sponsors/qalaxia.png"),
                    role: 'Official Discussion Partner',
                    link: 'https://www.qalaxia.com/'
                },
                {
                    name: "YesBank",
                    image: require("../static/sponsors/YesBank.png"),
                    role: 'Banking Partner',
                    link: 'https://www.yesbank.in/'
                },
                {
                    name: "EdSense",
                    image: require("../static/sponsors/edsense.png"),
                    role: 'Official Awards Partner',
                    link: 'https://edsense.in/'
                },
                {
                    name: "Ixigo",
                    image: require("../static/sponsors/ixigo.png"),
                    role: 'Official Travel Partner',
                    link: 'https://www.ixigo.com/'
                },
                {
                    name: "Autodesk",
                    image: require("../static/sponsors/Autodesk.png"),
                    role: 'Official Design Partner',
                    link: 'https://www.autodesk.com/education/home'
                },
                {
                    name: "4700BC Popcorn",
                    image: require("../static/sponsors/4700BCPopcorn.png"),
                    role: 'Official Popcorn Partner',
                    link: 'http://www.4700bcpopcorn.com/?gclid=EAIaIQobChMIsZyu_t6S4QIViJOPCh3XLQrxEAAYASAAEgI_Z_D_BwE'
                },
                {
                    name: "Gustora Foods",
                    image: require("../static/sponsors/Gustora.png"),
                    role: 'Official Pasta Partner',
                    link: 'https://gustorafoods.com/'
                },
                {
                    name: "Kronokare",
                    image: require("../static/sponsors/Kronokare.png"),
                    role: 'Official Beauty Partner',
                    link: 'https://kronokare.com/'
                },
                {
                    name: "Zebronics",
                    image: require("../static/sponsors/zebronics.png"),
                    role: 'Official Audio Partner',
                    link: 'https://zebronics.com/'
                },
            ]
        },
        {
            category_name: "Media Partners",
            sponsors: [
                {
                    name: "Entrepreneur India",
                    image: require("../static/sponsors/EntrepreneurIndia.png"),
                    role: 'Digital Media Partner',
                    link: 'https://www.entrepreneur.com/in'
                },
            ]
        },
    ];

    // define an "all" category
    let obj = {
        category_name: "All",
        sponsors: []
    };
    sponsors.map(sponsorObj => {
        sponsorObj.sponsors.map(sponsor => obj.sponsors.push(sponsor))
    })
    // console.log(obj);
    sponsors[0] = obj;

    // init sponsors
    let categoriesDiv = document.createElement("div");
    categoriesDiv.id = "categories-items";
    sponsors.map((category, index) => {
        let span = document.createElement("span");
        span.className = `category-item ${index === 0 ? 'active-category' : ''}`;
        span.setAttribute('data', `category: '${category.category_name}', index: '${index}'`);
        span.addEventListener("click", () => changeCategory(index));
        span.innerHTML = category.category_name;
        categoriesDiv.appendChild(span);

        if (index === 0) {
            category.sponsors.map(sponsor => {
                let idVal = "", classVal = "box";
                if (sponsor.name === "L&T") {
                    idVal = "lnt";
                }
                else if (sponsor.name === "Cisco" || sponsor.name === "Verzeo") {
                    classVal += " assoc-title";
                }

                if(!sponsor.link) {
                    sponsorsContainer.innerHTML += `
                            <div class="${classVal}" id="${idVal}" data-category=${category.category_name} data-event=${sponsor.name}>
                                <img src=${sponsor.image} alt=${sponsor.name} /> 
                                <div class="sponsor-content">
                                    <span>${sponsor.name}</span>
                                    <span class="sponsor-role">${sponsor.role}</span>
                                </div>
                            </div>
                            `;
                } else {
                    sponsorsContainer.innerHTML += `
                            <div class="${classVal}" id="${idVal}" data-category=${category.category_name} data-event=${sponsor.name}>
                                <a href=${sponsor.link} target="_blank" class="box-link">
                                    <img src=${sponsor.image} alt=${sponsor.name} /> 
                                    <div class="sponsor-content">
                                        <span>${sponsor.name}</span>
                                        <span class="sponsor-role">${sponsor.role}</span>
                                    </div>
                                </a>
                            </div>
                            `;
                }
            })
        }
    });

    categoriesContainer.appendChild(categoriesDiv);

    function changeCategory(categoryIndex) {
        categoryIndex = parseInt(categoryIndex);

        let categoriesDiv = document.getElementsByClassName("category-item");
        for (let i = 0; i < categoriesDiv.length; i++) {
            categoriesDiv[i].classList.remove('active-category');
            if (i === categoryIndex) {
                categoriesDiv[i].classList.add('active-category');
            }
        }

        let currsponsors = document.getElementsByClassName("event-box");
        for (let i = currsponsors.length - 1; i > 0; i--) {
            setTimeout(() => currsponsors[i].classList.add('popout-class'), (currsponsors.length - i - 1) * 10);
        }
        setTimeout(function () {
            sponsorsContainer.innerHTML = '';
            sponsors[categoryIndex].sponsors.map(sponsor => {
                let idVal = "", classVal = "box";
                if (sponsor.name === "L&T") {
                    idVal = "lnt";
                }
                else if (sponsor.name === "Cisco" || sponsor.name === "Verzeo") {
                    classVal += " assoc-title";
                }

                if(!sponsor.link) {
                    sponsorsContainer.innerHTML += `
                            <div class="${classVal}" id="${idVal}" data-category=${sponsors[categoryIndex].category_name} data-event=${sponsor.name}>
                                <img src=${sponsor.image} alt=${sponsor.name} /> 
                                <div class="sponsor-content">
                                    <span>${sponsor.name}</span>
                                    <span class="sponsor-role">${sponsor.role}</span>
                                </div>
                            </div>
                            `;
                } else {
                    sponsorsContainer.innerHTML += `
                            <div class="${classVal}" id="${idVal}" data-category=${sponsors[categoryIndex].category_name} data-event=${sponsor.name}>
                                <a href=${sponsor.link} target="_blank" class="box-link">
                                    <img src=${sponsor.image} alt=${sponsor.name} /> 
                                    <div class="sponsor-content">
                                        <span>${sponsor.name}</span>
                                        <span class="sponsor-role">${sponsor.role}</span>
                                    </div>
                                </a>
                            </div>
                            `;
                }
            })
        }, currsponsors.length * 10)
    }
};

init();
