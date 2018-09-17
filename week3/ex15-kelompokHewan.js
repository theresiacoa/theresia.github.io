function groupAnimals(animals) {
  var myArray = [];

  for (var i = 0; i < animals.length; i++) {
    var insideArray= [];
    insideArray.push(animals[i]);
    for (var j = animals.length - 1; j > 0; j--) {
      if (animals[i][0] === animals[j][0] && animals[i] !== animals[j]) {
        insideArray.push(animals[j]);
        animals.splice(j,1);
      }
    }
    myArray.push(insideArray);
  }
  return myArray.sort();
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]