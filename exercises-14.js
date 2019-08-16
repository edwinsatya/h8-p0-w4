//Logic Challenge - Naik Angkot

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var result = [];

    if (arrPenumpang.length === 0) {
        return result;
    } else {
        for (var i = 0; i < arrPenumpang.length; i++) {
            var newObj = {};
            var bayar = 0;
            newObj.penumpang = arrPenumpang[i][0];
            newObj.naikDari = arrPenumpang[i][1];
            newObj.tujuan = arrPenumpang[i][2];
            for (var j = 0; j < rute.length; j++) {
                if (newObj.naikDari === rute[j]) {
                    for (var k = j; k < rute.length; k++) {
                        if (rute[k] === newObj.tujuan) {
                            break;
                        } else {
                            bayar += 2000;
                        }
                    }
                }
            }
            newObj.bayar = bayar;
            result.push(newObj);
        }
    }
    return result;
};
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]