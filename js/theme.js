const btn = document.querySelector(".js-btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const BTN_ICON = document.querySelector('.js-icon');
const SUN_ICON = "../assets/icon-sun.svg";
const MOON_ICON = "../assets/icon-moon.svg"

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.body.classList.toggle("dark-theme");
    // let text_light = document.createTextNode("light")
    // btn.appendChild(text_light);
    // BTN_ICON.setAttribute('src', SUN_ICON)
} else if (currentTheme == "light") {
    document.body.classList.toggle("light-theme");
    let text_dark = document.createTextNode("dark")
    btn.appendChild(text_dark);
    BTN_ICON.setAttribute('src', MOON_ICON)
}

btn.addEventListener("click", function () {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");

        var theme = document.body.classList.contains("light-theme")
            ? "light"
            : "dark";
    } else {
        document.body.classList.toggle("dark-theme");

        var theme = document.body.classList.contains("dark-theme")
            ? "dark"
            : "light";
    }
    localStorage.setItem("theme", theme);
});