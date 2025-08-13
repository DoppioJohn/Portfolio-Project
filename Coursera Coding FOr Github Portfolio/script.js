// Toggle mobile menu visibility
const nav = document.querySelector("nav ul");
const hamburger = document.createElement("div");
hamburger.innerHTML = "☰";
hamburger.id = "hamburger";
hamburger.style.cursor = "pointer";
document.querySelector("header").appendChild(hamburger);

hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Filter Projects (Example: shows all or category-specific if extended)
function filterProjects(category) {
  const projects = document.querySelectorAll("#projects article");
  projects.forEach(project => {
    if (category === "all" || project.classList.contains(category)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}

// Lightbox effect for project images
const images = document.querySelectorAll("#projects img");
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    const imgElement = document.createElement("img");
    imgElement.src = img.src;
    lightbox.innerHTML = "";
    lightbox.appendChild(imgElement);
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

// Contact Form Validation
const form = document.query
