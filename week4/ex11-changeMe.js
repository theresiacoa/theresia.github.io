function changeMe(arr) {
  for (var i = 0; i < arr.length; i++) {
    var obj = {};
    var result  = i+1 + '. ' + arr[i][0] + ' ' + arr[i][1];

    obj = {
      firstname: arr[i][0],
      lastname: arr[i][1],
      gender: arr[i][2]
    }

    if (arr[i][3] === undefined) {
      obj.age = 'Invalid Birth Date';
    } else {
      obj.age = 2018 - arr[i][3];
    }
    console.log(result, obj);
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""