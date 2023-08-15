export default function updateCurrentYear() {
    // Get the current year and insert it into the HTML element
    document.getElementById("current-year").textContent = new Date().getFullYear();
  }