const numberOfCtegories = document.querySelector("#categories");
console.log("Number of categories:", numberOfCtegories.childElementCount);

const items = document.querySelectorAll(".item");

items.forEach((item) => {
  const itemsCategory = item.firstElementChild;
  console.log("Category:", itemsCategory.textContent);

  const itemElements = itemsCategory.nextElementSibling;
  console.log("Elements:", itemElements.childElementCount);
});
