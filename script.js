// Mobile navigation toggle
const toggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav ul");
if (toggle && navList) {
  toggle.addEventListener("click", () => {
    const open = navList.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Menu category tabs
const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".menu-section");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    const filter = tab.dataset.filter;
    sections.forEach((s) => {
      s.style.display = filter === "all" || s.dataset.category === filter ? "block" : "none";
    });
  });
});

// Contact form validation
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    const setError = (id, msg) => {
      document.getElementById(id + "-error").textContent = msg;
      if (msg) valid = false;
    };
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    setError("name", name ? "" : "Please enter your name.");
    setError("email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Please enter a valid email.");
    setError("message", message.length >= 10 ? "" : "Please write at least 10 characters.");

    if (valid) {
      form.reset();
      document.getElementById("success").style.display = "block";
    }
  });
}
