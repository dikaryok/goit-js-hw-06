const categories = document.querySelectorAll(".item");
console.log("Number of categories: ", categories.length);
categories.forEach((element) => {
  //   let category = element.firstElementChild.textContent;
  //   let amountOfElements = element.lastElementChild.children.length;
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
