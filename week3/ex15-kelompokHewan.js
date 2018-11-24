function groupAnimals(animals) {
  var result = [];

//CARA 1 -- PAKE KAMUS
  // var kamus = 'abcdefghijklmnopqrstuvwxyz'
  // for (var i = 0; i < kamus.length; i++) {
  //   var arr = [];
  //   for(var j = 0; j < animals.length; j++) {
  //     if (kamus[i][0] === animals[j][0]) {
  //       arr.push(animals[j]);
  //     }
  //   }
  //   if(arr.length >= 1) {
  //     result.push(arr);
  //   }
  // }
  // return result;


//NEED TO REDO AGAIN
//CARA 2 -- MANUAL
  for(var i = 0; i < animals.length-1; i++) {
    if (animals[i][0] < animals[i+1][0] || animals[i][0] === animals[i+1][0]) {
      //result[result.length] = animals[i];
    } else {
      hasil = animals[i];           //huruf yang lebih besar
      animals[i] = animals[i+1];
      animals[i+1] = hasil;
      i = 0;
    }
  }

  var arr = [];
  var arrIndex = 0;
  for (var j = 0; j < animals.length; j++) {
    if (arr.length === 0) {
      arr.push([animals[j]]);
    } else if (arr[arrIndex][0][0] === animals[j][0]) {
      arr[arrIndex].push(animals[j]);
    
    } else {
      arr[arr.length] = [animals[j]];
      arrIndex++;
    }
  }
  return arr;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]

//console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]