// ============ animate the featured section with JS
const featured = document.querySelector("#featured");
const featuredImg = document.querySelector("#featured-img");

window.addEventListener("scroll", animateFeatured);

function animateFeatured() {
  const top = featured.offsetTop;
  const bottom = top + featured.offsetHeight / 3;
  const scroll = window.pageYOffset + window.innerHeight;
  const featuredAppeared = scroll > bottom;

  if (featuredAppeared) {
    featured.classList.add("active");
  } else {
    featured.classList.remove("active");
  }
}

// ============ showcase slide section

const slides = [...document.querySelectorAll(".slide")];
const slideIndicator = document.querySelector("#slide-indicator");
let auto = true;
let interval;
let intervalTime = 8000;

// create slide indicator
function indicator() {
  slides.forEach((item) => {
    slideIndicator.innerHTML += `
        <li><span></span></li>`;
  });

  // select the indicator li tag from slider indicator
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

if (auto) {
  interval = setInterval(slider, intervalTime);
}

window.addEventListener("DOMContentLoaded", indicator);

// ============ about section

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