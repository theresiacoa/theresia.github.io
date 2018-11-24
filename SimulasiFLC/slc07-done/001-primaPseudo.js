/*
PROBLEM
=======
Bilangan prima adalah sebuah bilangan dimana hanya bisa habis dibagi oleh angka 1 
dan angka itu sendiri.
Contoh:
7 adalah bilangan prima, karena hanya habis dibagi angka 1 dan 7.
22 bukan bilangan prima, karena habis dibagi 1, 2, 11, dan 22.

BUATLAH sebuah pseudocode untuk membuat program bilangan prima!
note: pastikan tidak menggunakan sintaks javascript, tapi fokus ke logika

REMINDER ABOUT PSEUDOCODE
=========================
Contoh Pseudocode yang Kurang Tepat (tidak ada hubungan dengan soal):
var num
for i = 0 , i < 8, i++
  if i = 5
    num++

Contoh Pseudocode yang Benar (tidak ada hubungan dengan soal):
STORE num with any value
WHILE i < 8
  IF i equals to 5
    ADD num by 1
*/
// PSEUDOCODE
/*
STORE 'num' with any number

FOR each increment index(i) by 1 until 'num' value -- index(i) starting value is 2)
  STORE 'isPrime' with TRUE
  FOR each increment index(j) by 1 until index(i) value -- index(j) starting value is 2)
    IF index(i) mod index(j) equals to 0 AND index(i) is NOT equals to index(j) THEN
      STORE 'isPrime' with FALSE
      DISPLAY 'the num is not a prime number'
    END IF
  END LOOP

  IF 'isPrime' is TRUE THEN
    DISPLAY 'the num is a prime number'
  END IF
END LOOP
*/

