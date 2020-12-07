//////////////////////////////////////////////////
////////Create a function which takes ////////////
///////a given integer, `num`, and ///////////////
//////translates the integer into Roman numerals.///
////////////Do not use a `for` loop.///////////////
///////////The output should be a string.//////////
//////////////////////USE RECURSION////////////////
//////////////////////////////////////////////////
const translateToRoman = (num) => {
  if (num < 1) {
    return "";
  }
  if (num >= 1000) {
    return "M" + translateToRoman(num - 1000);
  }
  if (num >= 900) {
    return "CM" + translateToRoman(num - 900);
  }
  if (num >= 500) {
    return "D" + translateToRoman(num - 500);
  }
  if (num >= 400) {
    return "CD" + translateToRoman(num - 400);
  }
  if (num >= 100) {
    return "C" + translateToRoman(num - 100);
  }
  if (num >= 90) {
    return "XC" + translateToRoman(num - 90);
  }
  if (num >= 50) {
    return "L" + translateToRoman(num - 50);
  }
  if (num >= 40) {
    return "XL" + translateToRoman(num - 40);
  }
  if (num >= 10) {
    return "X" + translateToRoman(num - 10);
  }
  if (num >= 9) {
    return "IX" + translateToRoman(num - 9);
  }
  if (num >= 5) {
    return "V" + translateToRoman(num - 5);
  }
  if (num >= 4) {
    return "IV" + translateToRoman(num - 4);
  }
  if (num >= 1) {
    return "I" + translateToRoman(num - 1);
  }
};
