// Tab switcher for the Portfolio section
// (Social Media Content <-> Video Editing Work <-> AI Photography)
document.addEventListener("DOMContentLoaded", function () {
  var tabs = document.querySelectorAll(".portfolio-tab");
  var panels = {
    "social-media-content": document.getElementById("panel-social-media-content"),
    "video-editing": document.getElementById("panel-video-editing"),
    "ai-photography": document.getElementById("panel-ai-photography"),
  };

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var target = tab.getAttribute("data-portfolio-tab");

      tabs.forEach(function (t) {
        t.classList.toggle("active", t === tab);
      });

      Object.keys(panels).forEach(function (key) {
        if (!panels[key]) return;
        panels[key].hidden = key !== target;
      });
    });
  });
});
