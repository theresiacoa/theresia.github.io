/**

How Many Gifts
==============

Anastasia meminta Sergei untuk membeli daftar oleh-oleh saat trip berikutnya, 
sekarang Sergei ingin tahu berapa jumlah oleh-oleh PALING BANYAK yang bisa dia beli.

Implementasikan function dibawah untuk membantu Sergei:

function howManyGifts(maxBudget, gifts) Parameter pertama adalah budget Sergei, 
yang kedua adalah sebuah Array yang berisi harga setiap oleh-oleh.
Function ini harus mengembalikan nilai yang mewakili jumlah maksimum oleh-oleh 
yang Sergei dapat beli.


Contoh:
Maximum budget: 25000
Daftar harga oleh-oleh: [20000, 5000, 10000, 6000, 4000 ]
Maka akan mengembalikan 4 karena bisa membeli oleh-oleh dengan harga 5000, 10000, 6000, 4000

Asumsi:
- Semua angka akan memiliki nilai >= 0, dan array tidak akan pernah kosong.

RULE:
 WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE

*/

// ALGORITMA
/*
1. Sorting the gifts value from the lowest to the highest value
2. store counter value with zero
2. loop the gifts value and go to 3
3. if the maxBudgets is greater than equals to gifts value then go to 4
4. set maxBudget value by dividing it with gifts value & add counter value by one
5. after the looping is done, display counter value
 */

function howManyGifts(maxBudget, gifts){

  //sorting
  for (var i = 0; i < gifts.length; i++) {
    if (gifts[i] > gifts[i+1]) {
      var temp = gifts[i];
      gifts[i] = gifts[i+1];
      gifts[i+1] = temp;
      i =-1;
    }
  }
  
  var counter = 0;
  for (var j = 0 ; j < gifts.length; j++) {
    if (maxBudget >= gifts[j]) {
      maxBudget -= gifts[j];
      counter++;
    }
  }
  return counter;
}

console.log(howManyGifts(30000, [15000, 12000, 5000, 3000, 10000])); // 4
console.log(howManyGifts(10000, [2000, 2000, 3000, 1000, 2000, 10000])); // 5
console.log(howManyGifts(4000, [7500, 1500, 2000, 3000])); // 2
console.log(howManyGifts(50000, [25000, 25000, 10000, 15000])); // 3
console.log(howManyGifts(0, [10000, 3000])); // 0
