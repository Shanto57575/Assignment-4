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

console.log(isLGSeven(6));