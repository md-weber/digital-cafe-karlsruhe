document.addEventListener("DOMContentLoaded", function () {
  // Find all spoiler blocks
  var spoilers = document.querySelectorAll(".spoiler_block");

  spoilers.forEach(function (spoiler) {
    var showButton = spoiler.querySelector(".spoiler_block_show");
    var hideButton = spoiler.querySelector(".spoiler_block_hide");
    var content = spoiler.querySelector(".spoiler_block_content");

    showButton.addEventListener("click", function (e) {
      content.classList.add("show");
      showButton.style.display = "none";
      hideButton.style.display = "inline";
      // Update ARIA attributes if used
    });
  });
});
