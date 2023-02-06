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

console.log(gemsToDiamond(1,1,1));