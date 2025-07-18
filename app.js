document.addEventListener("DOMContentLoaded", function () {
  const projectCards = document.querySelectorAll(".project-card");
  const loadMoreBtn = document.querySelector(".load-more");

  let visibleCount = 3;

  // Show first 4 cards
  for (let i = 0; i < visibleCount; i++) {
    if (projectCards[i]) {
      projectCards[i].style.display = "block";
    }
  }

  // Hide others initially
  for (let i = visibleCount; i < projectCards.length; i++) {
    projectCards[i].style.display = "none";
  }

  loadMoreBtn.addEventListener("click", function () {
    for (let i = visibleCount; i < visibleCount + 2; i++) {
      if (projectCards[i]) {
        projectCards[i].style.display = "block";
      }
    }

    visibleCount += 2;

    if (visibleCount >= projectCards.length) {
      loadMoreBtn.style.display = "none";
    }
  });
});
