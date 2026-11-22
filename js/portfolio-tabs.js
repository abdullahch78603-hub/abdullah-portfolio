// Tab switcher for the Portfolio section
// (Social Media Content / Video Editing / AI Photography / Case Studies)
document.addEventListener("DOMContentLoaded", function () {
  var tabs = document.querySelectorAll(".portfolio-tab");
  var panels = {
    "social-media-content": document.getElementById("panel-social-media-content"),
    "video-editing": document.getElementById("panel-video-editing"),
    "ai-photography": document.getElementById("panel-ai-photography"),
    "case-studies": document.getElementById("panel-case-studies"),
  };

  function activateTab(target) {
    tabs.forEach(function (t) {
      t.classList.toggle("active", t.getAttribute("data-portfolio-tab") === target);
    });

    Object.keys(panels).forEach(function (key) {
      if (!panels[key]) return;
      panels[key].hidden = key !== target;
    });
  }

  // Tab buttons
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      activateTab(tab.getAttribute("data-portfolio-tab"));
    });
  });

  // Navbar links (data-open-tab="case-studies") open the matching tab
  document.querySelectorAll("[data-open-tab]").forEach(function (link) {
    link.addEventListener("click", function () {
      activateTab(link.getAttribute("data-open-tab"));
    });
  });
});
