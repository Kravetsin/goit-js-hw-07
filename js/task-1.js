const category = document.getElementById("categories");
const list = category.querySelectorAll(".item");

console.log(`Number of categories: ${list.length}`);
const getList = (list) => {
  return list.forEach((list) => {
    console.log(`Category: ${list.querySelector("h2").textContent}`);
    console.log(`Elements: ${list.querySelectorAll("li").length}`);
  });
};

getList(list);
