
const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

const listEl = document.querySelector("ul");

const elementsArr = ingredients.map(ingredient => {
  let ingredientsListEl = document.createElement('li');
  ingredientsListEl.textContent = ingredient;
  ingredientsListEl.classList.add('item');
  return ingredientsListEl;
})

listEl.append(...elementsArr);
console.log(elementsArr);





