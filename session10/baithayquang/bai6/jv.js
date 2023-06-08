let a = +prompt("Nhập vào cạnh thứ nhất");
let b = +prompt("Nhập vào cạnh thứ hai");
let c = +prompt("Nhập vào cạnh thứ ba");
if (a+b>c && a+c>b && b+c>a) {
    let isosceles = false;
    if (a ==b || b==c || a==c) {
        isosceles = true;
    }
    let equilateral = false;
    if (a==b && b==c) {
        equilateral =true;
    }
    let square = false;
    if (a*a==b*b+c*c || b*b==a*a+c*c || c*c==a*a+b*b) {
        square = true;
    }
    if (equilateral) {
        console.log("Đây là ba cạnh tam giác đều");
    } else {
        if (isosceles) {
            if (square) {
                console.log("Đây là ba cạnh tam giác vuông cân");
            } else {
                console.log("Đây là ba cạnh tam giác cân");
            }
        } else {
            if (square) {
                console.log("Đây là ba cạnh tam giác vuông");
            } else {
                console.log("Đây là ba cạnh tam giác bình thường");
            }
        }
    }
} else {
   console.log("Đây không phải là ba cạnh tam giác");
}