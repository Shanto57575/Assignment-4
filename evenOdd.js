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

 console.log(evenOdd("22222"));