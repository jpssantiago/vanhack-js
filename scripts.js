const toggleMenu = () => {
    const menu = document.querySelector(".nav-links");
    
    
    menu.classList.toggle("nav-active");
    menu.style.display = "flex";
}

const moveToEvents = () => {
    window.location.href = "#events";
}