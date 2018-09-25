
function shoppingTime(memberId, money) {
  var object = {};

  if (memberId === '' || memberId === undefined) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  } else if (money < 50000) {
    return '';
  } else {

    var cost = [];
    cost.push(['Sepatu brand Stacattu', 1500000]);
    cost.push(['Baju Zoro', 500000]);
    cost.push(['Baju H&N', 250000]);
    cost.push(['Sweater Uniklooh', 175000]);
    cost.push(['Casing Handphone', 50000]);

    object.memberId = memberId;
    object.money = money;

    var barang = [];
    for (var i = 0; i < cost.length; i++) {
      if (money >= cost[i][1]) {
        money -= cost[i][1];
        barang.push(cost[i][0]);
      }
    }
    object.listPurchased = barang;
    object.changeMoney = money;
    return object;
  }
}

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
console.log(shoppingTime('234JdhweRxa53', 15000)); //
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja