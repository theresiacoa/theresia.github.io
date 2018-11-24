/**

How Many Gifts
==============

Anastasia meminta Sergei untuk membeli daftar oleh-oleh saat trip berikutnya, 
sekarang Sergei ingin tahu berapa jumlah oleh-oleh PALING BANYAK yang bisa dia beli.

Implementasikan function dibawah untuk membantu Sergei:

function howManyGifts(maxBudget, gifts)
  Parameter pertama adalah budget Sergei, yang kedua adalah sebuah Array yang berisi harga setiap oleh-oleh. 
  Function ini harus mengembalikan nilai yang mewakili jumlah maksimum oleh-oleh yang Sergei dapat beli.


# Contoh:
Maximum budget: 25000
Daftar harga oleh-oleh: [20000, 5000, 10000, 6000, 4000 ]
Maka akan mengembalikan 4 karena bisa membeli oleh-oleh dengan harga 5000, 10000, 6000, 4000

# Asumsi:
- `maxBudget` akan memiliki nilai >= 0, dan array `gifts` tidak akan pernah kosong.

# Aturan coding:
- WAJIB menyertakan algoritma / pseudocode

*/

/* ALGORITMA

1. store result with zero value (num)
2. loop every gifts value, sort according to increasing value 
3. After that, loop again the sorted gifts. For every sorted gifts,
  3a. if maxBudget is greater than equals to gifts value then go to step 3aa
    3aa. minus the maxBudget value with gifts value 
    3ab. add result by one
4. after the looping is done, display the result

*/

function howManyGifts(maxBudget, gifts){
  var result = 0;

  for (var i = 0; i < gifts.length -1; i++) {
    if (gifts[i] > gifts[i+1]) {
      var temp =  gifts[i];
      gifts[i] = gifts[i+1];
      gifts[i+1] = temp;
      i = -1;
    }
  }
  //console.log(gifts);

  for (var j = 0; j < gifts.length-1; j++) {
    //console.log(maxBudget, result, '====', gifts[i]);
    if (maxBudget >= gifts[j]) {
      maxBudget -= gifts[j];
      result++;
    }
  }
  return result;
}

console.log(howManyGifts(30000, [15000, 12000, 5000, 3000, 10000])); // 4
console.log(howManyGifts(10000, [2000, 2000, 3000, 1000, 2000, 10000])); // 5
console.log(howManyGifts(4000, [7500, 1500, 2000, 3000])); // 2
console.log(howManyGifts(50000, [25000, 25000, 10000, 15000])); // 3
console.log(howManyGifts(0, [10000, 3000])); // 0
