console.log("TOR JS работает");
// Кнопка «Наверх»
const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
// Плавная прокрутка по меню
const menuLinks = document.querySelectorAll('a[href^="#"]');
menuLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});