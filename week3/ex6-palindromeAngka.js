function angkaPalindrome(num) {
  do {
    num++;
    var number = num.toString();
    var numBalik = number.split("").reverse().join("");
  } while (number !== numBalik);
  return num;
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001