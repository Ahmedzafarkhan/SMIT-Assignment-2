// -------------Q1-------------------


// function print(abc){
// return function (def) {
//   console.log(abc+def)
// }
// }
// let innerFunction = print(2);
// let innerFunction2 =print(3);
// innerFunction(5)
// innerFunction2(5)


// -------------Q2----------------


// function searchArray(array, value) {
//   if (array.length === 0) {
//       return false;
//   }

//   if (array[0] === value) {
//       return true;
//   }

//   return searchArray(array.slice(1), value);
// }
// const arr = [1, 2, 3, 4, 5];
// console.log(searchArray(arr, 9));
// // console.log(searchArray(arr, 2));


// ----------------------------------Q3-----------------------------

function addParagraph(text) {
  const p = document.createElement("p");
  p.textContent = text;
  document.body.appendChild(p);
}
const btnAddParagraph = document.querySelector('#btnAddParagraph');

btnAddParagraph.addEventListener("click", function () {
  addParagraph("New Paragraph Added! -----> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia, risus nec malesuada mattis, nisi nisl finibus mauris, sed pulvinar turpis leo quis purus. Aliquam a vulputate sapien, non porta justo. Suspendisse hendrerit vulputate risus tristique scelerisque. Vestibulum sed erat purus. Nunc imperdiet congue ante, ac tempus odio bibendum at. Suspendisse euismod mattis orci vel malesuada. Curabitur quis dolor vel ante ultrices bibendum sit amet ac risus. In rhoncus erat et lorem faucibus, at dapibus quam viverra. In feugiat a turpis vel viverra. Ut ut lacus ornare, ornare velit nec, pellentesque nisi. In eget iaculis risus. Suspendisse sed mi velit. Suspendisse purus magna, sodales in varius in, placerat eget dolor. Curabitur malesuada cursus orci, ac feugiat risus volutpat eget. Mauris tristique tortor ut blandit iaculis. ");
});


// -------------------------------------------Q4-----------------------------------

// function addListItem(text) {
//   const li = document.createElement("li");
//   li.textContent = text;
//   const ul = document.querySelector("#listFruits");
//   ul.appendChild(li);
// }
// const addFruit = document.querySelector('#addFruit');

// addFruit.addEventListener("click", function () {
//   const fruit = document.querySelector("#txtFruit").value;
//   addListItem(fruit);
//   document.querySelector("#txtFruit").value = "";
//   document.querySelector("#txtFruit").focus();
// });

// / ------------------------------Q5-----------------------

// let yourPara = document.querySelector("#your-para");
// yourPara.innerHTML = "<b>Pakistan Zindabad</b>";
// yourPara.style.backgroundColor = "#000";
// yourPara.style.color = "#fff";
// yourPara.style.width = "100%";



// /------------------------ Task 06 ------------------------/


// function saveToLocalStorage(key, value) {
//     localStorage.setItem(key, JSON.stringify(value));
// }
// const person = { name: "xyz", age: 33 };
// saveToLocalStorage("person", person);



// // /------------------------ Task 07 ------------------------/


// function getFromLocalStorage(key) {
//     const value = localStorage.getItem(key);
//     return JSON.parse(value);
// }
// const person2 = getFromLocalStorage("person");
// console.log(person2); 



// // ------------------------ Task 08 ------------------------


// function saveObjectToLocalStorage(obj) {
//     for (const [key, value] of Object.entries(obj)) {
//         localStorage.setItem(key, JSON.stringify(value));
//     }

//     const newObj = {};

//     for (const key of Object.keys(obj)) {
//         newObj[key] = JSON.parse(localStorage.getItem(key));
//     }

//     return newObj;
// }
// const person3 = { name: "abc", age: 33};
// saveObjectToLocalStorage(person3);
// const newPerson = saveObjectToLocalStorage(person3);
// console.log(newPerson);