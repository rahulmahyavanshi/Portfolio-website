function toggleContent(contentId) {
  var content = document.getElementById(contentId);
  var box = content.parentElement;

  // Toggle the active class to show or hide content
  box.classList.toggle("active");
}
