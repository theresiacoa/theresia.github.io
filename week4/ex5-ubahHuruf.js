function ubahHuruf(kata) {
  var dict = "abcdefghijklmnopqrstuvwxyz";
  var kataBaru = "";

  for (var i = 0; i < kata.length; i++) {
    for (var j = 0; j < dict.length; j++) {
      if (kata[i] === dict[j]) {
        kataBaru = kataBaru + dict[j+1];
      }
    }
  }
  return kataBaru;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu