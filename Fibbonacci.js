 function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    var a = 0;
    var b = 1;
    var c = 0;
    var fib = [];
    //For Loop Start in 0 to n
    for(var i = 0; i<n; i++){
      //Enter de first element in to the Array
       fib.push(c);
       //Sum the two previous values of the Array
       c =  a + b;
       //If is the first Loop don't change de first value
       if(!(i==0)){
         a = b;
       }
       //Change the result into de second value
       b = c;
    }
   return fib;

    
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}
        

fibonacciGenerator(16)