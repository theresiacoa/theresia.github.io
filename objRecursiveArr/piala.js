
function objectLiteral(input) {
  var obj = {}
  //console.log(obj['indonesia']);
  for (var i = 0; i < input.length; i++) {
    if (obj[input[i][0]] === undefined) {
      obj[input[i][0]] = {
        negara: input[i][0],
        emas: 0,
        perak: 0,
        perunggu: 0
      }
    }
    obj[input[i][0]][input[i][1]] += 1;
  }
  return Object.values(obj);
}

console.log(
  objectLiteral([
    ["Indonesia", "emas"],
    ["Indonesia", "emas"],
    ["Indonesia", "perak"],
    ["Indonesia", "perunggu"],
    ["Malaysia", "emas"],
    ["Malaysia", "perak"],
    ["Malaysia", "perak"],
    ["Singapore", "emas"],
    ["Singapore", "perak"],
    ["Singapore", "perunggu"]
  ])
);

/*
[ { negara: 'Indonesia', emas: 2, perak: 1, perunggu: 1 },
  { negara: 'Malaysia', emas: 1, perak: 2, perunggu: 0 },
  { negara: 'Singapore', emas: 1, perak: 1, perunggu: 1 } ]
*/