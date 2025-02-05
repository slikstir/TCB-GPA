
document.addEventListener("DOMContentLoaded", function() {
  const storedName = sessionStorage.getItem("userName");
  const storedEmail = sessionStorage.getItem("userEmail");

  if (storedName && storedEmail) {
      document.getElementById("user-name").textContent = storedName;
      document.getElementById("user-email").textContent = storedEmail;
      document.getElementById("welcome-container").classList.remove("d-none");
      document.getElementById("form-container").classList.add("d-none");
  }
});

document.getElementById("user-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name && email) {
      sessionStorage.setItem("userName", name);
      sessionStorage.setItem("userEmail", email);
      location.reload();
  }
});

function logout() {
  sessionStorage.removeItem("userName");
  sessionStorage.removeItem("userEmail");
  location.reload();
}