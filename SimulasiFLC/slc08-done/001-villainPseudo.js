/*
==============
Catch Me if You Can
==============
Instruksi
=========
Seorang detektif sedang mengejar pelaku-pelaku kejahatan. Pelaku-pelaku kejahatan
ini akan memasang beberapa jebakan secara acak agar detektif tidak menangkap mereka.
Detektif memiliki 3 "nyawa", setiap detektif terkena jebakan maka "nyawa" dari detektif ini akan berkurang.
Buatlah sebuah algoritma/pseudocode yang akan menerima sebuah inputan array yang isinya adalah string berupa:
 - '@' adalah jebakan yang dipasang oleh pelaku-pelaku kejahatan
 - '*' adalah jalanan biasa
 - 'Villain' adalah pelaku kejahatan
Dimana function ini akan mengembalikan berapa banyak villain yang berhasil detektif tangkap.
Contoh
-------
1. inputan: ['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain']
   output: Nice work, detective! You got all villains: 2
2. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain', 'Villain', '@']
   output: Ooops, you die. You got 3 villains
3. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain',  '@', 'Villain']
   output: Ooops, you die. You got 2 villains
*/


//3 nyawa --- @ adl jebakan; * jalan

// Algoritma / Pseudocode here..
/*
STORE 'nyawa' with 3 (num)
STORE 'jumlahVil' with 0 (num)

FOR each value of the 'input' with increment index(i) by 1
  IF 'input' index(i) equals to '@' THEN
    MINUS 'nyawa' by 1
  IF 'input' index(i) equals to 'Villain' AND 'nyawa' > 0 THEN
    ADD 'jumlahVil' by 1
  END IF
END LOOP

IF 'nyawa' equals to 0 THEN
  DISPLAY "Ooops, you die. You got 'jumlahVil' villains"
ELSE 
  DISPLAY "Nice work, detective! You got all villains: 'jumlahVil"
END IF
*/