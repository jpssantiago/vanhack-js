const events = [
    {
        id: 0,
        name: 'Webinar',
        location: 'Online',
        date: 'September 24, 2020',
        premium: false,
        image: "https://images.adsttc.com/media/images/5bf2/16a3/08a5/e515/4e00/018b/medium_jpg/feature_image.jpg?1542592134",
    },
    {
        id: 1,
        name: 'Premium-only Webinar',
        location: 'Online',
        date: 'September 26, 2020',
        premium: true,
        image: "https://images.adsttc.com/media/images/5bf2/16a3/08a5/e515/4e00/018b/medium_jpg/feature_image.jpg?1542592134",
    },
    {
        id: 2,
        name: 'MeetUp',
        location: 'Vancouver',
        date: 'October 2, 2020',
        premium: false,
        image: "https://images.adsttc.com/media/images/5bf2/16a3/08a5/e515/4e00/018b/medium_jpg/feature_image.jpg?1542592134",
    },
    {
        id: 3,
        name: 'Leap',
        location: 'Toronto',
        date: 'October 4, 2020',
        premium: false,
        image: "https://images.adsttc.com/media/images/5bf2/16a3/08a5/e515/4e00/018b/medium_jpg/feature_image.jpg?1542592134",
    },
    {
        id: 4,
        name: 'Recruiting Mission',
        location: 'São Paulo',
        date: 'October 6, 2020',
        premium: false,
        image: "https://images.adsttc.com/media/images/5bf2/16a3/08a5/e515/4e00/018b/medium_jpg/feature_image.jpg?1542592134",
    },
    {
        id: 5,
        name: 'Vanhackathon',
        location: 'Ottawa',
        date: 'October 8, 2020',
        premium: false,
        image: "https://images.adsttc.com/media/images/5bf2/16a3/08a5/e515/4e00/018b/medium_jpg/feature_image.jpg?1542592134",
    },
];

const applied_events = [0, 3];

const toggleMenu = () => {
    const menu = document.querySelector(".nav-links");
    const editorial = document.querySelector("body > .editorial");

    menu.classList.toggle("nav-active");
    menu.style.display = "flex";

    if (editorial.style.display == "none") {
        editorial.style.displa = "none";
    } else {
        editorial.style.display = "block";
    }
}

const moveToEvents = () => {
    //window.location.href = "#events";
    let destination = document.querySelector("#events"); 
    destination.scrollIntoView({ 
        behavior: 'smooth' 
    });
}

const toggleModal = eventId => {
    const modal = document.querySelector(".modal");

    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
    }

    const event = events.filter(event => event.id == eventId)[0];
    createModal(event);
}

const createCard = event => {
    const cards = document.querySelector(".cards");

    let premium_span = "";
    if (event.premium) {
        premium_span = `
            <span>
                <p>This event is only for premium members</p>
            </span>
        `;
    } 

    const applied = applied_events.includes(event.id);

    const card = `
        <div class="card ${event.premium ? "card-premium" : ""} ${applied ? "card-applied" : ""}">
            <div class="card-image">
                <img src="${event.image}">
            </div>
            <div class="card-info">
                <h2>${event.name}</h2>
                <span>
                    <i class="fas fa-map-marker-alt"></i>
                    <p>${event.location}</p>
                </span>
                <span>
                    <i class="fas fa-calendar-check"></i>
                    <p>${event.date}</p>
                </span>
                ${premium_span}
            </div>
            <div class="card-button">
                <button onclick="toggleModal('${event.id}')">${applied ? "Already applied." : "See more details..."}</button>
            </div>
        </div>
    `;

    cards.innerHTML += card;
}

const createModal = event => {
    const modal = document.querySelector('.modal-content');

    const applied = applied_events.includes(event.id);

    const content = `
        <span class="modal-top">
            <h1>${event.name}</h1>
            <div class="modal-close" onclick="toggleModal()">&times;</div>
        </span>

        <span class="modal-about">
            <h2>About the event.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat pharetra ullamcorper. 
                Vestibulum ut tincidunt arcu. Etiam et lectus nunc. Sed ut felis nec nibh dapibus euismod. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
        </span>

        <span class="modal-apply ${applied ? "modal-applied" : ""}">
            <h2>More informations.</h2>
            <span>
                <i class="fas fa-map-marker-alt"></i>
                <p>${event.location}</p>
            </span>
            <span>
                <i class="fas fa-calendar-check"></i>
                <p>${event.date}</p>
            </span>
            <span>
                    <i class="fas fa-hand-spock"></i>
                    <p>${event.premium ? "You need to be a premium member to apply to this event." : "You can apply right now!"}</p>
            </span>
            <button onclick="applyToEvent('${event.id}')">${applied ? "Already applied." : "Apply now"}</button>
        </span>
    `;

    modal.innerHTML = content;
}

window.onload = () => {
    events.map(createCard);
}