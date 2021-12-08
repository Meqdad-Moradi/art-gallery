const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#header",
    start: "top",
    end: "50%",
    scrub: true,
  },
});

tl.from("#header", { paddingTop: ".5em" });
// tl.to(".services-nav-container", { top: "calc(70px - .5em)" });

// ============= animate the featured section
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#featured",
    toggleActions: "play pause resume restart",
    // toggleActions: 'play pause resume reverse restart reset complete none',
    start: "top 80%",
  },
});

// tl2.fromTo("#featured", { y: 60, opacity: 0 }, { y: 0, opacity: 1 });

// tl2.fromTo(
//   "#featured-img",
//   { opacity: 0, xPercent: 100 },
//   { opacity: 1, xPercent: 0, duration: 2 }
// );

// tl2.fromTo(
//   "#featured .main-title",
//   { opacity: 0, y: 30 },
//   { opacity: 1, y: 0, ease: "power1" },
//   "-=1"
// );

// tl2.fromTo(
//   "#featured .body-text",
//   { opacity: 0, y: 30 },
//   { opacity: 1, y: 0, ease: "power1" },
//   "-=.5"
// );

const featured = document.querySelector("#featured");
const featuredImg = document.querySelector("#featured-img");

window.addEventListener("scroll", animateFeatured);

function animateFeatured() {
  const top = featured.offsetTop;
  const bottom = top + featured.offsetHeight / 2;
  const scroll = window.pageYOffset + window.innerHeight;
  const featuredAppeared = scroll > bottom;
  const stillIn = window.pageYOffset < bottom;

  if (featuredAppeared && stillIn) {
    featured.classList.add("active");
  } else {
    featured.classList.remove("active");
  }
}
