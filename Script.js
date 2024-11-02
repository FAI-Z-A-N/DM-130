// Hamburger Menu Function
function hamburger() {
  var navLinks = document.getElementById("nav-links");
  var menuIcon = document.getElementById("icon");
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
    menuIcon.style.color = "#2a1f14";
  } else {
    navLinks.style.display = "block";
    menuIcon.style.color = "#f6eee4";
  }
}

// FAQ Functions
function ans1() {
  document.querySelector("#answer h2").style.display = "block";
  document.querySelector("#answer p").textContent = "Observe for a few minutes to see if a parent arrives. If in danger, bring to a rescue center.";
}
function ans2() {
  document.querySelector("#answer h2").style.display = "block";
  document.querySelector("#answer p").textContent = "Rabies can only be confirmed through a test. Contact us if you suspect rabies.";
}
function ans3() {
  document.querySelector("#answer h2").style.display = "block";
  document.querySelector("#answer p").textContent = "No, this is a myth. Parents will often retrieve the baby bird if left alone.";
}
function ans4() {
  document.querySelector("#answer h2").style.display = "block";
  document.querySelector("#answer p").textContent = "Volunteers are needed for animal care. Contact us to learn more about volunteering.";
}
