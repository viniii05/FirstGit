const subHeading = document.querySelector("#basket-heading");

subHeading.style.color = "brown";

const fruit = document.querySelectorAll(".fruit");

for (let i = 0; i < fruit.length; i++) {
  if (i % 2 != 0) {
    fruit[i].style.backgroundColor = "brown";
    fruit[i].style.color = "white";
  }
}
