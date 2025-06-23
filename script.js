document.getElementById("enrollForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const msg = document.getElementById("formMessage");

  if (!name || !email || !phone) {
    msg.textContent = "⚠️ Please complete all fields!";
    msg.style.color = "#ff4f4f";
  } else if (!email.includes("@")) {
    msg.textContent = "⚠️ Invalid email format.";
    msg.style.color = "#ff4f4f";
  } else {
    msg.textContent = "✅ You're successfully enrolled!";
    msg.style.color = "#0f0";
    this.reset();
  }
});
const revealElements = document.querySelectorAll('.course-card, .testimonial, .form-container');

window.addEventListener('scroll', () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});
