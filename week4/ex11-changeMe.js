function changeMe(arr) {
  var object = {};

  if (arr.length === 0) {
    console.log ('""');
  } else {
    for (var i = 0; i < arr.length; i++) {
      var name = (i+1) + ". " + arr[i][0] +  " " + arr[i][1];
      console.log(name);
  
      object['firstName'] = arr[i][0];
      object['lastName'] = arr[i][1];
      object['gender'] = arr[i][2];
        
      if (arr[i][3] === undefined) { 
        object['age'] = 'Invalid Birth Year';
      } else {
        object['age'] = 2018 - arr[i][3];
      }
     console.log(object);
    }
  }
}


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