// const myStr = "Shuvkant Chaudhary " + "Phanait."; // Change this line
// console.log(myStr);
// let firstName="Shuvkant";
// let lastName= "Chaudhary Phanait";
// let fullName="firstName " + "lastName" ;
// console.log(fullName);

// const Ram="Shyam";
// console.log(Ram.length);

// Setup
// let firstLetterOfLastName = "";
// const lastName = "Movelace";

// Only change code below this line
// firstLetterOfLastName = lastName[0]; // Change this line
// console.log(firstLetterOfLastName);

// const firstName="ShuvkanT";
// const firstLetterOfName=firstName[0];
// const lastLetterOfName=firstName[firstName.length-1];
// console.log(firstName.length);
// console.log(firstLetterOfName);
// console.log(lastLetterOfName);

/*practice*/
// let firstLetterOfFirstName="";
// let lastLetterOfLastName="";
// const firstName="Shuvkant";
// const lastName="Phanait";
// firstLetterOfFirstName=firstName[0];
// lastLetterOfLastName=lastName[0];
// let sum="";
// sum=firstLetterOfFirstName + "+" + lastLetterOfLastName;
// console.log(sum);
// console.log(firstLetterOfFirstName);
// console.log(lastLetterOfLastName);

// let myStr="Bob";
// myStr[0]="j";
// console.log(myStr[0]);

// Find out the nth character of the given letter
// let nameOfProvince ="Madhesh";
// fourthLetterOfProvince=nameOfProvince[3];
// console.log(fourthLetterOfProvince);

//Finding the last character of the given word
// let firstName="Shuvkant";
// lastCharacterOfFirstname=firstName[firstName.length-1];
// console.log(lastCharacterOfFirstname);

//Finding the nth last number
// For example finding the fourth last letter of the word
// let Word="Emancipate";
// fourthLastLetter=Word[Word.length- 4];
// console.log(fourthLastLetter);

//Nested Array
// let myArray=[["Physics", 100],["Chemistry", 200],["Mathematics", 500]];

//Accessing Data from the array
// const marks=[50, 70, 90, 78, 80];
// const Physics=marks[0];
// const Chemistry=marks[1];
// const Mathematics=marks[2];
// const Electronis=marks[3];
// const Electrical=marks[4];
// console.log(Physics, Chemistry, Mathematics, Electrical, Electronis);

// Changing the data of the array
// const Attendance=[12, 24, 67];
// Attendance[2]=15;
// const change=Attendance[2];
// console.log(change);

//Pushing the numbers, variables in an array
// const arrFirst=[1, 2, 3, 4, 5];
// const arrSecond=[["Ram", 1], ["Shyam", 2]];
// arrFirst.push(6);
// arrSecond.push(["Sita", 3]);
// console.log(arrFirst[5]);
// console.log(arrSecond[2]);

//Popping of the value
// const threeArr = [1, 4, 6];
// const oneDown = threeArr.pop();
// console.log(oneDown);
// console.log(threeArr);

// Setup
// const myArray = [["John", 23], ["cat", 2]];
// const removedFromMyArray=myArray.pop();
// console.log(myArray);
// console.log(removedFromMyArray);

// Only change code below this line

// changing the first element of an array
// const groccery=[["mango", 20],["grapes", 50],["apples", 60]];
// groccery.shift();
// groccery.unshift("Hello_freeCodeCamp");
// console.log(groccery);

//Making function and calling it

// function sumOfMarks(sub1, sub2){
//     console.log(sub1+sub2);
// }

// sumOfMarks(2,4);
// sumOfMarks(6,7);
// sumOfMarks(9,8);

// returning the value into  the function
// function divideNumberByTwo(num){
//     return num/2;
// }
// const answer=divideNumberByTwo(7);
// console.log(answer);

//Global Vs Local Scope in Functions
// const motte="FAt";
// function myVar(){
//     const motte="Thick";
//     return motte;
// console.log(motte);
// }
// console.log(motte);

// Setup
// let sum = 0;

// function addThree(sum) {
//   sum = sum + 3;
//   console.log(sum);
// }

// // Only change code below this line

// function addFive(sum){
//   sum=sum+5;
//   console.log(sum);
// }
// // Only change code above this line

// addThree(5);
// addFive(11);

//function
// function nextInLine(arr, item) {
//     // Only change code below this line
//       arr.push(item);
//     return arr.shift();
//   }
//     // Only change code above this line

//   // Setup
//   let testArr = [1, 2, 3, 4, 5];

//   // Display code
//   console.log("Before: " + JSON.stringify(testArr));
//   console.log(nextInLine(testArr, 6));
//   console.log("After: " + JSON.stringify(testArr));

// if statement

// function test(condition){
//     if(condition){
//         return "It was true";
//     }
//     return "It was false";
// }
// const man=test(false);
// const  woman=test(true);
// console.log(woman);
// console.log(man);

//switch statement

// let fruit="apple";
let fruit="orange";
switch (fruit) {
    case "apple":
      console.log("The fruit is an apple");
      break;
    case "orange":
      console.log("The fruit is an orange");
      break;
  }
//   switch(apple)