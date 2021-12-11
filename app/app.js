// ============ showcase section
const toggleBtn = document.querySelector(".toggle-btn");
const nav = document.querySelector(".nav");
const navLinks = [...document.querySelectorAll(".nav-list li a")];
const header = document.querySelector("#header");

/// ============ header section

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

