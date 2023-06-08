let sum = 0;//buoc 1
//buoc 2
do {
    let number = +prompt("Nhập vào một số");//buoc3
    // Buoc 4
    if (number > 0) {
        sum += number;
    } else {
        break;
    }
} while (true);
console.log("Tổng các số là: ",sum);