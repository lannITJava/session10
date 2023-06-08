 //Nhap so n
 let n = +prompt("Nhập vào số n");
 //duyet tu 1-n
  for (let i = 2;i<n; i++) {
      checkPrime = true;
      for (let j = 0; j <= Math.sqrt(i) ; j++) {
         if (i%j ==0) {
          checkPrime = false;
          break;
         }

      }
      if (checkPrime) {
          console.log("Số nguyên tố: ",i);
      }
  
  }