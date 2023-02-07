/*
   problem : 4
   This function takes an array as input and returns how many negative number exists in array!
*/
function findingBadData(numericArray){
   if(Array.isArray(numericArray)==false) return "Input should be an array";
   let badData = 0;
   for(let i=0; i<numericArray.length; i++){
     if(numericArray[i]<0)badData++;
   }
   return badData;
}

let arr =  [ 4, 9, -5, -33, -55 ];
console.log(findingBadData("s"));