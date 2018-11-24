// var obj = {
//   nama: 'Hacktiv8',
//   fox: 'Zen Fox',
//   tahun: 2018,
//   batch: 26,
//   phase1: '26 November 2018'
// }

// // the INDEX --- it's similar to Object.keys in which it loops the property name
// // obj[i] --- it's similar to Object.values
// for (var i in obj) {
//   console.log(i, '===', obj[i]);
// }
// console.log('\n');


// // EXAMPLES
// var myCar = {};
// var propertyName = 'make';
// myCar[propertyName] = 'Ford';

// propertyName = 'model';
// myCar[propertyName] = 'Mustang';

// function showProps(obj, objName) {
//   var result = '';
//   for (var i in obj) {
//     // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
//     if (obj.hasOwnProperty(i)) {
//       result += objName + '.' + i + ' = ' + obj[i] + '\n';
//     }
//   }
//   return result;
// }

// console.log(showProps(myCar, "myCar"));
// console.log('\n');


//ARRAY of OBJECT
var result = [];
var person = {};
person.nama = 'theresia'
person.age = 25;
person.gender = 'female';
person.hobby = ['makan', 'tidur', 'main'];

result.push(person);

person = {};      //you need to make the object empty again or else it will be rewrite
person.nama = 'ulfa'
person.age = 25;
person.gender = 'female';

result.push(person);
//console.log(result);

// var umur = 0;
// for (var i = 0; i < result.length; i++) {
//   umur += result[i].age           //age + age
// }
// console.log(umur);
// console.log('\n');

var hasil = '';
for (var j = 0; j < result.length; j++) {
  console.log('nama: ' + result[j].nama);
  console.log('age: ' + result[j].age);
  console.log('gender: ' + result[j].gender);

  if (result[j].hobby === undefined) {
    console.log();
  } else {
    console.log("Hobby: ")
    for (var k = 0; k < result[j].hobby.length; k++) {
      console.log('- ' + result[j].hobby[k]);
    }
  }
}

//You can check if the propertyName is available in the object, if not,
//use conditional UNDEFINED 