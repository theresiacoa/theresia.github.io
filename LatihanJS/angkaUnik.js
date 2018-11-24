// input: 414958297141834566
// output: [4, 1, 9, 5, 8, 2, 7, 3, 6]

function unik(input) {
  var str = input.toString();
  var arr = [];

  for (var i = 0; i < str.length; i++) {
    var isUnique = true;
    if (arr.length === 0) {
      arr.push(str[i]);
    } else {
      for (var j = 0; j < arr.length; j++) {
        if (str[i] === arr[j]) {
          isUnique = false;
        }
      }
      if (isUnique) {
        arr.push(str[i]);
      }
    }
  }
  return arr;
}

  console.log(unik(414958297141834566));
