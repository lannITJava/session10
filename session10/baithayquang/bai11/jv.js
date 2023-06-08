let sum=0;
let i=1;
let n = +prompt("Nhập vào số nguyên n");
while (i<n) {
    if (n%i==0) {
         sum +=i;
    }
    i++;
}
if (sum ==n) {
    console.log("Đây là số hoàn hảo");
} else {
    console.log("Đây không phải là số hoàn hảo");
}