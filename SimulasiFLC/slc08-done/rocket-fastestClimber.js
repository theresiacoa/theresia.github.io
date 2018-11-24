
/*
**************
FASTEST CLIMBER
**************
Fastest climber adalah sebuah function yang menerima sebuah parameter berupa string.
Dimana pada string tersebut, terdapat nama nama pemanjat tebing, dan waktu nya dalam bentuk jam dan menit.
Function dibawah akan mereturn nama pemanjat tebing tercepat.
RULES:
 - DILARANG menggunakan REGEX
 - DILARANG menggunakan muilt in function .reduce(), .map(), .filter()
 - DILARANG menggunakan built in function .indexOf(), dan .include()
 - DILARANG menggunakan built in function .split()
*/

function fastestClimber(string) {
  var nama = splitNama(splitstr(string));
  var jam = splitJam(splitstr(string));
  // console.log(nama, jam);

  var result = '';
  var minJam = 0;

  for (var i = 0; i < jam.length; i++) {
    // console.log(minJam, '===', jam[i], nama[i]);
    if (result === '') {
      result = nama[i];
      minJam = jam[i];
    }
    if (minJam > jam[i]){
      result = nama[i];
    }
  }
  return result;
}

function splitstr(input) {
  let kata = '';
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== ',') {
      kata += input[i];
    } else {
      arr.push(kata);
      kata = '';
    }
  }
  if (kata.length > 0) {
    arr.push(kata);
  }
  return arr;
}

function splitNama(input) {
  let arr = [];
  let kata = '';
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] !== ':') {
        kata += input[i][j];
      } else {
        arr.push(kata);
        kata = '';
        break;
      }
    }
  }
  return arr;
}

function splitJam(input) {
  let arr = [];
  let numStr = '0123456789';
  for (let i = 0; i < input.length; i++) {
    let num = '';
    for (let k = 0; k < input[i].length; k++) {
      for (let j = 0; j < numStr.length; j++) {
        if (input[i][k] === numStr[j]) {
          num += input[i][k];
        }
      }
    }
    arr.push(Number(num));
  }
  return arr;
}

console.log(fastestClimber('Kyle: 1jam 30menit,Nein: 2jam 30menit,Light: 0jam 59menit')) // Light
console.log(fastestClimber('Retsu: 1jam 30menit,Tokichi: 2jam 01menit,Go: 1jam 59menit')) // Retsu
console.log(fastestClimber('Awtian: 1jam 01menit,Pipu: 1jam 11menit,Caca: 1jam 59menit')) // Awtian
