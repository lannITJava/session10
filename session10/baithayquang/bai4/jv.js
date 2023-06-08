let number1 = +prompt("Nhập vào số thứ nhất");
        let number2 = +prompt("Nhập vào số thứ hai");
        let calculation = prompt("Nhập vào phép tính");
        switch (calculation) {
            case "+":
                result = number1 + number2;
                break;
            case "-":
                result = number1 - number2;
                break;
            case "*":
                result = number1 * number2;
                break;
            case "/":
                result = number1 / number2;
                break;
            default:
                result = number1 % number2;
        }
        document.write("Kết quả phép tính là: "+result);