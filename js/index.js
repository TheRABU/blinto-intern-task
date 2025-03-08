const slider_images = [
  "../images/slider/right-side-img1.png",
  "../images/slider/right-side-img2.jpg",
  "../images/slider/right-side-img3.jpg",
];

const changeTab = (index) => {
  document.getElementById("tab-image").src = slider_images[index];
  //remove avtive from the node
  document
    .querySelectorAll(".tab-item")
    .forEach((tab) => tab.classList.remove("active"));
  // add active
  document.querySelectorAll(".tab-item")[index].classList.add("active");
};

window.changeTab = changeTab;

/// TESTIMONIAL LOAD MORE BUTTON

const loadMore = () => {
  document.querySelectorAll(".testimonial.hidden").forEach((testimonial) => {
    testimonial.classList.remove("hidden");
  });

  document.querySelector(".load-more-btn").style.display = "none";
};

// FAQ Toggle

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    item.querySelector(".faq-question").addEventListener("click", function () {
      item.classList.toggle("active");
    });
  });
});

// Footer toogle

// document.addEventListener("DOMContentLoaded", function () {
//   const footerArrow = document.querySelector(".footer-arrow button");
//   const lowerFooter = document.querySelector(".lower-footer");

//   footerArrow.addEventListener("click", function () {
//     lowerFooter.classList.toggle("collapsed");
//   });
// });

// NAV_MENU

const toggleMobileNav = () => {
  const mobileLinks = document.getElementById("mobile-links");
  mobileLinks.classList.toggle("visible");
};
