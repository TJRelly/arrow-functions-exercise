/* 
Arrow Functions Exercise
In this exercise, you’ll refactor some ES5 code into ES2015.
ES5 Map Callback 
*/

function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

/*ES2015 Arrow Functions Shorthand
Refactor the above code to use two arrow functions. Turn it into a one-liner.
/* Write an ES2015 Version */

const double2 = (arr) => arr.map((val) => val * 2);

const nums = [3, 4, 5];
console.log(double(nums)); // [6, 8, 10]
console.log(double2(nums)); // [6, 8, 10]

/*Refactor the following function to use arrow functions:
Replace ALL functions with arrow functions:*/
function squareAndFindEvens(numbers) {
  var squares = numbers.map(function (num) {
    return num ** 2;
  });
  var evens = squares.filter(function (square) {
    return square % 2 === 0;
  });
  return evens;
}

const squareAndFindEvens2 = (numbers) =>
  numbers.map((num) => num ** 2).filter((square) => square % 2 === 0);

console.log(squareAndFindEvens(nums)); // [16]
console.log(squareAndFindEvens2(nums)); // [16]
