function hitungHuruf(kalimat) {
  var arrayKata = [];

  for (var i = 0; i < kalimat.length; i++) {
    var jumlah = 0;
    var kata = kalimat[i];

    for (var j = 0; j < kata.length; j++) {
      kata.split("");
      if (kata[j] === kata[j+1]) {
        jumlah +=1;
        arrayKata.push()
      } else {
        //kata[j].splice(j,1);
      }
    }

  }
  return kata;

}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
// console.log(hitungHuruf('I am a passionate developer')); // passionate
// console.log(hitungHuruf('aku adalah anak gembala')); // adalah
// console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
// console.log(hitungHuruf('mengayuh perahu di danau')); // danau