//Logic Challenge - Mencari Modus

function cariModus(arr) {
    // you can only write your code here!
    var tempJml = [];
    var modus = 1;
    var posisiModus;
    //mencari jml angka yang sama
    for (var i = 0; i < arr.length; i++) {
        var jml = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                jml++
            }
        }
        tempJml.push(jml);
    }
    //mencari modus
    loopingModus:
    for (var i = 0; i < tempJml.length; i++) {
        if (modus < tempJml[i]) {
            modus = tempJml[i]
            posisiModus = i;
        } else {
            continue loopingModus;
        }
    }
    //output modus sesuai soal
    if (modus === 1) {
        return -1
    } else if (modus === arr.length) {
        return -1
    } else {
        return arr[posisiModus];
    }
};
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1