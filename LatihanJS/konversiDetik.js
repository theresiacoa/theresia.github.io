function konversiMenit(detik) {
  if (detik < 60) {
    return detik + ' detik';
  } else {

    var menit = Math.floor(detik / 60);
    detik = detik % 60;

    if (detik === 0) {
      return menit + ' menit ';
    }
    return menit + ' menit ' + detik + ' detik';
  }
  
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(121)); // 2:00