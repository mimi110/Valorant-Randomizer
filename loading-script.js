// Function to hide the loading section and show the actual content
function showContent() {
  var loadingSection = document.getElementById("loading-section");
  var contentSection = document.getElementById("content-section");

  loadingSection.style.display = "none";
  contentSection.style.display = "block";

  // Enable scrolling when content is shown
  document.body.style.overflow = "auto";
}

// Disable scrolling initially when the page is loading
document.body.style.overflow = "hidden";

// Wait for the page resources to finish loading
window.onload = function () {
  setTimeout(showContent, 2000);
};
