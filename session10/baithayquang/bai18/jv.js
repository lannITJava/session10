
for (let multiple = 1; multiple <= 100; multiple++) {
   if (multiple%3==0) {
       if (multiple%5==0) {
          console.log("FizzBuzz");
       } else {
          console.log("Fizz");
       }
   } else if (multiple%5==0) {
       console.log("Buzz");
   } else{
       console.log(multiple);
   }
    
    
}