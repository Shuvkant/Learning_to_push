//Coding Challenge #1
//Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
//BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
//Your tasks:
//1. StoreMark'sandJohn'smassandheightinvariables
//2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
//versions)
//3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
//whether Mark has a higher BMI than John.
//const MarksMass = 78;
//const MarksHeight = 1.69;
//const JohnMass = 92;
//const Johnheight = 1.95;
//function calculateBMI(mass, height) {
//  const bmi = mass / (height * height);
//  return bmi;
//}
//const MarksBMI = calculateBMI(MarksMass, MarksHeight);
//const JohnBMI = calculateBMI(JohnMass, Johnheight);
//console.log("MarksBMI= " + MarksBMI);
//console.log("JohnsBMI= " + JohnBMI);
//const markHigherBmi = JohnBMI > MarksBMI;
//console.log(markHigherBmi);

//Coding Challenge #2
//Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
//Your tasks:
//1. Printaniceoutputtotheconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
//2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
//Hint: Use an if/else statement 😉
//const MarksMass = 78;
//const MarksHeight = 1.69;
//const JohnMass = 92;
//const Johnheight = 1.95;
//function calculateBMI(mass, height) {
//  const bmi = mass / (height * height);
//  return bmi;
//}
//const MarksBMI = calculateBMI(MarksMass, MarksHeight);
//const JohnBMI = calculateBMI(JohnMass, Johnheight);
//console.log("MarksBMI= " + MarksBMI);
//console.log("JohnsBMI= " + JohnBMI);
//const markHigherBmi = JohnBMI > MarksBMI;
//if (markHigherBmi) {
//  console.log("John's BMI is higher than Mark's!");
//  console.log(`Joshn's BMI${JohnBMI} higher than makrsBMI${MarksBMI}.`);
//} else {
//  console.log("Mark's BMI is higher than John's!");
//  console.log(`Mark's BMI${MarksBMI} is higher than johnsbmi${JohnBMI}`);
//}

//This basically checks whether you elligile to drive or not.
//const age = 19;
//if (age >= 18) {
//  console.log("You can drive the car 🚗");
//} else {
//  console.log(
//    `sorry, you are not eligible. You need to wait ${18 - age} years to drive.`,
//  );
//}

//Finding maximum and minimum in array.
//const temperatures = [1, 2, 3, 4, 5, 2, 3, 5, 7];
//const length = temperatures.length;
//let biggest = temperatures[0];
//let smallest = temperatures[0];
//for (let i = 0; i <= length; i++) {
//  if (temperatures[i] >= biggest) {
//    biggest = temperatures[i];
//  }
//}
//for (let i = 0; i <= length; i++) {
//  if (temperatures[i] <= smallest) {
//    smallest = temperatures[i];
//  }
//}
//const diffBetweenSmallestBiggest = biggest - smallest;
//console.log(`Biggest temperature is ${biggest}`);
//console.log(`Smallest temperature is ${smallest}`);
//console.log(`Difference is ${diffBetweenSmallestBiggest}`);

//Use of dollar brackets
//const firstname = "Shuvkant";
//const job = "student";
//const birthyear = 2003;
//const message = `Hello I'm ${firstname} and i am currently
//a ${job} in 2023. I was born in ${birthyear}.`;
//console.log(message);
