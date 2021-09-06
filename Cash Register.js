function checkCashRegister(price, cash, cid) {
  let penny = cid[0][1];
  let nickel = cid[1][1];
  let dime = cid[2][1];
  let quarter = cid[3][1];
  let one = cid[4][1];
  let five = cid[5][1];
  let ten = cid[6][1];
  let twenty = cid[7][1];
  let hundred = cid[8][1];

let toReturn = cash - price;
let changeArray = [] 
function calculate(amountLeft){
  amountLeft = amountLeft.toFixed(2);
 
 
if (amountLeft <= 0){
  return "TRANSACTION_COMPLETE"

}
else{
  
  if (amountLeft >= 100 && hundred != 0){
    hundred-= 100;
    amountLeft -= 100;
    for (var iteration in changeArray){
      
      if(changeArray[iteration][0] === 'ONE HUNDRED'){
        changeArray[iteration][1] += 100;
        
        return calculate(amountLeft);
      }
    }
    
    changeArray.push(['ONE HUNDRED',100])
    return calculate(amountLeft);

    
  }
  else if (amountLeft >= 20 && twenty != 0){
    twenty -= 20;
    amountLeft -= 20;

        for (var iteration in changeArray){
      if(changeArray[iteration][0] === 'TWENTY'){
        changeArray[iteration][1] += 20;
        return calculate(amountLeft);
      }
    }
    changeArray.push(['TWENTY',20])
    return calculate(amountLeft);
  }
  else if (amountLeft >= 10 && ten != 0){
    ten -= 10;
    amountLeft -= 10;
    for (var iteration in changeArray){
      if(changeArray[iteration][0] === 'TEN'){
        changeArray[iteration][1] += 10;
        return calculate(amountLeft);
      }
    }
    changeArray.push(['TEN',10])


    return calculate(amountLeft);
  }
  else if (amountLeft >= 5 && five != 0){
    five -= 5;
    amountLeft -= 5;
    for (var iteration in changeArray){
      if(changeArray[iteration][0] === 'FIVE'){
        changeArray[iteration][1] += 5;
        return calculate(amountLeft);
      }
    }
    changeArray.push(['FIVE',5])

    return calculate(amountLeft);
  }
  else if (amountLeft >= 1 && one != 0){
    one -= 1;
    amountLeft -= 1;
    for (var iteration in changeArray){
      if(changeArray[iteration][0] === 'ONE'){
        changeArray[iteration][1] += 1;
        return calculate(amountLeft);
      }
    }
    changeArray.push(['ONE',1])


    return calculate(amountLeft);
  }
  else if (amountLeft >= 0.25 && quarter != 0){
    quarter -= 0.25;
    amountLeft -= 0.25;
    for (var iteration in changeArray){
      if(changeArray[iteration][0] === 'QUARTER'){
        changeArray[iteration][1] += 0.25;
        return calculate(amountLeft);
      }
    }
    changeArray.push(['QUARTER',0.25])
    return calculate(amountLeft);
  }
  else if (amountLeft >= 0.1 && dime != 0){
    dime -= 0.1;
    amountLeft -= 0.1;
    for (var iteration in changeArray){
      if(changeArray[iteration][0] === 'DIME'){
        changeArray[iteration][1] += 0.1;
        return calculate(amountLeft);
      }
    }
    changeArray.push(['DIME',0.1])
    return calculate(amountLeft);
  }
  else if (amountLeft >= 0.05 && nickel != 0){
    nickel -= 0.05;
    amountLeft -= 0.05;
    for (var iteration in changeArray){
      if(changeArray[iteration][0] === 'NICKEL'){
        changeArray[iteration][1] += 0.05;
        return calculate(amountLeft);
      }
    }
    changeArray.push(['NICKEL',0.05])
    return calculate(amountLeft);
  }
  else if (amountLeft >= 0.01 && penny != 0){
    penny -= 0.01;
    amountLeft -= 0.01;
    for (var iteration in changeArray){
      if(changeArray[iteration][0] === 'PENNY'){
        changeArray[iteration][1] += 0.01;
        return calculate(amountLeft);
      }
    }
    changeArray.push(['PENNY',0.01])
    return calculate(amountLeft);
  }
  else {
    
    return "INSUFFICIENT_FUNDS"
    
  }



}
}
  var status = calculate(toReturn);
  if( status === "TRANSACTION_COMPLETE"){
    console.log();
    for (var loop in changeArray){
      changeArray[loop][1] = parseFloat(changeArray[loop][1].toFixed(2));
    }
  
  if (penny>0 || nickel>0 || dime>0 || quarter>0 || one>0|| five>0|| ten>0 || twenty>0 || hundred>0){
  return {'status':'OPEN','change':changeArray}
  }
  else {
    return {'status':'CLOSED','change':cid}
  }

  }
  else if (status === "INSUFFICIENT_FUNDS"){
    return {'status':'INSUFFICIENT_FUNDS','change':[]}
  }
  var change = changeArray;
  return change;
}

/*
//Test Cases
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])) 
// { status: 'OPEN', change: [ [ 'QUARTER', 0.5 ] ] }

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))  
// {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
//{status: "INSUFFICIENT_FUNDS", change: []}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

*/
