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

// let isPrime = true;
// let primeArr = []

// const primeNumber = (num) => {
//     isPrime = true;
//     if (num === 0) return isPrime = false;
//     if (num === 1) return isPrime = false;

//     for (let i = 2; i <= (num / 2); i++) {
//         if (num % i === 0) {
//             return isPrime = false;
//         }
//     }
//     if (isPrime === true) {
//         primeArr.push(num);
//     }
// }


// const nthPrimeNumber = (n) => {
//     let range = 100;
//     for (let i = 2; i < range; i++) {
//         if (primeArr.length !== n) {
//             primeNumber(i);
//             range++;
//         }
//     }
//     const nthDigit = primeArr.slice(-1)
//     return nthDigit;
// }

// const x = nthPrimeNumber(10001)
// console.log(x)

//** ===================== Problem 23 : A palindromic number reads the same both ways.The largest palindrome made from the product of two 2 - digit numbers is 9009 = 91 × 99. Find the largest palindrome made from the product of two 3 - digit numbers.

// const palindrome = (n) => {
//     let arr = [];
//     let range;
//     let start;
//     if (n === 1) {
//         range = 10;
//         start = 1;
//     } else if (n === 2) {
//         range = 100;
//         start = 10;
//     } else if (n === 3) {
//         range = 1000;
//         start = 100;
//     } else {
//         console.log(`Please enter 1-3 digit numbers`)
//     }

//     for (let m = start; m < range; m++) {
//         for (let n = start; n < range; n++) {
//             const sum = m * n;
//             const reverseSum = Number(sum.toString().split('').reverse().join(""))
//             if (sum === reverseSum) arr.push(sum);
//         }
//     }
//     const largestPalindrome = (arr.sort((a, b) => a - b)).slice(-1)
//     const [x] = largestPalindrome;
//     return x;
// }

// const largestPalindrome = palindrome(3)
// console.log(largestPalindrome)

//** ===================== Problem 24 : 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20 ?

// let divisible;
// const smallestDivisibleNum = (n) => {
//     let limit = n + 1;
//     let range = 100;
//     let divisibleNums = [];
//     for (let i = 1; i < range; i++) {
//         divisible = true;
//         for (let condition = 1; condition < limit; condition++) {
//             if (!(i % condition === 0)) {
//                 divisible = false;
//             }
//         }
//         console.log(i)
//         if (divisible) {
//             divisibleNums.push(i)
//         }
//         if (divisibleNums.length === 0) {
//             range++;
//         } else {
//             range = 0;
//         }
//     }
//     console.log(divisibleNums)
// }

// smallestDivisibleNum(20)

//** ===================== Problem 25 : The sum of the squares of the first ten natural numbers is 385,The square of the sum of the first ten natural numbers is 3025, Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 2640. Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

// let totalSumOfSquares = 0;
// let totalSquareOfSum = 0;
// const sumOfSquares = (n) => {
//     for (let i = 1; i <= n; i++) {
//         totalSumOfSquares += i ** 2
//     }
// }
// sumOfSquares(100)

// const squareOfSum = (n) => {
//     for (let i = 1; i <= n; i++) {
//         totalSquareOfSum += i;
//     }
//     totalSquareOfSum = totalSquareOfSum ** 2;
// }

// squareOfSum(100)

// let difference = totalSquareOfSum - totalSumOfSquares;
// console.log(difference)


//** ===================== Problem 26 :The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.
const digitForTest = `7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450`
//* ---> Find the thirteen adjacent digits in the 1000 - digit number that have the greatest product.What is the value of this product ?

// let largestProduct = 1;
// let productSample = 1;
// let startingValue = 0;
// let range = 13;

// const adjacentDigits = (n) => {
//     const array = n.toString().split("");
//     let stopCondition = array.length;

//     for (let i = 1; i < stopCondition; i++) {
//         if (range >= array.length) {
//             stopCondition = 0;
//             range = 0;
//         }
//         for (let start = startingValue; start < range; start++) {
//             productSample *= Number(array[start]);
//         }
//         startingValue = startingValue + 1;
//         range = range + 1;
//         console.log(largestProduct)
//         if (largestProduct < productSample) {
//             largestProduct = productSample;
//         }
//         console.log(largestProduct)
//         productSample = 1;
//     }
// }

// adjacentDigits(digitForTest)
// console.log(largestProduct)

//** ===================== Problem 27 : A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a2 + b2 = c2. For example, 32 + 42 = 9 + 16 = 25 = 52. There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.

// let range = 1000;
// let arr = []
// let product;
// const onlyPythagoreanTriplet = () => {
//     for (let x = 1; x < 1000; x++) {
//         let a = x;
//         for (let y = 1; y < 1000; y++) {
//             let b = y;
//             for (let z = 1; z < 1000; z++) {
//                 let c = z;
//                 if (a ** 2 + b ** 2 === c ** 2 && a + b + c === 1000) {
//                     if (!arr.includes(a, b, c)) {
//                         arr = []
//                         arr.push(a, b, c)
//                     }
//                 }
//             }
//         }
//     }
//     const [a, b, c] = arr
//     product = a * b * c;
// }

// onlyPythagoreanTriplet();
// console.log(product)

//** ===================== Problem 28 : The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17. Find the sum of all the primes below two million.

// let isPrime = true;
// let primeArr = []
// const prime = (n) => {
//     if (n === 2 || n === 3) { primeArr.push(n) }
//     else {
//         const sqrt = Math.sqrt(n)
//         for (let i = 2; i <= sqrt; i++) {
//             if (n % i === 0) {
//                 isPrime = false;
//             }
//         }
//         if (isPrime) {
//             primeArr.push(n)
//         };
//         isPrime = true;
//     }
// }

// const checkPrime = (n) => {
//     for (let i = 2; i < n; i++) {
//         prime(i);
//     }
//     const sumOfThePrimes = primeArr.reduce((acc, curr) => {
//         acc += curr;
//         return acc;
//     }, 0)
//     return sumOfThePrimes;
// }

// const sum = checkPrime(2000000)
// console.log(sum)

//** ===================== Problem 29 : In the 20×20 grid below, four numbers along a diagonal line have been marked in red. The product of these numbers is 26 × 63 × 78 × 14 = 1788696. What is the greatest product of four adjacent numbers in the same direction(up, down, left, right, or diagonally) in the 20×20 grid ?

const gridStr = [
    [08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
    [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
    [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
    [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
    [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
    [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
    [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
    [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],
    [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
    [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],
    [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
    [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
    [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
    [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],
    [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
    [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
    [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
    [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
    [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
    [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]]


const rightDirection = (grid) => {
    let a = [];
    let start = 16;
    let range = 17;
    for (let i = 0; i < 4; i++) {
        const activeRow = grid[i]
        for (let x = start; x < range; x++) {
            a.push(activeRow[x])
        }
        if (range !== 20) {
            range++
            start++
        }
    }
    let multiply = 1;
    const multiplyFunc = (arr) => {

        for (const x of a) {
            multiply = multiply * x;
        }
    }
    multiplyFunc(a);
    console.log(multiply)
}


rightDirection(gridStr)
