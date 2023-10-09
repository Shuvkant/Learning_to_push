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

//Coding Challenge #3
//There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
//Your tasks:
//1. Calculatetheaveragescoreforeachteam,usingthetestdatabelow
//2. Comparetheteam'saveragescorestodeterminethewinnerofthecompetition,
//and print it to the console. Don't forget that there can be a draw, so test for that
//as well (draw means they have the same average score)
//3. Bonus1:Includearequirementforaminimumscoreof100.Withthisrule,a
//team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
//4. Bonus2:Minimumscorealsoappliestoadraw!Soadrawonlyhappenswhen both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
// const dolpAverage=(96+108+89)/3;
// const koalaAverage=(88+91+110)/3;
// console.log(dolpAverage, koalaAverage);
// if(dolpAverage>koalaAverage&& dolpAverage>100){
//     console.log('dolpa is the winners.');
// }
// else if(koalaAverage>dolpAverage && koalaAverage>=100){
//     console.log('koala are the winners.');
// }
// else if(koalaAverage===dolpAverage && koalaAverage>=100 &&dolpAverage>=100 ){
//     console.log('both are winners🏆.');
// }
// else{
//     console.log('No one wins.');
// }

//Coding Challenge #4
//Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
//Your tasks:
//1. Calculatethetip,dependingonthebillvalue.Createavariablecalled'tip'for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
//2. Printastringtotheconsolecontainingthebillvalue,thetip,andthefinalvalue (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
//Test data:
//§ Data 1: Test for bill values 275, 40 and 430
// let  bill=400;
// let tip=(bill >=50 && bill <=300)? tip=0.15*bill: 0.2*bill;

// console.log(`The bill amount was ${bill}
// Tip amounnt was ${tip}
// and the total amount =${bill+tip}`);
