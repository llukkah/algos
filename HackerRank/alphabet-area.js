function designerPdfViewer(h, word) {
    let wordArr = Array.from(word);
    let myMap = new Map();
    let heightArr = [];
    let alphabet = [];
    let maxHeight = 0;
    const start = 'a'.charCodeAt(0);
    const last = 'z'.charCodeAt(0);
    for (var i = start; i <= last; i += 1) {
      alphabet.push(String.fromCharCode(i));
    }
    console.log(alphabet);
    for (let i = 0; i < alphabet.length; i += 1) {
        myMap.set(alphabet[i], h[i])
    }
    console.log(myMap);
     for (var i = 0; i < wordArr.length; i += 1) {
       heightArr.push(myMap.get(wordArr[i]));
     }
    maxHeight = Math.max(...heightArr);
    console.log(maxHeight);
    console.log(maxHeight * word.length);
  }


console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'TOM'))