
const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

const listEl = document.querySelector("ul");

ingredients.forEach(ingredient => {
  let ingredientsListEl = document.createElement('li');
  ingredientsListEl.textContent = [`${ingredient}`];
  ingredientsListEl.classList = 'item';
  
  listEl.append(ingredientsListEl);
  console.log(ingredientsListEl);

})






