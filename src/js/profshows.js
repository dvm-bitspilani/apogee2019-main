import '../scss/common.scss'
import '../scss/desktop.scss'
import '../scss/fonts.scss'
import '../scss/mobile.scss'
import '../scss/profshows.scss'

function init() {
    let profshows = [
        // {
        //     name: "EDM night",
        //     subhead: "Venue Time Date",
        //     desc: "BITS, Pilani, India is back with the 37 th edition of APOGEE- the institute’s annual technical extravaganza, from 28th to 31st March 2019, this time as The Reality Roulette! A melange of technology, innovation and inspiration across space and time of humankind, this technical conference will, as always, play host to the brightest minds and thinkers in the country and world. From presenting papers and projects at the oldest-of-its-kind events in the country, developing amazing solutions to real-life cases and problems, exhibitions of the best contraptions that man has made, guest lectures that tell stories never heard before, to the college’s own literature festival, APOGEE challenges the intellect of the participants and piques the minds of the audience.",
        //     img: require("../static/sponsors/ABInBev.png")
        // },
        {
            name: "N2O - The Killer Comedy Show",
            subhead: "31st of March, MAIN AUDI",
            desc: "Coming again with a bang, N2O presents before you the very popular stand up comedians of this era, <b><u>Karunesh Talwar</u></b> - The witty sarcastic comedian and <b><u>Kumar Varun</u></b> - A popular feature of several AIB sketches.<br> Feel the giggles reach the bottom of your stomach with our perfect mix of entertainers.<br> A big shout out to Spectal Management for helping us make this happen.<br> #bitsapogee #therealityroulette  #N2O<br><a target = '_blank' href = 'https://www.facebook.com/168721163216281/posts/2068296213258757/?app=fbl'>Check out this Facebook post!</a>",
            img: require("../static/profshows/n2o.jpg")
        },
    ];

    let pContainer = document.getElementById("profshows-container");

    profshows.forEach(show => {
        pContainer.innerHTML += `
            <div class = "profshow">
                <img class = "profshow-img" src = ${show.img}/>
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
