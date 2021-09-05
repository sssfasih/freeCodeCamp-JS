var nums = '1234567890'
function telephoneCheck(str) {
  let count =0;
  let dashCount = 0;
  let bracketCount = 0;
  let areaCodeCount = 0;
  let areaCodeFlag = 0;

  for (var loop in str){
    for (var check in nums){
    if (str[loop] === nums[check] ){
      count++;
      break;
    }
    
  }
  
  if (str[loop] === '-' ){
      dashCount++;

    }
    if (str[loop] === '(' || str[loop] === ')'){
      bracketCount++;
      areaCodeFlag ? areaCodeFlag = 0 : areaCodeFlag = 1;
    }
    else{
      (areaCodeFlag === 1) ? areaCodeCount++:'' 
    }
  }

  // Validation
  if (count>11 || count < 10){
    return false;
  }
  

  if (bracketCount == 1 || bracketCount > 2){
    return false;
  }
  if (dashCount > 2){
    return false;
  }
  if (count === 11){
    if (str[0] !== '1'){
      return false
    }
  }
  if (areaCodeCount > 3 ){
    return false;
  }
  return true;
}


/* // Test Cases

console.log(telephoneCheck("1 555-555-5555")); //true
console.log(telephoneCheck("1 (555) 555-5555")); //true
console.log(telephoneCheck("5555555555")); //true
console.log(telephoneCheck("(555)555-5555")); //true
console.log(telephoneCheck("555-5555")); //false
console.log(telephoneCheck("1 555)555-5555")); //false
console.log(telephoneCheck("1 456 789 4444")); //true
console.log(telephoneCheck("(6054756961)")); //false
console.log(telephoneCheck("2 (757) 622-7382")); //false
console.log(telephoneCheck("-1 (757) 622-7382")); //false
console.log(telephoneCheck("2(757)6227382")); //false
console.log(telephoneCheck("555)-555-5555")); //false
console.log(telephoneCheck("(555)5(55?)-5555")); //false
console.log(telephoneCheck("(555)5(55?)-5555")); //false
*/
