// variables
const burgerMenu = document.querySelector('.nav_bars');
const menuBar = document.querySelector('.nav_links ul');
const nav_links = document.querySelectorAll('.nav_links ul li');
const main_header = document.querySelector(".mainsection h1");
const main_overlaydiv = document.querySelector(".main_overlay");
const second_section = document.querySelector(".secondSection");
// measurements
// to get styles from css file
const initial_spacing = parseFloat(window.getComputedStyle(main_header).getPropertyValue("letter-spacing"));
const initial_overlay_width = parseFloat(window.getComputedStyle(main_overlaydiv).getPropertyValue("width"))

console.log(initial_overlay_width);



// menu on off

burgerMenu.addEventListener('click', () => {
    menuBar.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    nav_links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `linkFade 0.5s ease-in-out forwards ${index / 7 + 0.4}s`;
        }

    });
});


// on scroll event
window.addEventListener("scroll", () => {
    let scroll_amount = window.pageYOffset;

    // console.log(second_section.offsetTop);
    if (scroll_amount > initial_spacing) {

        main_header.style.letterSpacing = `${scroll_amount}px`;
        main_header.style.marginLeft = `${scroll_amount}px`;

    } else {
        main_header.style.letterSpacing = `${initial_spacing}px`;
        main_header.style.marginLeft = `0`;
    }

    if (scroll_amount > initial_overlay_width) {
        main_overlaydiv.style.width = `${(scroll_amount)}px`;

    } else {
        main_overlaydiv.style.width = `${(initial_overlay_width)}px`;

    }
    second_section.style.opacity = `${(scroll_amount) / 800}`;


});
