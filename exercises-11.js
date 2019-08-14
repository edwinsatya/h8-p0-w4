//Logic Challenge - Shopping Time!

function shoppingTime(memberId, money) {
    // you can only write your code here!
    var listBarang = [
        ['Sepatu Stacattu', 1500000],
        ['Baju Zoro', 500000],
        ['Baju H&N', 250000],
        ['Sweater Uniklooh', 175000],
        ['Casing Handphone', 50000]
    ];

    var result = {};
    
    if ((memberId && money) === undefined || memberId.length === 0) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    } else {
        var uangAda = false;
        loopingListBarang:
        for (var i = 0; i < listBarang.length; i++) {
            if (money < listBarang[i][1]) {
                continue loopingListBarang;
            } else {
                uangAda = true;
            }
        }
    }
    if (uangAda) {
        var uangCukup = true;
        result.memberId = memberId;
        result.money = money
        var listPurchased = [];
        while (uangCukup) {
            for (var i = 0; i < listBarang.length; i++) {
                if (money - listBarang[i][1] >= 0) {
                    listPurchased.push(listBarang[i]);
                    money -= listBarang[i][1]
                } else {
                    continue;
                }
            }
            uangCukup = false;
        }
        result.push(listPurchased);
    } else {
        return 'Mohon maaf, uang tidak cukup'
    }
    return result;  
};
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja