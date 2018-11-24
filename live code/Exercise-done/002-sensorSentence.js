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
//fungsi untuk mensensor kata tdk baik

function sensorSentence(sentence, words) {
 
  var result = '';

  //split
  var kata = '';
  var arr = [];
  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      kata += sentence[i];
    }
    if (sentence[i] === ' ' || i === sentence.length - 1) {
      arr.push(kata);
      kata = '';
    }
  }
  // console.log(arr);

  var result = '';
  for (var k = 0; k < arr.length; k++) {
    var isSensor = false
    for (var j = 0; j < arr[k].length; j++) {
      // console.log(arr[k], '===', words);
      if (arr[k] === words) {
        isSensor = true;
        result += '*';
      }
    }
    if (!isSensor) {
      result += arr[k] + ' ';
    } else {
      result += ' ';
    }
  }
  return result;
}

console.log(sensorSentence("Hey you are a murderer", "murderer")); // Hey you are a ********

console.log(sensorSentence("I will kill you later, i swear", "kill")); // I will **** you later, i swear

console.log(sensorSentence("Oh my god, holy cow! i can't believe it", "cow!")); // Oh my god, holy **** i can't believe it

console.log(sensorSentence("Aku ingin pindah ke meikartu", "meikartu")); // Aku ingin pindah ke ********

console.log(sensorSentence("HAHA HEHE HIHI HUHU HOHO", "WEY")); // 'HAHA HEHE HIHI HUHU HOHO'

console.log(sensorSentence("", "")); // ''
