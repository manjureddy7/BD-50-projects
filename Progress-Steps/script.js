const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

// Lets handle next

next.addEventListener("click", () => {
  // Increment curerntActive by 1
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

// Handle Prev

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    // check if index is < currentActive, it should have active class
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // Now get all circles that are active
  // based on this we will do blue color progress
  const actives = document.querySelectorAll(".active");
  // To update width of blue color progress bar we will do
  // active.length / cricles.length * 100
  const progressWidth = ((actives.length - 1) / (circles.length - 1)) * 100;
  progress.style.width = `${progressWidth}%`;

  // Diable / Enable prev & next
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
