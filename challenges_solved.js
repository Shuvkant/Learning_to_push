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
