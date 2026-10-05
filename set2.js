// TOP BUTTON

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ACTIVE PAGE

const currentPage = window.location.pathname.split("/").pop() || "index.html";

const navLinks = document.querySelectorAll("header nav ul li a");

navLinks.forEach(function (link) {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }

});


// PROJECT COUNTER

const projectCount = document.getElementById("projectCount");
const projectRows = document.querySelectorAll(".sec2context table tr");

if (projectCount && projectRows.length > 0) {

    const totalProjects = projectRows.length - 1;

    projectCount.textContent = "Total Projects: " + totalProjects;

}


// CERTIFICATE COUNTER

const certificateCount = document.getElementById("certificateCount");
const certificateRows = document.querySelectorAll(".sec2context table tr");

if (certificateCount && certificateRows.length > 0) {

    const totalCertificates = certificateRows.length - 1;

    certificateCount.textContent = "Total Certificates: " + totalCertificates;

}


// CONTACT LINK EFFECT

const contactLinks = document.querySelectorAll(".contact-list li a");

contactLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        link.style.opacity = "0.5";

        setTimeout(function () {
            link.style.opacity = "1";
        }, 300);

    });

});


// FOOTER YEAR

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// HOME / END KEYS

document.addEventListener("keydown", function (event) {

    if (event.key === "Home") {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

    if (event.key === "End") {

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });

    }

});


// SCROLL PROGRESS BAR

const progressBar = document.createElement("div");

progressBar.id = "scrollProgress";

document.body.appendChild(progressBar);

window.addEventListener("scroll", function () {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    if (documentHeight > 0) {

        const scrollPercent = (scrollTop / documentHeight) * 100;

        progressBar.style.width = scrollPercent + "%";

    }

});


// PAGE TRANSITION

const pageLinks = document.querySelectorAll("header nav ul li a");

pageLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const target = link.getAttribute("href");

        if (!target || target === "#") {
            return;
        }

        event.preventDefault();

        document.body.classList.add("page-exit");

        setTimeout(function () {
            window.location.href = target;
        }, 300);

    });

});


// BUTTON CLICK EFFECT

const buttons = document.querySelectorAll(
    "header nav ul li a, .cert-btn, #topBtn"
);

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.style.transform = "scale(0.95)";

        setTimeout(function () {

            button.style.transform = "";

        }, 150);

    });

});


// TYPING EFFECT

const homeTitle = document.querySelector(".sec1 h1");

if (homeTitle && document.body.classList.contains("body1")) {

    const originalText = homeTitle.textContent;

    homeTitle.textContent = "";

    let index = 0;

    function typeText() {

        if (index < originalText.length) {

            homeTitle.textContent += originalText.charAt(index);

            index++;

            setTimeout(typeText, 70);

        }

    }

    typeText();

}


// SCROLL REVEAL

const revealElements = document.querySelectorAll(
    ".sec1context, .sec2context"
);

function revealOnScroll() {

    revealElements.forEach(function (element) {

        const elementPosition =
            element.getBoundingClientRect().top;

        const screenPosition =
            window.innerHeight - 100;

        if (elementPosition < screenPosition) {
            element.classList.add("reveal-visible");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// TABLE ROW ANIMATION

const tableRows = document.querySelectorAll(
    ".sec2context table tr"
);

tableRows.forEach(function (row, index) {

    if (index === 0) {
        return;
    }

    row.style.opacity = "0";
    row.style.transform = "translateY(10px)";

    setTimeout(function () {

        row.style.transition =
            "opacity 0.5s ease, transform 0.5s ease";

        row.style.opacity = "1";
        row.style.transform = "translateY(0)";

    }, index * 150);

});


// THEME TOGGLE

const themeButton = document.createElement("button");

themeButton.id = "themeBtn";
themeButton.textContent = "Theme";

document.body.appendChild(themeButton);

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

});