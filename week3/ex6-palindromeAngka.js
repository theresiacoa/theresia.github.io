function angkaPalindrome(num) {
  var angka = '';

  while (true) {
    num++;
    angka = '';
    var numStr = num.toString();
    for (var i = numStr.length - 1; i >= 0; i--) {
      angka += numStr[i];
    }
    if (angka == num) {
      return angka;
    }
    //console.log(angka + '---' + num);
  }


  var angka = '';
  for (var i = 0; i < num; i++) {
    num++;
    var numStr = num.toString();
    var angka = '';

    for (var j = numStr.length-1; j >= 0; j--) {
      angka += numStr[j];
    }
    if(angka == num) {
      return angka;
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001