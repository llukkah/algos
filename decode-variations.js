// function chunkArray(array, size) {
//     if(array.length <= size){
//         return [array]
//     }
//     return [array.slice(0,size), ...chunkArray(array.slice(size), size)]
//  }

//  function decodeVariations(S) {
//     //turn S into A
//     // [1, 2, 6, 2]
//     //every 2 digits into an arr
//     //[12, 62] if arr[i] <= 26 then move to the next way of grouping
//     // [1, 26, 2]
//     //[12, 6, 2]
//     let arr = Array.from(S);
//   function chunk(arr, size) {
//     const chunked_arr = [];
//     for (let i = 0; i < arr.length; i++) {
//       const last = chunked_arr[chunked_arr.length - 1];
//       if (!last || last.length === size) {
//         chunked_arr.push([arr[i]]);
//       } else {
//         last.push(arr[i]);
//       }
//     }
//     // console.log(chunked_arr);
  
//   }
//     chunk(arr, 2);

    function splitAllWays(result, left, right){
    result.push(left.concat(right));
    //document.write(left.concat(right) + '<br />');

    // If we still have chars to work with in the right side then keep splitting
    if (right.length > 1){
      // For each combination left/right split call splitAllWays()
      for(var i = 1; i < right.length; i++){
        splitAllWays(result, left.concat(right.substring(0, i)), right.substring(i));
      }
    }

    // Return result
    return result;
  // };

  var str = "123456";
  var ans = splitAllWays([], [], str);
  }
//   //S = '1262'
  // decodeVariations('1262');

    // function splitAllWays(result, left, right){
    // Push current left + right to the result list
  //   result.push(left.concat(right));
  //   //document.write(left.concat(right) + '<br />');

  //   // If we still have chars to work with in the right side then keep splitting
  //   if (right.length > 1){
  //     // For each combination left/right split call splitAllWays()
  //     for(var i = 1; i < right.length; i++){
  //       splitAllWays(result, left.concat(right.substring(0, i)), right.substring(i));
  //     }
  //   }

  //   // Return result
  //   return result;
  // };

  // var str = "123456";
  // var ans = splitAllWays([], [], str);