const events = [
    {
        name: 'Webinar',
        location: 'Online',
        date: 'September 24, 2020',
        premium: false,
        image: "https://images.adsttc.com/media/images/5bf2/16a3/08a5/e515/4e00/018b/medium_jpg/feature_image.jpg?1542592134",
    },
    {
        name: 'Premium-only Webinar',
        location: 'Online',
        date: 'September 26, 2020',
        premium: true,
        image: "https://images.adsttc.com/media/images/5bf2/16a3/08a5/e515/4e00/018b/medium_jpg/feature_image.jpg?1542592134",
    },
    {
        name: 'MeetUp',
        location: 'Vancouver',
        date: 'October 2, 2020',
        premium: false,
        image: "https://images.adsttc.com/media/images/5bf2/16a3/08a5/e515/4e00/018b/medium_jpg/feature_image.jpg?1542592134",
    },
    {
        name: 'Leap',
        location: 'Toronto',
        date: 'October 4, 2020',
        premium: false,
        image: "https://images.adsttc.com/media/images/5bf2/16a3/08a5/e515/4e00/018b/medium_jpg/feature_image.jpg?1542592134",
    },
    {
        name: 'Recruiting Mission',
        location: 'São Paulo',
        date: 'October 6, 2020',
        premium: false,
        image: "https://images.adsttc.com/media/images/5bf2/16a3/08a5/e515/4e00/018b/medium_jpg/feature_image.jpg?1542592134",
    },
    {
        name: 'Vanhackathon',
        location: 'Ottawa',
        date: 'October 8, 2020',
        premium: false,
        image: "https://images.adsttc.com/media/images/5bf2/16a3/08a5/e515/4e00/018b/medium_jpg/feature_image.jpg?1542592134",
    },
];

const createCard = event => {
    const cards = document.querySelector(".cards");

    let premium_span = "";
    if (event.premium) {
        premium_span = `
            <span>
                <i class="fas fa-hand-peace"></i>
                <p>This event is only for premium members</p>
            </span>
        `;
    } 

    const card = `
        <div class="card ${event.premium ? "card-premium" : ""}">
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
                <button>See more details...</button>
            </div>
        </div>
    `;

    cards.innerHTML += card;
}

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

const toggleModal = () => {
    modal.style.display = "block";
}

window.onload = () => {
    events.map(createCard);
}