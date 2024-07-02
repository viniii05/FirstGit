const subHeading = document.createElement("h3");
const subText = document.createTextNode(
  "Buy high quality organic fruits online"
);

subHeading.appendChild(subText);

const mainHeading = document.querySelector("#main-heading");
mainHeading.insertAdjacentElement("afterend", subHeading);
subHeading.style.fontStyle = "italic";

//for para
const para = document.createElement("p");
const paraText = document.createTextNode("Total fruits: 4");
para.id = "fruits-total";

const basketHeading = document.getElementById("basket-heading");
basketHeading.insertAdjacentElement("beforebegin", para);
