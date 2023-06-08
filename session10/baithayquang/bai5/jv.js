let htmlPoint = +prompt("Nhập điểm HTML");
        let cssPoint = +prompt("Nhập điểm CSS");
        let javascriptPoint = +prompt("Nhập điểm Javascript");
        let gpa = (htmlPoint + cssPoint + javascriptPoint) /3;
        alert("diem trung binh" +gpa);
        if (gpa <5) {
            console.log("Xếp loại Yếu");
        } else if (gpa <6) {
            console.log("Xếp loại Kém");
        } else if (gpa <7) {
            console.log("Xếp loại Trung bình");
        } else if (gpa <8) {
            console.log("Xếp loại Khá");
        } else if (gpa < 9) {
            console.log("Xếp loại Giỏi");
        } else {
            console.log("Xếp loại Xuất sắc");
        } 