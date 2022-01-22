'use strict';

// ===================== Problem 01

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
