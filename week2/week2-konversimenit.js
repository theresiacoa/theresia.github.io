function konversiMenit(menit) {
    var jam = Math.floor(menit/60);
    var menit1 = menit % 60;
    if (menit1 < 10) {
      return menit = jam + ":0" + menit1;
    } else {
      return menit = jam + ":" + menit1;
    }
  }
  
  console.log(konversiMenit(63));
  console.log(konversiMenit(124));
  console.log(konversiMenit(53));
  console.log(konversiMenit(88));
  console.log(konversiMenit(120));