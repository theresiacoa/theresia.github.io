/*
Absolute Winner!

Pada sebuah turnamen ada 3 orang yang berkompetisi untuk menjadi juara utama.
Apabila jumlah 'Bakugo' dalam array lebih besar dari jumlah 'Midoriya' dan 'Todoroki', maka function akan mereturn "Bakugo won the tournament!".
Apabila jumlah 'Midoriya' dalam array lebih besar dari jumlah 'Bakugo' dan 'Todoroki', maka function akan mereturn "Midoriya won the tournament!".
Apabila jumlah 'Todoroki' dalam array lebih besar dari jumlah 'Bakugo' dan 'Midoriya', maka function akan mereturn "Todoroki won the tournament!".
Apabila ada jumlah yang sama dan jumlah tersebut merupakan jumlah terbesar, tampilkan "There are no clear winner!";


[RULE]
- Wajib menuliskan algoritma/pseudocode. Tidak ada algoritma / algoritma tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
*/

/* PSEUDOCODE

STORE 'baku' with any value
STORE 'mido' with any value
STORE 'todo' with any value

FOR loop with the length of winners (index equals to 0)
  IF 'winners' with index value equals to 'Bakugo' THEN
    add 'baku' by one
  ELSE IF 'winners' with index value equals to 'Midoriya' THEN
    add 'mido' by one
  ELSE IF 'winners' with index value equals to 'Todoroki' THEN
    add 'todo' by one
  END IF
END LOOP

IF 'baku' > 'todo' AND 'baku' > 'mido' THEN
  DISPLAY  "Bakugo won the tournament!"
ELSE IF 'mido' > 'todo' AND 'mido' > 'baku' THEN
  DISPLAY  "Midoriya won the tournament!"
ELSE IF 'todo' > 'baku' AND 'todo' > 'mido' THEN
  DISPLAY  "Todoroki won the tournament!"
ELSE
  DISPLAY "There are no clear winner!"
 */

function absoluteWinner (winners) {
  var mido = 0;
  var todo = 0;
  var baku = 0;

  for (var i = 0; i < winners.length; i++) {
    if (winners[i] === 'Bakugo') {
      baku++;
    } else if (winners[i] === 'Todoroki') {
      todo++;
    } else {
      mido++;
    }
  }

  if (baku > mido && baku > todo) {
    return "Bakugo won the tournament!";
  } else if (mido > baku && mido > todo) {
    return "Midoriya won the tournament!";
  } else if (todo > mido && todo > baku) {
    return "Todoroki won the tournament!";
  } else {
    return "There are no clear winner!";
  }

}

console.log(absoluteWinner(['Bakugo', 'Bakugo', 'Midoriya'])); // "Bakugo won the tournament!"
console.log(absoluteWinner(['Todoroki', 'Bakugo', 'Midoriya', 'Todoroki'])); // "Todoroki won the tournament!"
console.log(absoluteWinner(['Midoriya', 'Midoriya', 'Midoriya'])); // "Midoriya won the tournament!"
console.log(absoluteWinner(['Bakugo'])); // "Bakugo won the tournament!"
console.log(absoluteWinner([])); // "There are no clear winner!"
