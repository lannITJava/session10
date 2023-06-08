let number = +prompt("Nhập vào một số nguyên");
let digit;
let i= "";
while (number>0) {
    digit = number%10;
    number = Math.floor(number/10);
    i += digit;
}
console.log("Số đảo ngược là: ",i);