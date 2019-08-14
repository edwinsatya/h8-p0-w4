//Logic Challenge - Shopping Time!

function shoppingTime(memberId, money) {
    // you can only write your code here!
    var result = {};
    var listSale = [
       {
            barang: 'Sepatu Stacattu',
            harga: 1500000,
        },
        {
            barang: 'Baju Zoro',
            harga: 500000,
        },
        {
            barang: 'Baju H&N',
            harga: 250000,
        },
        {
            barang: 'Sweater Uniklooh',
            harga: 175000,
        },
        {
            barang: 'Casing Handphone',
            harga: 50000,
        },
    ]
   
    if (memberId === '' || money === undefined) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    } else {
        var uangAda;
        for (var i = 0; i < listSale.length; i++) {
            if (money >= listSale[i].harga) {
                uangAda = true;
            } 
            if (uangAda) {
                break;
            }
        }
        if (!uangAda) {
            return 'Mohon maaf, uang tidak cukup';
        }
        result.memberId = memberId;
        result.money = money;
        var listPembelian = [];
        var uangCukup = true;
        while (uangCukup) {
            for (var j = 0; j < listSale.length; j++) {
                if (money >= listSale[j].harga) {
                    listPembelian.push(listSale[j].barang);
                    money = money - listSale[j].harga;
                } else {
                    continue;
                }
            }
            uangCukup = false;
        }
        result.listPurchased = listPembelian;
        result.changeMoney = money;
        return result;
    }
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