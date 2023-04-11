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

// let myPara = document.querySelector("p");
// myPara.innerHTML = "<b>(Pakistan Zindabad)</b>"
// console.log(myPara)

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

let yourPara = document.querySelector("#your-para");
yourPara.innerHTML = "<b>Pakistan Zindabad</b>";
yourPara.style.backgroundColor = "#000";
yourPara.style.color = "#fff";
yourPara.style.width = "100%";



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