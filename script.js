'use strict';

// ===================== Problem 01 : LEAP YEAR

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


// ===================== Problem 02 : Switching Values


// let a = 3;
// let b = 5;
// let c = a;

// a = b;
// b = c;
// console.log(a, b);


// ===================== Problem 03 : Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"


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


// Problem 03 : With Arrays


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

// Problem 04 : Fibonacci Generator (x is the addition of all previous values of that array)

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

//problem 5 // cost for first 100 people = 5000; second 100 people = 4000; above 200 people = first 100 > 5000, second 100 > 4000, remaining > 3000;

function picnicBudget(person) {
    let budget;
    //errors
    if (typeof person !== "number") return `Please provide a number`;
    if (person < 0) return `Use a positive number`
    //budget calculations
    if (person <= 100) {
        budget = person * 5000;
    } else if (person > 100 && person <= 200) {
        budget = (100 * 5000) + ((person - 100) * 4000)
    }
    else if (person > 200) {
        budget = ((100 * 5000) + (100 * 4000)) + ((person - 200) * 3000)
    }
    return budget;
}

//problem 6 // first string from an array that has odd number of letters
function oddFriend(friends) {
    let oddFriendArray = [];
    let friend;

    for (let i = 0; i < friends.length; i++) {
        //error
        if (typeof (friends[i]) !== "string") { console.log(`Error! Please use a string`) }
        //condition
        friend = friends[i].length;
        if (((friend % 2) !== 0) && ((friend % 3) === 0)) {
            oddFriendArray.push(friends[i]);
        }
        else if (((friend % 2) !== 0) && ((friend % 5) === 0)) {
            oddFriendArray.push(friends[i]);
        }
        else if (((friend % 2) !== 0) && ((friend % 7) === 0)) {
            oddFriendArray.push(friends[i]);
        }
    }
    return oddFriendArray[0];
}



