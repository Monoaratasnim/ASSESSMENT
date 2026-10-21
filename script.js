
const button = document.getElementById("show-more-btn");
const moreInfo = document.getElementById("more-info");

button.addEventListener("click", function () {
  if (moreInfo.classList.contains("hidden")) {
    moreInfo.classList.remove("hidden");
    button.textContent = "Show Less";
  } else {
    moreInfo.classList.add("hidden");
    button.textContent = "Show More";
  }
});
