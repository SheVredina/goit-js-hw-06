
const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

const listEl = document.querySelector("ul");

ingredients.forEach(ingredients => {
  let ingredientsListEl = document.createElement('li');
  ingredientsListEl.textContent = [`${ingredients}`];
  ingredientsListEl.classList = 'item';
  
  listEl.append(ingredientsListEl);
  console.log(ingredientsListEl);

})






