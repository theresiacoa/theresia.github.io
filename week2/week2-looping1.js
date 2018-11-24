//While Looping
console.log('LOOPING PERTAMA');
var counter = 2;
while (counter <= 20) {
  console.log(counter + ' - I love coding');
  counter+=2;
}

console.log('lOOPING KEDUA');
var counter = 20;
while (counter > 0) {
  console.log(counter + ' - I will become full stack developer');
  counter-=2;
}

//Looping FOR
console.log('LOOPING PERTAMA');
for (var a = 1; a <= 20; a++) {
  console.log(a + ' - I love coding');
}

console.log('LOOPING KEDUA');
for (let b = 20; b > 0; b--) {
  console.log(b + ' - I will become fullstack developer!');
}
console.log(' ');

// GANJIL GENAP
for (var k = 1; k <= 100; k++) {
  if (k % 2 === 0) {
    console.log('GENAP');
  } else {
    console.log('GANJIL');
  }
}

//COUNTER+2; angka kelipatan 3
for (let c = 1; c <= 100; c+=2) {
  if (c % 3 === 0) {
    console.log (c + ' kelipatan 3');
  } else {
    console.log('""');       
  }
}
console.log('\n');

//Counter+5; angka kelipatan 6
for (let i = 1; i <= 100; i+=5) {
  if (i % 6 === 0) {
    console.log(i + ' kelipatan 6');
  } else {
    console.log('""');  
  }
}
console.log('\n');

//counter+9, angka kelipatan 10
for (let i = 1; i <= 100; i+=9) {
  if (i % 10 === 0) {
    console.log(i + ' kelipatan 10');
  } else {
    console.log('""');
  }
}
console.log('\n');