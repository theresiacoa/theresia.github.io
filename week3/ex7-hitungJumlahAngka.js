function hitungJumlahKata(kalimat) {
  // var result = [];
  // var sentence = '';
  // for (var i = 0; i < kalimat.length; i++) {
  //   sentence += kalimat[i];
  //   if (kalimat[i] === ' ' || i == kalimat.length-1) {
  //     result.push(sentence);
  //     sentence = '';
  //   }
  // }
  // return result.length;

  var result = 0;
  var sentence = '';

  for (var i = 0; i < kalimat.length; i++) {
    if (kalimat[i] !== ' ') {
      sentence += kalimat[i];
      //console.log('===' + sentence);
    }
    if (kalimat[i] === ' ' || i === kalimat.length - 1) {
      if (sentence.length >= 1) {
        result++;
        //console.log(result);
      }
      sentence = '';
    }
  }
  return result;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream      ')); // 4
console.log(hitungJumlahKata('Never eat       shredded wheat or cake  ')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5