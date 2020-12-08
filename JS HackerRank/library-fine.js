//https://www.hackerrank.com/challenges/library-fine/problem

//Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). The fee structure is as follows:

//1. If the book is returned on or before the expected return date, no fine will be charged (i.e.: .fine = 0)
//2. If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, fine = 15 Hackos x (number of days late).
//3. If the book is returned after the expected return month but still within the same calendar year as the expected return date, the fine = 500 Hackos x (number of months late).
//4. If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10000 Hackos.

//Charges are based only on the least precise measure of lateness. For example, whether a book is due January 1, 2017 or December 31, 2017, if it is returned January 1, 2018, that is a year late and the fine would be 10,000 Hackos.

// FUNCTION DESCRIPTION
// Complete the libraryFine function.

// libraryFine has the following parameter(s):
// d1, m1, y1: returned date day, month and year, each an integer
// d2, m2, y2: due date day, month and year, each an integer

// RETURNS
// int: the amount of the fine or 0 if there is none.

//SAMPLE INPUT
// 9 6 2015
// 6 6 2015

//SAMPLE OUTPUT
// 45

//EXPLANATION
// Given the following dates:
// Returned: d1 = 9 m1 = 6 y1 = 2015
// Due:      d2 - 6 m2 = 6 y2 = 2015

// Because y2 = y1, we know it is less than a year late.
// Because m2 = m1, we know it's less than a month late.
// Because d2 < d1, we know that it was returned late (but still within the same month and year).

// Per the library's fee structure, we know that our fine will be 15 Hackos x (# of days late). We then print the result of 15 x (d1-d2) = 15 x (9 - 6) = 45 as our output.

function libraryFine(d1, m1, y1, d2, m2, y2) {
//   if (y2 !== y1) {
//     return "10000";
//   }
//   if (y2 == y1 && m2 !== m1) {
//     return 500 * (m1 - m2);
//   }
//   if (y2 == y1 && m2 == m1 && d2 !== d1) {
//     return 15 * (d1 - d2);
//   }
//   if (y2 == y1 && m2 == m1 && d2 == d1) {
//     return 0;
//   }
//   if (y2 == y1 && m2 == m1 && d2 > d1) {
//     return 0;
//   }

  if (y1 < y2) return 0;
  if (y1 > y2) return 10000;

  if (m1 < m2) return 0;
  if (m1 > m2) return (m1 - m2) * 500;

  if (d1 > d2) return (d1 - d2) * 15;
  return 0;
}

// console.log(libraryFine(9, 6, 2015, 6, 6, 2015)) //45
console.log(libraryFine(6, 6, 2015, 9, 6, 2015)); //0
