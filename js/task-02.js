const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredients = document.querySelector("#ingredients");
const elements = ingredients.map((option) => {
  const elementLi = document.createElement("li");
  elementLi.textContent = option;
  elementLi.classList.add(".item");
  return elementLi;
});
console.log("elements -> elements", elements);

listOfIngredients.append(...elements);
