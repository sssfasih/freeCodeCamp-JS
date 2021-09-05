var alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
function rot13(str) {
  let shiftedWord = ''
  for (var eachLetter in str){
    for (var match in alphabets){
      // Check if the eachLetter is alphabet
      if (str[eachLetter] === alphabets[match]){
        // If it is, then shift it by 13 spaces
        shiftedWord += alphabets[ (parseInt(match) +13) % 26 ]
        break;
      }
      
    }
    // If loop comes here and condition is not matched
    if (str[eachLetter] !== alphabets[match]){
      //Means eachLetter is not alphabet, add it as it is.
    shiftedWord += str[eachLetter]
    }


  }

  //console.log(shiftedWord);
  return shiftedWord;
}

rot13("SERR PBQR PNZC");
