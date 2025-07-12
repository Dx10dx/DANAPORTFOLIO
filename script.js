// Smooth scroll for browsers that don’t support CSS scroll-behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Show scroll-to-top button
const scrollTopBtn = document.createElement("button");
scrollTopBtn.innerText = "↑";
scrollTopBtn.className = "scroll-top-btn";
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }

  // Reveal animation for project cards
  document.querySelectorAll(".project-card").forEach(card => {
    const top = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      card.classList.add("visible");
    }
  });
});

// Project button open link
function viewProject(url) {
  window.open(url, "_blank");
}
