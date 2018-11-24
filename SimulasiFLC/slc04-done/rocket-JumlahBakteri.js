/*
==========
Bakteri (Rekursif)
==========

[DESKRIPSI]
Teman kamu sedang melakukan penelitian sains. Awalnya ia menyimpan 1
bakteri di dalam sebuah kotak. Setiap harinya, setiap bakteri akan
membagi menjadi N bakteri. Setelah itu, teman kamu akan menambahkan B bakteri
ke dalam kotak itu. Bantulah temanmu mencari jumlah bakteri pada hari ke-i
menggunakan rekursi!

[INSTRUKSI]
Tersedia 3 paremater sebagai inputan yang merupakan sebuah interger:
	1) N : jumlah bakteri setelah pembagian satu bakteri
	2) B : jumlah bakteri yang ditambahkan ke dalam kotak setiap hari
	3) i : hari yang kita ingin tahu jumlah bakterinya
Output: jumlah bakteri pada hari ke-i
[CONTOH]
1) N = 2, B = 3, i = 3		--> 13
*/

function jumlahBakteri(N, B, i) {
	if (i === 1) {
		return 1;
	} 
	return (jumlahBakteri(N, B, i-=1) * N ) + B;
}

console.log(jumlahBakteri(3, 4, 1));	// 1
console.log(jumlahBakteri(1, 3, 5));  // 13
/*
hari 1 --- 1;
hari 2 --- 1 * 1(N) = 1 + 3(B) = 4
hari 3 --- 4 * 1(N) = 4 + 3(B) = 7
hari 4 --- 7 * 1(N) = 7 + 3(B) = 10
hari 5 --- 10 * 1(N) = 10 + 3(B) = 13
*/


console.log(jumlahBakteri(5, 2, 3));  // 37
/*
hari 1 --- 1;
hari 2 --- 1 * 5(N) = 5 + 2(B) = 7
hari 3 --- 7 * 5(N) = 35 + 2(B) = 37
 */

console.log(jumlahBakteri(5, 0, 5));  // 625