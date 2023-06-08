let a = +prompt("Nhập vào số thứ nhất");
let b = +prompt("Nhập vào số thứ hai");
let c = +prompt("Nhập vào số thứ ba");
if (a*b*c > 0) {
    console.log("Dấu của tích ba số là dấu +");
} else if (a*b*c < 0) {
    console.log("Dấu của tích ba số là dấu -");
} else {
    console.log("Tích ba số bằng 0");
} 