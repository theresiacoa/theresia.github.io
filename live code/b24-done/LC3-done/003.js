/*
 * Array of Object
 * ----------------------------
 * Buatlah code validation untuk setiap user yang terdaftar
 * code validation merupakan hasil dari pertukaran karakter indexk ganjil dan genap dari nama user
 * ditambah tanggal bulan dan tahun join. Jika index huruf terakhir adalah genap maka tidak memiliki pasangan
 * maka huruf terakhir tersebut tidak mengalami proses pertukaran.
 *
 * contoh
 *  user aldo join pada 22 08 2018 maka validation codenya laod22092018
 */

function addValidationCode(users) {
  //var hasil = '';
  var obj = {};
  var arr = [];
  
  for (var i = 0; i < users.length; i++) {
    obj = {
      name: users[i].name
    }

    nama = users[i].name;
    var reversedNama = reversed(nama);
    var date = users[i]['join date'].split('-').join('');
    obj.validationCode = reversedNama + date;
    arr.push(obj);
  }
  return arr;
}

function reversed(nama) {
  var result = '';
  for (var j = 0; j < nama.length; j += 2) {
    if (nama.length % 2 === 1 && j == nama.length - 1) {
      result += nama[j];
    } else {
      result += nama[j + 1] + nama[j];
    }
  }
  return result;
}

//Test case
console.log(addValidationCode([
  {
    name: 'Antonio',
    'join date': '09-08-2018'
  },
  {
    name: 'Banderaz',
    'join date': '10-08-2018'
  },
]));
/**
 Hasil Output
 [
  {
    name: 'Antonio',
    validationCode: 'nAotino09082018'
  },
  {
    name: 'Banderaz',
    validationCode: 'aBdnreza10082018'
  },
]
 */
// console.log(addValidationCode([
//   {
//     name: 'Cecile',
//     'join date': '01-02-2018'
//   },
//   {
//     name: 'Dominique',
//     'join date': '10-09-2018'
//   },
// ]));
/**
 Hasil Output
 [
  {
    name: 'Cecile',
    validationCode: 'eCicel01022018'
  },
  {
    name: 'Dominique',
    validationCode: 'oDiminuqe10092018'
  },
]
 */
// console.log(addValidationCode([]));
/**
 Hasil Output
 []
 */
