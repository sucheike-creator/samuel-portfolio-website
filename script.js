/* =========================================
   SAMUEL — PERSONAL PORTFOLIO
   WEBSITE INTERACTIONS
========================================= */

/* =========================================
   1. MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Close the mobile navigation menu.
function closeNavigation() {
  if (!menuToggle || !navMenu) return;

  navMenu.classList.remove("active");

  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
}

// Open and close the mobile navigation menu.
if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );
  });

  // Close the menu when a navigation link is selected.
  navLinks.forEach(function (link) {
    link.addEventListener("click", closeNavigation);
  });

  // Close the menu when the user clicks outside it.
  document.addEventListener("click", function (event) {
    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
      closeNavigation();
    }
  });

  // Close the menu when the screen becomes larger.
  window.addEventListener("resize", function () {
    if (window.innerWidth > 700) {
      closeNavigation();
    }
  });
}

/* =========================================
   2. CURRENT YEAR IN FOOTER
========================================= */

// Keep the footer year up to date.
const footerText = document.querySelector(".footer-inner p");

if (footerText) {
  footerText.textContent = `© ${new Date().getFullYear()} Samuel. Built with purpose.`;
}

/* =========================================
   3. PROJECT IMAGE FALLBACK
========================================= */

// Show a placeholder if a project screenshot is missing.
const projectImages = document.querySelectorAll(".project-image");

projectImages.forEach(function (image) {
  image.addEventListener("error", function () {
    image.style.display = "none";

    const imageContainer = image.closest(".project-image-link");

    if (imageContainer) {
      imageContainer.style.minHeight = "220px";
      imageContainer.style.display = "grid";
      imageContainer.style.placeItems = "center";
      imageContainer.style.color = "#65a6ff";
      imageContainer.style.fontSize = "13px";
      imageContainer.style.fontWeight = "600";
      imageContainer.textContent = "PROJECT PREVIEW";
    }
  });
});
