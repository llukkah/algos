// https://www.hackerrank.com/challenges/the-time-in-words/problem

// FUNCTION DESCRIPTION
// Given the time in numerals we may convert it into words, as shown below:
// 5:00 --> five o'clock
// 5:01 --> one minute past five
// 5:10 --> ten minutes past five
// 5:15 --> quarter past five
// 5:30 --> half past five
// 5:40 --> twenty minutes to six
// 5:45 --> quarter to six
// 5:47 --> thirteen minutes to six
// 5:28 --> twenty eight minutes past five

// At minutes = 0, use 'o'clock'.
// For 1 <= minutes <= 30, use 'past'
// For 30 < minutes, use 'to'

// INPUT FORMAT
// int h: the hour of the day
// int m: the minutes after the hour

// OUTPUT FORMAT
// string: a time string as described

// Sample Input 0
// 5
// 47
// Sample Output 0
// thirteen minutes to six

// Sample Input 1
// 3
// 00
// Sample Output 1
// three o' clock

// Sample Input 2
// 7
// 15
// Sample Output 2
// quarter past seven

//PESUDOCODE
//make words array to push each number / word in
//convert number to words/string
//if statement  to determine oclock, quarter, past, actual number
//push into words array
//convert array to string into a variable
//return variable that's string

function timeInWords(h, m) {
  let words = [];

  let start = 0;
  let end = 12;
  var nums = [];
  for (var i = start; i <= end; i++) {
    nums.push(i);
  }
  console.log(nums);

  // if (m >= 1 || m <= 30) -- use 'past'
  // if (m > 30) -- use ' minutes to' && 60
  //             -- m then convert to word
  //             -- add 1 to hour then convert to word
  // if (m === '00') -- use ' "o" +" ' "+ clock"
  // if (m === 15 || m === 45) -- use 'quarter'
  // if (m === 30) _ use 'half'
}

function timeInWords(h, m) {
  let hour, minutes;
  let timeObj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    quarter: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    "twenty one": 21,
    "twenty two": 22,
    "twenty three": 23,
    "twenty four": 24,
    "twenty five": 25,
    "twenty six": 26,
    "twenty seven": 27,
    "twenty eight": 28,
    "twenty nine": 29,
    half: 30,
  };
  if (Object.values(timeObj).includes(h)) {
    for (let [key, val] of Object.entries(timeObj)) {
      if (m > 30) {
        if (val === h + 1) hour = key;
      }
      if (val === h) hour = key;
      if (m > 30) {
        if (val === 60 - m) minutes = key;
      }
      if (val === m) minutes = key;
    }
    if (m === 0) return hour + " o' clock";
    if (m === 1) return minutes + " minute past " + hour;
    if (m === 15) return minutes + " past " + hour;
    if (m === 45) return minutes + " to " + hour;
    if (m > 0 && m < 30) return minutes + " minutes past " + hour;
    if (m > 30) return minutes + " minutes to " + hour;
    if (m === 30) return minutes + " past " + hour;
  }
}

console.log(timeInWords(5, 47)); //thirteen minutes to six
// console.log(timeInWords(3,00)) //three o' clock
// console.log(timeInWords(7,15)) //quarter past seven
