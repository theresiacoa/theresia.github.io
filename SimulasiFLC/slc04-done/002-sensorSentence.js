/*
================
SENSOR SENTENCE
================
description: Sebuah fungsi yang akan mendeteksi apakah kalimat tersebut merupakan kalimat yang
tidak baik dan akan mengembalikan nilai kalimat yang telah di sensor

rules:
1. Wajib menggunakan Pseudocode/ Algoritma
2. tidak boleh menggunakan built in function .filter(), .map(), .split(), .findIndex(), indexOf(), .join()
3. tidak boleh menggunakan REGEX, seperti .match, .replace


examples:
JIKA INPUT KALIMAT = 'HAHAHA PAYAH LOOO' dan INPUT SENSOR = 'PAYAH'
MAKA OUTPUT = 'HAHAHA ***** LOOO'
                    
*/

// PSEUDOCODE
/*
STORE 'kata' with sentence split
STORE 'asterix' with blank
STORE 'output' with blank

WHILE i less than 'words' length
    THEN asterix equal with *
WHILE j lest than 'sentence' length
    IF 'kata'(j) equal to 'words'
    THEN 'output' is 'asterix'
    IF 'kata'(j) not equal to 'words'
    THEN 'output' is kata (j)

DISPLAY 'output'

*/


function sensorSentence(sentence, words) {

  var result = '';
  var counter = 0;
  var arr = split(sentence);

  var spacing = false;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === words) {
      spacing = true
      while (counter < words.length) {
        result += '*';
        counter++;
      }
    } else {
      if (spacing) {
        result += ' ' + arr[i] + ' ';
      } else {
        result += arr[i] + ' ';
      }
    }
  }
  return result;
}

function split (input) {
  let result = '';
  var arr = [];
  for (var i = 0; i < input.length; i++) {
    if (input[i] !== ' ') {
      result += input[i];
    } else {
      arr.push(result);
      result = '';
    }

    if (i === input.length -1 && result.length > 0) {
      arr.push(result);
    }
  }
  return arr;
}

// function sensorSentence ( sentence, words ) {
//   var wordsBlocked = ''
//   var sentenceArr = []
//   var kata = ''

//   //split SENTENCE
//   for (var i = 0; i < sentence.length; i++) {
//     if (sentence[i] === ' ' || i === sentence.length - 1) {
//       if (i === sentence.length - 1) {
//         kata += sentence[i]
//       }
//       sentenceArr.push(kata)
//       kata = ''
//     }
//     else {
//       kata += sentence[i]
//     }
//   }

//   for (var i = 0; i < words.length; i++) {
//     wordsBlocked += '*'
//   }

//   for (var i = 0; i < sentenceArr.length; i++) {
//     if (sentenceArr[i] === words) {
//       sentenceArr[i] = wordsBlocked
//     }
//   }
//   return sentenceArr.join(' ')
// }



console.log(sensorSentence('Hey you are a murderer', 'murderer')) // Hey you are a ********

console.log(sensorSentence('I will kill you later, i swear', 'kill')) // I will **** you later, i swear

console.log(sensorSentence("Oh my god, holy cow! i can't believe it", "cow!")) // Oh my god, holy **** i can't believe it

console.log(sensorSentence("Aku ingin pindah ke meikartu", "meikartu")) // Aku ingin pindah ke ********

console.log(sensorSentence('HAHA HEHE HIHI HUHU HOHO', 'WEY')) // 'HAHA HEHE HIHI HUHU HOHO'

console.log(sensorSentence('', '')) // ''
