///////////////////////////////////////////////////////////////
///////////////Create a function that accepts/////////////////
///////////// an integer as an argument and //////////////////
//////////////factorializes that integer./////////////////////
//////////// The output should return an integer.//////////////
///////////////////////////////////////////////////////////////

const factorialize = (num) => {
    if (num < 0) 
     return -1;
   else if (num == 0) 
   return 1;
   else {
     return (num * factorialize(num - 1));
   
   }
   }
   
   console.log(factorialize(4))