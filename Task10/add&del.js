const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const fruitToAdd = document.getElementById("fruit-to-add");
  const newLi = document.createElement("li");

  newLi.innerHTML =
    fruitToAdd.value + '<button class="delete-btn"> x </button>';
  //   const newLiText = document.createTextNode(fruitToAdd.value);
  //   newLi.appendChild(newLiText);

  //   newLi.className = "fruit";
  //   const deleteBtn = document.createElement("button");
  //   const deleteBtnText = document.createTextNode("x");
  //   deleteBtn.appendChild(deleteBtnText);
  //   deleteBtn.className = "delete-btn";
  //   newLi.appendChild(deleteBtn);
  fruits.appendChild(newLi);
  //   console.log(newLi);
});

fruits.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const fruitToDelete = event.target.parentElement;
    fruits.removeChild(fruitToDelete);
  }
});

const li = document.getElementsByClassName("fruit");

const editBtn = document.createElement("button");
const textOfEdit = document.createTextNode("edit");
editBtn.appendChild(textOfEdit);
editBtn.className = "edit-btn";
console.log(editBtn);
// .appendChild(editBtn);
// li.innerHTML = '<button class="edit-btn"> edit </button>';
