'use strict';

//** ===================== Problem 01 : LEAP YEAR

// const leapYear = function (year) {
//     if (year % 4 === 0) {
//         console.log(`Leap Year 😲`);
//     } else if (year % 100 === 0 && year % 400 === 0) {
//         console.log(`Leap Year 😲`);
//     } else {
//         console.log(`Not a Leap Year! 😫`)
//     }
// };
// leapYear(3433);
// leapYear(2000);
// leapYear(2105);
// leapYear(2020);


//** ===================== Problem 02 : Switching Values


// let a = 3;
// let b = 5;
// let c = a;

// a = b;
// b = c;
// console.log(a, b);


//** ===================== Problem 03 : Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"


// let number;

// for (number = 1; number <= 100; number++) {
//     if (number % 3 === 0 && number % 5 !== 0) {
//         console.log("Fizz");
//     } else if (number % 5 === 0 && number % 3 !== 0) {
//         console.log("Buzz");
//     } else if (number % 3 === 0 && number % 5 === 0) {
//         console.log("FizzBuzz")
//     } else {
//         console.log(number)
//     }
// }


//** ===================== Problem 04 : : With Arrays


// let number;
// let numberArray = [];
// let finalArray = [];

// for (number = 1; number <= 100; number++) {
//     numberArray.push(number);
// }
// console.log(numberArray);

// for (const x of numberArray) {
//     if (x % 3 === 0 && x % 5 === 0) {
//         finalArray.push("FizzBuzz")
//     } else if (x % 3 === 0) {
//         finalArray.push("Fizz");
//     } else if (x % 5 === 0) {
//         finalArray.push("Buzz");
//     } else {
//         finalArray.push(x)
//     }
// }

// console.log(finalArray)

//** ===================== Problem 05 : Fibonacci Generator (x is the addition of all previous values of that array)

// let seqArray = [];
// const fibonacciGenerator = function (n) {
//     let x = 1;
//     if (n === 0) {
//         seqArray.push("Number should be greater than 0");
//     } else if (n === 1) {
//         seqArray.push(0);
//     } else if (n === 2) {
//         seqArray.push(0, 1);
//     } else {
//         seqArray.push(0, 1)
//         for (x = 1; seqArray.length < n; x += x) {
//             seqArray.push(x);
//         }
//     }
//     return seqArray;
// }

//** ===================== Problem 06 : cost for first 100 people = 5000; second 100 people = 4000; above 200 people = first 100 > 5000, second 100 > 4000, remaining > 3000;

// function picnicBudget(person) {
//     let budget;
//     //errors
//     if (typeof person !== "number") return `Please provide a number`;
//     if (person < 0) return `Use a positive number`
//     //budget calculations
//     if (person <= 100) {
//         budget = person * 5000;
//     } else if (person > 100 && person <= 200) {
//         budget = (100 * 5000) + ((person - 100) * 4000)
//     }
//     else if (person > 200) {
//         budget = ((100 * 5000) + (100 * 4000)) + ((person - 200) * 3000)
//     }
//     return budget;
// }

//** ===================== Problem 07 : first string from an array that has odd number of letters

// function oddFriend(friends) {
//     let oddFriendArray = [];
//     let friend;

//     for (let i = 0; i < friends.length; i++) {
//         //error
//         if (typeof (friends[i]) !== "string") { console.log(`Error! Please use a string`) }
//         //condition
//         friend = friends[i].length;
//         if (((friend % 2) !== 0) && ((friend % 3) === 0)) {
//             oddFriendArray.push(friends[i]);
//         }
//         else if (((friend % 2) !== 0) && ((friend % 5) === 0)) {
//             oddFriendArray.push(friends[i]);
//         }
//         else if (((friend % 2) !== 0) && ((friend % 7) === 0)) {
//             oddFriendArray.push(friends[i]);
//         }
//     }
//     return oddFriendArray[0];
// }

//** ===================== Problem 08 : Print all the multiplication tables with numbers from 1 to 10

// for (let n = 1; n < 11; n++) {
//     console.log(`Table of ${n}`)
//     for (let i = 1; i < 11; i++) {
//         console.log(`${n} * ${i} = ${n * i}`)
//     }
// }

//** ===================== Problem 09 : Calculate the sum of odd numbers greater than 10 and less than 30

// let sum = 0;
// for (let i = 1; i < 30; i += 2) {
//     sum = sum + i;
// }

//** ===================== Problem 10 : Calculate the sum of numbers in an array of numbers

// let arr = [2, 3, -1, 5, 7, 9, 10, 15, 95];

// let sum = null;
// for (const x of arr) {
//     sum = sum + x;
// }

//** ===================== Problem 11 : Create a function that receives an array of numbers and returns an array containing only the positive numbers

// let arr = [2, 3, -1, 5, -7, 9, -10, 15, 95]

// const positiveNumArr = (arr) => {
//     let positiveArray = [];
//     for (const x of arr) {
//         if (x > 0) positiveArray.push(x);
//     }
//     return positiveArray;
// }
// const positiveArray = positiveNumArr(arr)

// // Filter method

// const positiveArrayF = arr.filter((x) => x > 0)

//** ===================== Problem 12 : Find the maximum number in an array of


// let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

// const sortedArr = arr.sort((a, b) => a - b)

//** ===================== Problem 13 : Create a function that will return a Boolean specifying if a number is prime

function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    const max = Math.sqrt(n)
    for (let i = 2; i <= max; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

//** ===================== Problem 14 : Calculate the sum of digits of a positive integer number

function sum(num) {
    const numToString = num.toString()
    let sum = 0;
    for (const x of numToString) {
        const stringToNum = Number.parseInt(x)
        sum += stringToNum;
    }
    return sum;
}

