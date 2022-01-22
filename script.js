'use strict';

// ===================== Problem 01 : LEAP YEAR

const leapYear = function (year) {
    if (year % 4 === 0) {
        console.log(`Leap Year 😲`);
    } else if (year % 100 === 0 && year % 400 === 0) {
        console.log(`Leap Year 😲`);
    } else {
        console.log(`Not a Leap Year! 😫`)
    }
};
leapYear(3433);
leapYear(2000);
leapYear(2105);
leapYear(2020);

// ===================== Problem 02 : Switching Values

let a = 3;
let b = 5;
let c = a;

a = b;
b = c;
console.log(a, b);

// ===================== Problem 03 : Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"

let number;

for (number = 1; number <= 100; number++) {
    if (number % 3 === 0 && number % 5 !== 0) {
        console.log("Fizz");
    } else if (number % 5 === 0 && number % 3 !== 0) {
        console.log("Buzz");
    } else if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz")
    } else {
        console.log(number)
    }
}


