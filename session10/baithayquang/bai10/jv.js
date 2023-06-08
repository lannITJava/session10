let n = +prompt("Nhập vào một số nguyên");
let i=2;
if (n >2) {
    while (i<= (n-1)) {
        
        if (n%i==0) {
            console.log("Đây không phải là số nguyên tố");
            break;
        }else{
            console.log("Đây là số nguyên tố");
        }
        i++;

    }
} else if (n=2) {
    console.log("Đây là số nguyên tố");
    
} else {
    console.log("Đây không phải là số nguyên tố");
}



