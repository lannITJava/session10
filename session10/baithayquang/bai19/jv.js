for (let i = 1; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        for (let k = 0; k < 10; k++) {
            let sum = i*i*i + j*j*j + k*k*k;
            let number = i*100 + j*10 + k;
            if (sum == number) {
                console.log("Số Armstrong: ",i,j,k);
            }
        }
    }
}