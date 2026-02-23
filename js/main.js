// Shared script for the whole site.
// Keep it simple for ICS3U: small enhancements are enough.

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Optional: highlight active nav link automatically (in case someone forgets)
const current = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".site-nav .nav-link").forEach(link => {
  const href = link.getAttribute("href");
  if (href === current) link.classList.add("active");
  else link.classList.remove("active");
});