let resource ;
do {
    resource = +prompt("Nhập vào số nhiên liệu");
    if (isNaN(resource)) {
        alert("Vui lòng nhập số nhiên liệu là một số");
    } else {
        if (resource<5000 || resource>30000) {
            alert("Vui lòng nhập số nhiên kiệu có giá trị trong khoảng 5000-300000");
        } else {
            break;
        }
    }
} while (true);
let pilot;
do {
    pilot = +prompt("Nhập vào số phi hành gia");
    if (isNaN(pilot)) {
        alert("Vui lòng nhập số phi hành gia là một số");
    } else {
        if (pilot <1 || pilot >7) {
            alert("Vui lòng nhập số phi hành gia trong khoảng 1-7");
        } else {
            break;
        }
    }
} while (true);
let resource50Km = 100*pilot;
let times = Math.floor(resource/resource50Km);
let maxHeight =times * 50;
let resourceRemain = resource%resource50Km;
alert("Độ cao tối đa: "+ maxHeight + " -Số nhiên liệu còn lại: " +resourceRemain);