/*
==================================
Array Mastery: Who's the winner?
==================================
Nama:________
[INSTRUKSI]
Ada dua tim, Gryffindor dan Slytherin yang sedang bertarung pada sebuah kompetisi futsal.

Function whosTheWinner akan menerima suatu parameter beruapa array berisikan nama
tim yang sudah mencetak gol. 
Apabila pada array jumlah "Gryffindor" lebih banyak daripada "Slytherin"
  maka function akan mereturn "Gryffindor Juara Futsal Hogwarts 2018".
Sedangkan jika jumlah "Slytherin" lebih banyak daripada "Gryffindor" 
  maka function akan mereturn "Slytherin Juara Futsal Hogwarts 2018". 
Jika jumlah kedua tim sama,
  maka function akan mereturn "Draw, pertandingan akan dilanjutkan dengan penalty kick!"

Let's start our own wizardy, shall we?

[RULE]
- Wajib menuliskan algoritma/pseudocode. Tidak ada algoritma/pseudocode atau
  algoritma/pseudocode tidak match dengan kode maka indikasi soal tidak
  diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .map, .filter, atau .reduce!

*/

//ALGORITMA
/*
1. store jumlahGryff with 0 value (num)
2. Store jumlahSlyth with 0 value (num)
3. loop each value of goals with increment index-i and go to 4
4. if goals index-i is gryffindor, add jumlahGryff by 1
5. else, add jumlahSlyth by 1
6. after the loop is done, go to 7
7. if jumlahGryff is greater than jumlahSlyth then go to 7a, else go to 8
  7a. DISPLAY "Gryffindor Juara Futsal Hogwarts 2018".
8. else if jumlahSlyth is greater than jumlahGryff then go to 8a, else go to 9
  8a. display "Slytherin Juara Futsal Hogwarts 2018". 
9. else display "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
 */


function whosTheWinner(goals) {
  var jumlahGryff = 0;
  var jumlahSlyth = 0;

  for (var i = 0; i < goals.length; i++) {
    if (goals[i] === 'Gryffindor') {
      jumlahGryff++;
    } else {
      jumlahSlyth++;
    }
  }
  
  if (jumlahGryff > jumlahSlyth) {
    return "Gryffindor Juara Futsal Hogwarts 2018";
  } else if (jumlahSlyth > jumlahGryff) {
    return "Slytherin Juara Futsal Hogwarts 2018";
  } else {
    return "Draw, pertandingan akan dilanjutkan dengan penalty kick!";
  }
}

// TEST CASES
console.log(whosTheWinner(["Gryffindor", "Slytherin", "Slytherin"])); // "Slytherin Juara Futsal Hogwarts 2018"
console.log(whosTheWinner(["Gryffindor", "Gryffindor", "Slytherin", "Slytherin", "Gryffindor"])); // "Gryffindor Juara Futsal Hogwarts 2018"
console.log(whosTheWinner(["Gryffindor", "Slytherin"])); // "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
console.log(whosTheWinner([])); // "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
console.log(whosTheWinner(["Slytherin"])); // "Slytherin Juara Futsal Hogwarts 2018"
