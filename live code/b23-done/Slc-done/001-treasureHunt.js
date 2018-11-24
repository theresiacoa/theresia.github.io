/*
================
Treasure Hunter
================
[INSTRUCTIONS]
treasureHunt adalah sebuah function yang menerima satu parameter berupa string.
function akan mereturn berapa banyak jumlah harta karun (simbol) yang ada di dalam string tersebut.
harta karun atau simbol yang dicari adalah:
'!', '@', '#', '$', '%', '^', '&', '*', '(', ')'
Jika tidak ada simbol pada string tersebut, maka function akan mereturn 'harta karun tidak ditemukan'
[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string & array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!
[EXAMPLE]
treasureHunt("alskdj*lakjsd761^%")
output: 3

1. WAJIB MENULISKAN PSEUDOCODE ATAU ALGORITHMA, JIKA PSEUDOCODE ATAU ALGORITHMA TIDAK MATCH MAKA ATAU TIDAK ADA
   MAKA PROGRAM DIANGGAP TIDAK JALAN
*/

//parameter string
//return nya berapa banyak jumlah simbol
//simbolmya ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

/*
ALGORITHM
1. Buat variable 'counter' dengan nilai 0
2. Buat variable 'simbol' dengan nilai ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
3. Lakukan perulangan pada 'simbol' dengan variable 'i', dimana 'i' memiliki nilai 0, dan dengan limit panjang dari 'simbol', lalu tambahkan nilai 'i' dengan 1 pada setiap putaran
        a. Lakukan perulangan pada 'str' dengan variable 'j' dimana 'j' memiliki nilai 0, dan dengan limit panjang dari 'str', lalu tambahkan nilai 'j' dengan 1 pada tiap putaran
            1. Masukkan kondisi dimana jika nilai 'simbol' pada index 'i' sama dengan nilai 'str' pada index 'j' maka tambahkan nilai 'counter' dengan 1
            2. Kondisi selesai
        b.  Perulangan selesai
4. Perulangan selesai
5. Masukkan kodisi dimana jika nilai 'counter' sama dengan 0 maka kembalikan 'harta karun tidak ditemukan'
6 Kembalikan nilai 'counter'
7. SELESAI
*/

function treasureHunt(str) {
  var symbol = '!@#$%^&*()';
  var counter = 0;

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < symbol.length; j++) {
      if (str[i] === symbol[j]) {
        counter++;
      }
    }
  }
  if (counter === 0) {
    return 'harta karun tidak ditemukan';
  }
  return counter;
}

console.log(treasureHunt("alskdj*lakjsd761^%")); // 3
console.log(treasureHunt("4pa!n!")); // 2
console.log(treasureHunt("bin*ngbin*ang@!*&^")); // 7
console.log(treasureHunt("sandiKhusus")); // 'harta karun tidak ditemukan'
console.log(treasureHunt("ki(*^hasd*&^%ja(*")); // 9
