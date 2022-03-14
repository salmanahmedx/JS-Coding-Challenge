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

// function isPrime(n) {
//     if (n < 2) return false;
//     if (n === 2) return true;
//     const max = Math.sqrt(n)
//     for (let i = 2; i <= max; i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }

//** ===================== Problem 14 : Calculate the sum of digits of a positive integer number

// function sum(num) {
//     const numToString = num.toString()
//     let sum = 0;
//     for (const x of numToString) {
//         const stringToNum = Number.parseInt(x)
//         sum += stringToNum;
//     }
//     return sum;
// }

//** ===================== Problem 15 : Reverse an array (without using reverse)

// let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// let reverseArr = []

// for (const x of arr) {
//     reverseArr.unshift(x)
// }

//** ===================== Problem 16 : Reverse a string

// const str = "Hello there! How was your day?"
// let reverseStrArr = [];

// for (let i = 0; i < str.length; i++) {
//     reverseStrArr.unshift(str[i])
// }
// let reverseStr = reverseStrArr.join("")

//better way
// let newStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
// }


//** ===================== Problem 17 : Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both


// let arr1 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// let arr2 = [-5, 150, -33, 12, -219, 5, 390, 40, 1];
// let newArr = [];

// function uniqueArray(arr1, arr2) {
//     for (const x of arr1) {
//         if (!arr2.includes(x)) newArr.push(x);
//     }
//     for (const y of arr2) {
//         if (!arr1.includes(y)) newArr.push(y);
//     }
// }
// uniqueArray(arr1, arr2)

//** ===================== Problem 18 : Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.

// const num1Str = '23094890828739'
// const num2Str = '32840990828739'
// let sum = 0;
// function sumStr(numStr1, numStr2) {
//     const num1 = Number.parseInt(num1Str)
//     const num2 = Number.parseInt(num2Str)
//     sum = num1 + num2;
//     sum = sum.toString()
//     return sum;
// }
// sumStr(num1Str, num2Str)

//** ===================== Problem 19 : If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

// let sum = 0;
// for (let i = 0; i < 1000; i++) {
//     if (i % 3 === 0) {
//         sum += i;
//     } else if (i % 5 === 0) {
//         sum += i;
//     }
// }

//** ===================== Problem 20 : Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ... By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even - valued terms.

// let fibonacci = [1, 2]
// let evenFibonacciSum = 0;

// const fibonacciGenerator = () => {
//     for (let i = 2; i < Infinity; i++) {
//         let a = i - 2;
//         let b = i - 1;
//         let newFibonacciDigit = fibonacci[a] + fibonacci[b];
//         if (newFibonacciDigit < 4000000) {
//             fibonacci.push(newFibonacciDigit)
//         } else {
//             return;
//         }
//     }
// }

// fibonacciGenerator()
// console.log(fibonacci)

// const evenFibonacciSumCalc = (fibonacci) => {
//     for (const x of fibonacci) {
//         if (x % 2 === 0) {
//             evenFibonacciSum += x;
//         }
//     }
// }

// evenFibonacciSumCalc(fibonacci);
// console.log(evenFibonacciSum)

//** ===================== Problem 21 : The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143?

// let primeFactors = [];
// let largestPrimeFactor;
// const primeFactorGen = (num) => {
//     primeFactors = [];

//     // determining the factors

//     for (let i = 2; i * i < num; i++) {
//         if (num % i === 0) {
//             let curr = i;
//             const sqrtOfCurr = Math.sqrt(curr);
//             let isPrime = true;

//             // checking if the factor is prime

//             for (let z = 2; z < sqrtOfCurr; z++) {
//                 if (curr % z === 0) {
//                     isPrime = false;
//                 }
//             }

//             if (isPrime) {
//                 primeFactors.push(curr)
//             }
//         }
//     }

//     // determining the largest factor

//     largestPrimeFactor = primeFactors.pop()
//     return largestPrimeFactor;
// }

// // primeFactorGen(13195)
// primeFactorGen(600851475143)
// console.log(largestPrimeFactor)

//** ===================== Problem 22 : By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13. What is the 10001st prime number ?

let isPrime = true;
let primeArr = []

const primeNumber = (num) => {
    isPrime = true;
    if (num === 0) return isPrime = false;
    if (num === 1) return isPrime = false;

    for (let i = 2; i <= (num / 2); i++) {
        if (num % i === 0) {
            return isPrime = false;
        }
    }
    if (isPrime === true) {
        primeArr.push(num);
    }
}


const nthPrimeNumber = (n) => {
    let range = 100;
    for (let i = 2; i < range; i++) {
        if (primeArr.length !== n) {
            primeNumber(i);
            range++;
        }
    }
    const nthDigit = primeArr.slice(-1)
    return nthDigit;
}

const x = nthPrimeNumber(10001)
console.log(x)