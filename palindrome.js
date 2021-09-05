var cleanWord = ""
var alphanum = 'abcdefghijklmnopqrstuvwxyz0123456789'
function palindrome(str) {
  // Data Cleaning
  str = str.toLowerCase()
  for (var loop in str){
    for (let check in alphanum){
      if (str[loop] === alphanum[check]){
        cleanWord += str[loop];
        
        break;
      }
    }
  }
  //CleanWord is now free from all caps,punctuations
  // and spacing
  let reversedWord = ''
  for (var i=cleanWord.length -1;i>=0;i-= 1){
    reversedWord += cleanWord[i];
  }

  // Actual Palindrome Checking 
  for (var checking = 0; checking <= cleanWord.length -1;checking++){
    if (cleanWord[checking] !== reversedWord[checking]){
      return false
    }
    else{
    //console.log(cleanWord[checking] ,"matched",reversedWord[checking])
    }
  }
  //console.log("word matched")
  return true;
}

/*
// Test Cases
palindrome("_eye"); // true
palindrome("eye") ; // true
palindrome("race car") ; // true
palindrome("not a palindrome"); // false
palindrome("A man, a plan, a canal. Panama"); // true
palindrome("never odd or even"); // true
palindrome("nope"); // false
palindrome("almostomla"); // false
palindrome("My age is 0, 0 si ega ym."); // true
palindrome("1 eye for of 1 eye."); // false
palindrome("0_0 (: /-\ :) 0-0"); // true
palindrome("five|\_/|four"); // false

*/
