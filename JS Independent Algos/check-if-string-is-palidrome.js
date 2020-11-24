//////////////////////////////////////////////////////////////////
/////////////////Check a string (`str`) to determine /////////////
///////////////// if the string is a palindrome. /////////////////
//////////////////////////////////////////////////////////////////
const palindrome = str => {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
console.log(palindrome("a man a plan a canal panama"))