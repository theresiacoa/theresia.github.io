/*
================
mendaliAsianGames
================

[INSTRUCTIONS]

mendaliAsianGames adalah sebuah function yang menerima satu parameter berupa array multidimensi yang berisi nama negara dan perolehan mendali.
function tersebut akan menghitung jumlah mendali emas, perak dan perunggu.
dan function akan mereturn sebuah array of object disertai jumlah masing2 perolehan mendali.

jika tidak ada data pada array yang diinput, maka outpunya 'no data'

[EXAMPLE]
mendaliAsianGames([[
  ['Indonesia', 'emas'],
  ['India', 'perak'],
  ['Korea Selatan', 'emas'],
  ['India', 'perak'],
  ['India', 'emas'],
  ['Indonesia', 'perak'],
  ['Indonesia', 'emas']
]])

output:
[ { negara: 'Indonesia', emas: 2, perak: 1, perunggu: 0 },
  { negara: 'India', emas: 1, perak: 2, perunggu: 0 },
  { negara: 'Korea Selatan', emas: 1, perak: 0, perunggu: 0 } ]

*/

function mendaliAsianGames(array) {
  var obj = {};
  for (var i = 0; i < array.length; i++) {
    if (obj[array[i][0]] === undefined) {
      obj[array[i][0]] = {
        negara: array[i][0],
        emas: 0,
        perak: 0,
        perunggu: 0 }
    }
    obj[array[i][0]][array[i][1]] += 1;
  }

  if (array.length === 0) {
    return 'no data';
  }
  return Object.values(obj);
}

console.log(
  mendaliAsianGames([
    ["Indonesia", "emas"],
    ["India", "perak"],
    ["Korea Selatan", "emas"],
    ["India", "perak"],
    ["India", "emas"],
    ["Indonesia", "perak"],
    ["Indonesia", "emas"]
  ])
);
/*
[ { negara: 'Indonesia', emas: 2, perak: 1, perunggu: 0 },
  { negara: 'India', emas: 1, perak: 2, perunggu: 0 },
  { negara: 'Korea Selatan', emas: 1, perak: 0, perunggu: 0 } ]
*/

console.log(mendaliAsianGames([
  ['Iran', 'emas'],
  ['Thailand', 'emas'],
  ['Malaysia', 'perunggu'],
  ['Thailand', 'perunggu'],
  ['Singapura', 'emas'],
  ['Singapura', 'emas'],
  ['Laos', 'perak']
]));

/*
[ { negara: 'Iran', emas: 1, perak: 0, perunggu: 0 },
  { negara: 'Thailand', emas: 1, perak: 0, perunggu: 1 },
  { negara: 'Malaysia', emas: 0, perak: 0, perunggu: 1 },
  { negara: 'Singapura', emas: 2, perak: 0, perunggu: 0 },
  { negara: 'Laos', emas: 0, perak: 1, perunggu: 0 } ]
*/

console.log(mendaliAsianGames([])) // no data
