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