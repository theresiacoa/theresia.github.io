/**
---------------------
First Letter Grouping
---------------------
Diberikan sebuah variabel `name`. Buatlah sebuah script untuk menampilkan nama tersebut
berada di group ke-berapa, dengan aturan sebagai berikut:
- Jika huruf pertama dari `name` adalah a, b, c, d maka tampilkan 'Masuk group pertama'
- Jika huruf pertama dari `name` adalah e, f, g, h maka tampilkan 'Masuk group kedua'
- Selain itu tampilkan 'Masuk group terakhir'
Contoh:
- `name` = 'dimitri', output: 'Masuk group pertama'
- `name` = 'icha', output: 'Masuk group kedua'
- `name` = 'taufik', output: 'Masuk group terakhir'
- `name` = 'sergei', output: 'Masuk group terakhir'
*/


var nama = 'simitri';

if (nama[0] == 'a' || nama[0] == 'b' || nama[0] == 'c' || nama[0] == 'd') {
  console.log('Masuk group pertama');
} else if (nama[0] == 'e' || nama[0] == 'f' || nama[0] == 'g' || nama[0] == 'h') {
  console.log('Masuk group kedua');
} else {
  console.log('Masuk group terakhir');
}