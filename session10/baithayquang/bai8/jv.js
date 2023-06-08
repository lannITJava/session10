
let n = +prompt("nhap vap 1 so nguyen n");
let i = 1;
let sum = 0 ;
while (i <= n) {
    i++;
    if (i % 2 == 0) {
        console.log("Các số chẵn là: ",i);
         sum += i;
        
    }
}
console.log("Tổng các số chẵn là: ", sum);
