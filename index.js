document.addEventListener("DOMContentLoaded", function() {
    const navbarItems = document.querySelectorAll('.navbar .nav-item');

    navbarItems.forEach(item => {
        item.addEventListener('click', function() {
            navbarItems.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 10) { 
        navbar.classList.add("sticky");
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("scrolled");
    }
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

window.onscroll = function() {showScrollButton()};

function showScrollButton() {
    let scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

document.getElementById("scrollToTopBtn").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const navToggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.navbar');

navToggle.addEventListener('click', () => {
    navbar.classList.toggle('open');
});

