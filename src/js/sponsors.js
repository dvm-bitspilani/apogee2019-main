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
            sponsors: []
        },
        {
            category_name: "Partners",
            sponsors: [
                {
                    name: "L&T",
                    image: require("../static/sponsors/L&T.png"),
                    role: 'Title sponsor'
                },
                {
                    name: "YesBank",
                    image: require("../static/sponsors/YesBank.png"),
                    role: 'Banking Partner'
                },
                {
                    name: "AB InBev Innovation Brewery",
                    image: require("../static/sponsors/ABInBev.png"),
                    role: 'Official Innovation Partner'
                },
                {
                    name: "Casio",
                    image: require("../static/sponsors/Casio.jpg"),
                    role: 'Official Calculator Partner'
                },
            ]
        }
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
                if (sponsor.name === "L&T") {
                sponsorsContainer.innerHTML += `
                            <div class="box" id = "lnt" data-category=${category.category_name} data-event=${sponsor.name}>
                                <img src=${sponsor.image} alt=${sponsor.name} /> 
                                <div class="sponsor-content">
                                    <span>${sponsor.name}</span>
                                    <span class="sponsor-role">${sponsor.role}</span>
                                </div>
                            </div>
                            `;
                }
                else {
                    sponsorsContainer.innerHTML += `
                            <div class="box" data-category=${category.category_name} data-event=${sponsor.name}>
                                <img src=${sponsor.image} alt=${sponsor.name} /> 
                                <div class="sponsor-content">
                                    <span>${sponsor.name}</span>
                                    <span class="sponsor-role">${sponsor.role}</span>
                                </div>
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
                if (sponsor.name === "L&T") {
                sponsorsContainer.innerHTML += `
                            <div class="box" id = "lnt" data-category=${sponsors[categoryIndex].category_name} data-event=${sponsor.name}>
                                <img src=${sponsor.image} alt=${sponsor.name} /> 
                                <div class="sponsor-content">
                                    <span>${sponsor.name}</span>
                                    <span class="sponsor-role">${sponsor.role}</span>
                                </div>
                            </div>
                            `;
                }
                else {
                    sponsorsContainer.innerHTML += `
                            <div class="box" data-category=${sponsors[categoryIndex].category_name} data-event=${sponsor.name}>
                                <img src=${sponsor.image} alt=${sponsor.name} /> 
                                <div class="sponsor-content">
                                    <span>${sponsor.name}</span>
                                    <span class="sponsor-role">${sponsor.role}</span>
                                </div>
                            </div>
                            `;
                }
            })
        }, currsponsors.length * 10)
    }
};

init();
