const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#header",
    start: "top",
    // end: "50%",
    scrub: true,
  },
});

tl.from("#header", { paddingTop: ".5em" });
tl.from(".go-back", { paddingTop: ".5em" });

// ============= animate the featured section
// const tl2 = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#featured",
//     toggleActions: "play pause resume restart",
//     // toggleActions: 'play pause resume reverse restart reset complete none',
//     start: "top 80%",
//   },
// });

// ============= animate the go back button
const goBack = document.querySelector(".services-nav");
goBack.addEventListener("click", () => {
  gsap.from(".go-back i", { opacity: 0, x: 10, duration: 1 });
});



// ================ animate the dropdown menu
document.addEventListener("click", (e) => {
  const dropdownNav = e.target.matches("[data-dropdown-btn]");

  if (!dropdownNav && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (dropdownNav) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown]").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});

// ============= close the dropdown menu by clicking by it's each link
const dropdownLinks = document.querySelectorAll(
  ".services-nav-container ul li a"
);
dropdownLinks.forEach((link) =>
  link.addEventListener("click", (e) => {
    const dropdownNav = document.querySelector("[data-dropdown]");
    dropdownNav.classList.toggle("active");
  })
);
