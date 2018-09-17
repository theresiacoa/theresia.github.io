//Array Multidimensi -- Array dalam Array

var input = [
  ["0001", "Roman", "Jakarta", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Kevin", "Martapura", "6/4/1970", "Berkebun"]
]
function dataHandling (input) {
  for (var i = 0; i < input.length; i++) {
    console.log('Nomor ID: ' + input[i][0]);
    console.log('Full Name: ' + input[i][1]);
    console.log('TTL: ' + input[i][2] + ", " + input[i][3]);
    console.log('Hobi: ' + input[i][4]);
    console.log('\n');
}
}
console.log(dataHandling(input));