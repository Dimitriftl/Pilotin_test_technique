const items = document.querySelectorAll(".slider");
const itemsLastIndex = items.length - 1;
const suivant = document.querySelector(".right");
const precedent = document.querySelector(".left");
const btns = document.querySelectorAll(".btn");
let count = 0;

// ARROW-BTN

function slideSuivant() {
  items[count].classList.remove("active");
  btns[count].classList.remove("active");

  if (count < itemsLastIndex) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add("active");
  btns[count].classList.add("active");
}
suivant.addEventListener("click", slideSuivant);

function slidePrecedent() {
  items[count].classList.remove("active");
  btns[count].classList.remove("active");

  if (count > 0) {
    count--;
  } else {
    count = itemsLastIndex;
  }

  btns[count].classList.add("active");
  items[count].classList.add("active");
}
precedent.addEventListener("click", slidePrecedent);

// INPUT

const manualNav = (manual) => {
  items.forEach((slider) => {
    slider.classList.remove("active");

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  });

  items[manual].classList.add("active");
  btns[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});
