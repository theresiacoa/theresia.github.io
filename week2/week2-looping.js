//While looping
console.log('looping pertama');
var counter = 2;
while (counter <= 20) {
  console.log(counter + ' - I love coding');
  counter += 2;
}
console.log('looping kedua');
var count = 20;
while (count > 0) {
  console.log(count + ' - I will become a full stack developer');
  count -= 2;
}
console.log('\n');


//for loop
console.log('looping pertama');
for (var i = 1; i <= 20; i++) {
  console.log(i + ' - I love coding');
}
console.log('looping kedua')
for (var j = 20; j > 0; j--) {
  console.log(j + ' - I will become a full stack developer');
}
console.log('\n');


//angka ganjil & genap
//counter++
var angka = 100;
for (var k = 1; k < angka; k++) {
  if (k % 2 === 1) {
    console.log('ganjil');
  } else {
    console.log('genap');
  }
}
console.log('\n');

//counter+=2 dengan kelipatan 3
for (var l = 1; l <= angka; l+=2) {
  if (l % 3 === 0) {
    console.log(l + ' kelipatan 3');
  }
}
console.log();

//counter += 5 with kelipatan 6
for (var m = 1; m <= angka; m+= 5) {
  if (m % 6 === 0) {
    console.log(m + ' kelipatan 6');
  }
}
console.log();

//counter+=9 with kelipatan 10
for (var n = 1; n <= angka; n+=9) {
  if (n % 10 === 0) {
    console.log(n + ' kelipatan 10');
  }
}