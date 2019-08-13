//Logic Challenge - Faktor Persekutuan Terbesar

function fpb(angka1, angka2) {
    // you can only write your code here!
    var temp1 = [];
    var temp2 = [];
    for (var i = 1; i < angka1; i++) {
        if (angka1 % i === 0) {
            temp1.push(i);
        }
        if (angka2 % i === 0) {
            temp2.push(i);
        }
    }
    if (temp1.length > temp2.length) {
        for (var i = temp1.length-1; i >= 0; i--) {
            for (var j = temp2.length-1; j >= 0; j--) {
                if (temp1[i] === temp2[j]) {
                    return temp1[i];
                }
            }
        }
    } else if (temp2.length > temp1.length) {
        for (var i = temp2.length-1; i >= 0; i--) {
            for (var j = temp1.length-1; j >= 0; j--) {
                if (temp2[i] === temp1[j]) {
                    return temp2[i];
                }
            }
        }
    } else {
        for (var i = temp1.length-1; i >= 0; i--) {
            for (var j = temp2.length-1; j >= 0; j--) {
                if (temp1[i] === temp2[j]) {
                    return temp1[i];
                }
            }
        }
    }
};
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1