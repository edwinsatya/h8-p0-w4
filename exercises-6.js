//Logic Challenge - Digit Perkalian Minimum

function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var dpm = [];
    var angkaBagi;
    var totalLength = [];
    //looping untuk mencari faktorisasinya
    for (var i = 1; i <= angka; i++) {
        var temp = '';
        if (angka % i === 0) {
            angkaBagi = angka / i;
            temp += i;
            temp += angkaBagi;
            dpm.push(temp);
        }
    }
    //looping untuk menentukan length setiap index
    for (var i = 0; i < dpm.length; i++) {
        var tempJmlLength = 0;
        tempJmlLength += dpm[i].length;
        totalLength.push(tempJmlLength);
    }
    totalLength.sort();
    return totalLength[0];
};  
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2