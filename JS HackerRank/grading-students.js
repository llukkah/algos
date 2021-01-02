// https://www.hackerrank.com/challenges/grading/problem

// FUNCTION DESCRIPTION
// HackerLand University has the following grading policy:
// Every student receives a grade in the inclusive range from 0 to 100.
// Any grade less than 40 is a failing grade.

// Sam is a professor at the university and likes to round each student's grade according to these rules:
// If the difference between the grade and the next multiple of 5 is less than 3, round  up to the next multiple of 5.
// If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

// Examples
// grade = 84 round to 85 (85 - 84 is less than 3)
// grade = 29 do not round (result is less than 40)
// grade = 57 do not round (60 - 57 is 3 or higher)

// Given the initial value of grade for each of Sam's n students, write code to automate the rounding process.

// INPUT FORMAT
// int grades[n]: the grades before rounding

// OUTPUT FORMAT
// int[n]: the grades after rounding as appropriate

// Sample Input 0
// 4
// 73
// 67
// 38
// 33

// Sample Output 0
// 75
// 67
// 40
// 33

function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i += 1) {
    console.log(Math.round(grades[i] / 5) * 5);
    if (grades[i] >= 38) {
      if (grades[i] - Math.round(grades[i] / 5) * 5 <= 0) {
        grades[i] = Math.round(grades[i] / 5) * 5;
      }
    }
  }
  return grades;
}
