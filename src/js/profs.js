import '../scss/common.scss'
import '../scss/desktop.scss'
import '../scss/fonts.scss'
import '../scss/mobile.scss'
import '../scss/profshows.scss'

function init() {
    let profshows = [
        {
            name: "N2O - The Killer Comedy Show",
            subhead: "31st March, MAIN AUDI",
            desc: "Coming again with a bang, N2O presents before you the very popular stand up comedians of this era, <b><u>Karunesh Talwar</u></b> - The witty sarcastic comedian and <b><u>Kumar Varun</u></b> - A popular feature of several AIB sketches.<br> Feel the giggles reach the bottom of your stomach with our perfect mix of entertainers.<br> A big shout out to Spectal Management for helping us make this happen.<br> #bitsapogee #therealityroulette  #N2O<br><a target = '_blank' href = 'https://www.facebook.com/168721163216281/posts/2068296213258757/?app=fbl'>Check out this Facebook post!</a>",
            img: require("../static/profshows/n2o.jpg")
        },
        {
            name: "EDM night by RITVIZ",
            subhead: "29th March, 7:30pm, SR Lawns",
            desc: "This APOGEE, we bring to you one of the most talented and emerging EDM artists and music producers of India, RITVIZ with ANKEE opening the night, watch him LIVE on 29th March at SR LAWNS.",
            img: require("../static/profshows/edm.jpg")
        },
    ];

    let pContainer = document.getElementById("profshows-container");

    profshows.forEach(show => {
        pContainer.innerHTML += `
            <div class = "profshow">
                <img class = "profshow-img" src = ${show.img}>
                <div class = "profshow-content">
                    <h1 class = "profshow-header">${show.name}</h1>
                    <h4 class = "profshow-subheader">${show.subhead}</h4>
                    <div class = "profshow-desc">
                        ${show.desc}
                    </div>
                </div>
            </div>
        `;
    })
};

init();
