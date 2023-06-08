
let reversedNumber= "";
let digit;
let number = +prompt("Nhập vào một số nguyên");

while (number>0) {
    digit = number%10;
    number =Math.floor(number/10);
    reversedNumber += digit;
}
console.log("Số đảo ngược: "+reversedNumber);

