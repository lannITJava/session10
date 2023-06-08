//Nhap tien gui, lai suat nam, so thang gui,
let amount = +prompt("Nhập số tiền gửi");
let rate = +prompt("Lãi suất năm");
let months = +prompt("Số tháng gửi");
//lai suat thang
let rateMonth = rate/12;
//Tong so tien lai
let interest = 0;
//duyet cac thang gui-->Tinh tien lai hang thang
for (let i = 1; i<= months ; i++) {
    //Tinh lai
    let interestMonth = rateMonth *amount /100;
    //Lai nhap goc
    amount += interestMonth;
    //Cong don tien lai
    interest += interestMonth;
}
//In
console.log("Tiền nhận sau khi kết thúc gửi là: ",amount);
console.log("Tiền lãi nhận được sau khi kết thúc gửi là: ",interest);
