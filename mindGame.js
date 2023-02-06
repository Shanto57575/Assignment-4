/*
    problem 1 :
    This function will take a positive number as a input
    & return a output after performing various Arithmetic Operations
*/ 
function mindGame(positiveNumber){
   if(typeof(positiveNumber)!='number' || positiveNumber<0) return "You didn't Enter a positive number";
   return (((positiveNumber*3)+10)/2) - 5;
}

console.log(mindGame(33));

