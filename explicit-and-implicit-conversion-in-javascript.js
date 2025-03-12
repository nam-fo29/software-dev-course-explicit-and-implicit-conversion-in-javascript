/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result); // This code is fine as is. Implicit converstion changes the "5" string into a number and the equation can be solved.

let isValid = (false); // Removed "" from false as any non empty string is truthy. Also removed the Boolean conversion as it is redundant after removing the "". False is always falsy. This makes the "if" false as it is supposed to be
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5; // Added the Number() conversion to change "25" from a string to a number. This allows the console.log to complete the addition equation.
console.log("Total Age: " + totalAge);

let area = "2" * 4;
console.log("The area of the board is " + area); // Multiplication is safe to use with implicit conversion. The "2" is a string but it converted into a number in order to complete the console.log equation.

let length = "Seventy";
let width = Number(length);
console.log(width); // The Number() explicit converion is used to change the value of length from a string and into a number. However, "Seventy" is not a number, so the console.log outputs NaN.