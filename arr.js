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


let arr = [1,2,3,111,-1,-2];
console.log(findingBadData(arr));