// https://www.hackerrank.com/challenges/the-time-in-words/problem

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
