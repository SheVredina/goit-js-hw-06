const itemEl = document.querySelectorAll('li.item').length;
console.log('Number of categories:', itemEl);

const items = document.querySelectorAll('li.item');
items.forEach((item) => {
let itemText = item.querySelector("h2").textContent;
let itemAmount = item.querySelectorAll("li").length;

  console.log('Category:', itemText);
  console.log('Elements:', itemAmount);
});

