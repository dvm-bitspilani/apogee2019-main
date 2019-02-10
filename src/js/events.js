function init() {
    const URL = "https://bits-apogee.org/2019/registrations/events_details";

    // define divs here
    const loadingDiv = document.getElementById("category-loading");
    const notfoundDiv = document.getElementById("category-notfound");
    const errorDiv = document.getElementById("category-error");
    const categoriesContainer = document.getElementById("all-events-categories");
    const eventsContainer = document.getElementById("category-events");
    const regEvents = document.getElementById("register-events");

    let events = null;
    fetch(URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(res => {
            if (res) {
                events = res;
                let eventCount = 0; // to check if events rendered in reg
                if (events) {
                    let categoriesDiv = document.createElement("div");
                    categoriesDiv.id = "categories-items";
                    events.map((category, index) => {
                        let span = document.createElement("span");
                        span.className = `category-item ${index === 0 ? 'active-category' : ''}`;
                        span.setAttribute('data', `category: '${category.category_name}', index: '${index}'`);
                        span.addEventListener("click", () => changeCategory(index));
                        span.innerHTML = category.category_name;
                        categoriesDiv.appendChild(span);

                        eventCount += category.events.length;

                        if (index === 0) {
                            category.events.map(event => {
                                let eventBox = document.createElement("div");
                                eventBox.className = "event-box";
                                eventBox.setAttribute("data-category", category.category_name);
                                eventBox.setAttribute("data-event", event.name);

                                eventBox.innerHTML += `
                                    ${event.img_url.toLowerCase() !== "nill" ? `<img src=${event.img_url} alt=${event.name} />` : `<img src=${require("../static/logo.svg")} alt="APOGEE" />`} 
                                    <span>${event.name}</span>
                                `;

                                eventBox.addEventListener("click", () => eventClick(event.name, event.content, event.rules, event.id));

                                eventsContainer.appendChild(eventBox);

                                // for registrations
                                let eventOption = document.createElement("option");
                                eventOption.setAttribute("value", event.id);
                                eventOption.innerHTML = event.name;
                                regEvents.appendChild(eventOption);
                            })
                        }
                        else {
                            category.events.map(event => {
                                // for registrations
                                let eventOption = document.createElement("option");
                                eventOption.setAttribute("value", event.name);
                                eventOption.innerHTML = event.name;
                                regEvents.appendChild(eventOption);
                            })
                        }
                    });

                    function updateRegEvents () {
                        if (eventCount == regEvents.children.length - 1) {
                            document.get
                            regEvents.removeChild(document.getElementById("reg-events-label"));
                            $('#register-events').trigger('chosen:updated');
                        }
                        else {
                            setTimeout(() => updateRegEvents(), 200);
                        }
                    }
                    updateRegEvents();

                    loadingDiv.style.display = "none";
                    categoriesContainer.appendChild(categoriesDiv);
                } else {
                    loadingDiv.style.display = "none";
                    errorDiv.style.display = "flex";
                }
            }
            else {
                console.log("Error occurred while fetching events!");
                loadingDiv.style.display = "none";
                errorDiv.style.display = "flex";
            }
        })
        .catch(err => {
            console.log(err);
            loadingDiv.style.display = "none";
            errorDiv.style.display = "flex";
        })

    function changeCategory(categoryIndex) {
        categoryIndex = parseInt(categoryIndex);

        let categoriesDiv = document.getElementsByClassName("category-item");
        for (let i = 0; i < categoriesDiv.length; i++) {
            categoriesDiv[i].classList.remove('active-category');
            if (i === categoryIndex) {
                categoriesDiv[i].classList.add('active-category');
            }
        }

        let currEvents = document.getElementsByClassName("event-box");
        for (let i = currEvents.length - 1; i > 0; i--) {
            setTimeout(() => currEvents[i].classList.add('popout-class'), (currEvents.length - i - 1) * 10);
        }
        setTimeout(function () {
            eventsContainer.innerHTML = '';
            events[categoryIndex].events.map(event => {
                let eventBox = document.createElement("div");
                eventBox.className = "event-box";
                eventBox.setAttribute("data-category", events[categoryIndex].category_name);
                eventBox.setAttribute("data-event", event.name);

                eventBox.innerHTML += `
                    ${event.img_url.toLowerCase() !== "nill" ? `<img src=${event.img_url} alt=${event.name} />` : `<img src=${require("../static/logo.svg")} alt="APOGEE" />`} 
                    <span>${event.name}</span>
                `;

                eventBox.addEventListener("click", () => eventClick(event.name, event.content, event.rules, event.id));

                eventsContainer.appendChild(eventBox);
            })
        }, currEvents.length * 10)
    }

    let alleventsBtn = document.getElementsByClassName("view-all-events-btn");
    for(let i=0; i<alleventsBtn.length; i++) {
        alleventsBtn[i].addEventListener("click", openAllEvents);
    }


    function openAllEvents() {
        let container = document.getElementById("container");
        let nav = document.getElementById("nav");
        let navLinks = document.getElementById("links");
        let closeEvents = document.getElementById("links2");
        let allEvents = document.getElementById("all-events");
        let stars = document.getElementById("star-container");

        container.style.opacity = 0;
        nav.style.opacity = 0;
        navLinks.style.opacity = 0;
        stars.style.opacity = 0;

        setTimeout(function () {
            container.style.display = 'none';
            nav.style.display = 'none';
            navLinks.style.display = 'none';
            stars.style.display = 'none';
            closeEvents.style.display = 'flex';
            allEvents.style.display = 'flex';
            allEvents.style.opacity = 1;
            closeEvents.style.opacity = 1;
            closeEvents.addEventListener("click", closeAllEvents);
        }, 600)
    }

    function closeAllEvents() {
        let container = document.getElementById("container");
        let nav = document.getElementById("nav");
        let navLinks = document.getElementById("links");
        let closeEvents = document.getElementById("links2");
        let allEvents = document.getElementById("all-events");
        let stars = document.getElementById("star-container");

        allEvents.style.opacity = 0;
        closeEvents.style.opacity = 0;

        setTimeout(function () {
            container.style.display = 'block';
            nav.style.display = 'flex';
            navLinks.style.display = 'flex';
            stars.style.display = 'block';
            closeEvents.style.display = 'none';
            allEvents.style.display = 'none';
            container.style.opacity = 1;
            nav.style.opacity = 1;
            navLinks.style.opacity = 1;
            stars.style.opacity = 1;
        }, 600)
    }

    let singleEventPage = document.getElementById("single-event-page");
    let singleEventCloseBtn = document.getElementById("close-single-event");

    singleEventCloseBtn.addEventListener("click", closeSingleEventPage);

    function eventClick (name, content, rules, id) {
        document.getElementById("single-event-heading").innerHTML = name;
        document.getElementById("single-event-content").innerHTML = content;
        document.getElementById("single-event-rules").innerHTML = rules;

        document.getElementById("single-event-register").addEventListener("click", function () {
            window.registerForEvent = id;

            setTimeout(() => window.registerForEvent = "", 2000);
            
            closeSingleEventPage();
            window.openReg();
        });

        openSingleEventPage();
    }

    function openSingleEventPage () {
        singleEventPage.style.top = 0;
    }

    function closeSingleEventPage () {
        singleEventPage.style.top = "120%";
    }
};

init();