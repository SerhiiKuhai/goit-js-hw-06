const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
//------first option----
// const markup = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");
//list.innerHTML = markup;

// ------the second option-----
// const markup = ingredients.reduce(
//   (acc, ingredient) => acc + `<li class="item">${ingredient}</li>`,
//   ""
// );
// list.innerHTML = markup;

// -------the third option------

const markup = ingredients.map((ingredient) => {
  const heading = document.createElement("li");
  heading.textContent = `${ingredient}`;
  heading.classList.add("item");

  return heading;
});

list.append(...markup);
