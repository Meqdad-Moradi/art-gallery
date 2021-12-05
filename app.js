// showcase section ============
const toggleBtn = document.querySelector(".toggle-btn");
const nav = document.querySelector(".nav");
const navLinks = [...document.querySelectorAll(".nav-list li a")];
const header = document.querySelector("#header");

/// header section ============

// set active class to toggle btn
function toggleActive() {
  toggleBtn.classList.toggle("active");
}

function navToggle() {
  nav.classList.toggle("active");
}

// manipulate active class to nav links
function navLinksAcrive(e) {
  // remove active class from toggle btn on click
  if (toggleBtn.classList.contains("active")) {
    toggleBtn.classList.remove("active");
  }

  // remove active class from nav on click
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
  }
  navLinks.forEach((link) => link.classList.remove("active"));
  e.currentTarget.classList.add("active");
}

function stickyHeader() {
  const scroll = window.scrollY;

  header.style.transition = "all .3s ease-in-out";

  if (scroll > 0) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
}

// call the functions

toggleBtn.addEventListener("click", () => {
  toggleActive();
  navToggle();
});

navLinks.forEach((link) =>
  link.addEventListener("click", (e) => {
    navLinksAcrive(e);
  })
);

window.addEventListener("scroll", stickyHeader);

/// showcase slide section ============
const slides = [...document.querySelectorAll(".slide")];
const slideIndicator = document.querySelector("#slide-indicator");
let auto = true;
let interval;
let intervalTime = 5000;

// create slide indicator
function indicator() {
  slides.forEach((item) => {
    slideIndicator.innerHTML += `
        <li><span></span></li>`;
  });

  // select the li tag from slider indicator
  const lists = [...slideIndicator.querySelectorAll("li")];
  lists.forEach((li) =>
    li.addEventListener("click", (e) => {
      const current = e.currentTarget;
      const currentIndex = lists.findIndex((li) => li === current);

      lists.forEach((li) => li.classList.remove("active"));
      current.classList.add("active");

      slides.forEach((slide) => slide.classList.remove("active"));
      slides[currentIndex].classList.add("active");

      //   set back the auto slider
      if (auto) {
        clearInterval(interval);
        interval = setInterval(() => {
          slider();
          lists.forEach((li) => li.classList.remove("active"));
        }, intervalTime);
      }
    })
  );
}

function slider() {
  const activeSlide = document.querySelector(".slide.active");
  const nextSlide = activeSlide.nextElementSibling;

  activeSlide.classList.remove("active");

  //   check if the next slide exist
  if (nextSlide) {
    nextSlide.classList.add("active");
  } else {
    slides[0].classList.add("active");
  }
}

slider();

if (auto) {
  interval = setInterval(slider, intervalTime);
}

window.addEventListener("DOMContentLoaded", indicator);

/// about section ============

const frontImg = document.querySelector("#about-imgs .front");
const aboutImgs = [...document.querySelectorAll("#about-imgs img")];

aboutImgs.forEach((img) =>
  img.addEventListener("click", (e) => {
    const currentImg = e.currentTarget;
    const currentSrc = currentImg.src;

    currentImg.src = frontImg.src;
    frontImg.src = currentSrc;
  })
);
