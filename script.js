function toggleMenu() {
    const menu = document.querySelector("nav .two");
    const hamburger = document.querySelector(".hamburger");

    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
}

// Close menu when clicking outside
document.addEventListener("click", function (event) {
    const nav = document.querySelector("nav");
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".two");

    if (!nav.contains(event.target)) {
        hamburger.classList.remove("active");
        menu.classList.remove("active");
    }
});

// Close menu when clicking on menu items
document.querySelectorAll(".two a").forEach((link) => {
    link.addEventListener("click", function () {
        const hamburger = document.querySelector(".hamburger");
        const menu = document.querySelector(".two");

        hamburger.classList.remove("active");
        menu.classList.remove("active");
    });
});

// Image gallery functionality
const thumbnails = document.querySelectorAll(".ten ul li img");
const mainImage = document.querySelector(".nine img");

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
        mainImage.src = this.src;

        // Add active state to clicked thumbnail
        thumbnails.forEach((t) => (t.parentElement.style.opacity = "0.7"));
        this.parentElement.style.opacity = "1";
    });
});

// Set first thumbnail as active by default
if (thumbnails.length > 0) {
    thumbnails[0].parentElement.style.opacity = "1";
}
