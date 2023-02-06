/*
  problem : 3
  This function takes a random number and returns absolute value
*/
function isLGSeven(randomNumber){
   if(typeof(randomNumber)!='number') return "You didn't Enter a number";
   const answer = Math.abs(randomNumber-7);
   if(answer<7) return randomNumber-7;
   return answer*2;
}

console.log(isLGSeven(6));