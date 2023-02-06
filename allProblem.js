/*
    problem 1 :
    This function will take a positive number as input
    & will return a output after performing various Arithmetic Operations
*/ 
function mindGame(positiveNumber){
    if(typeof(positiveNumber)!='number' || positiveNumber<0) return "You didn't Enter a positive number";
    return (((positiveNumber*3)+10)/2) - 5;
 }

/*
    problem 2 :
    This function takes a string as an input and returns if the size of the is string odd or even!
*/
function evenOdd(numberString){
    if(typeof(numberString)!= 'string') return "Input should be a string";
    const stringSize = numberString.length;
    if(stringSize%2)return 'Odd';
    return 'Even';
}

/*
  problem : 3
  This function takes a random number and perform some operation with 7
*/
function isLGSeven(randomNumber){
    if(typeof(randomNumber)!='number') return "You didn't Enter a number";
    const answer = randomNumber-7;
    if(answer<7) return answer;
    return randomNumber*2;
 }
 
/*
   problem : 4
   This function takes an array as input and returns how many negative number exists in array!
*/
function findingBadData(numericArray){
    if(typeof(numericArray)!='object') return "Input should be an array";
    let badData = 0;
    for(let i=0; i<numericArray.length; i++){
      if(numericArray[i]<0)badData++;
    }
    return badData;
 }

/*  
    problem 5:
    This function takes three number as input and returns a number after performing multiple arithmetic operation
*/

function gemsToDiamond(firstNumber,secondNumber,thirdNumber){
    if(typeof(firstNumber)!='number' || typeof(secondNumber)!='number' || typeof(thirdNumber)!='number') return "Please Enter three number:"
    const totalDiamond = (firstNumber*21 + secondNumber*32 + thirdNumber*43);
    if(totalDiamond>1000*2) return totalDiamond-2000;
    return totalDiamond;
}

/*.........................The End......................... */