function urutkanAbjad(str) {
  var abc = "abcdefghijklmnopqrstuvwxyz";
  var kata = "";

  for (var i = 0; i < abc.length; i++) {
    for (var j = 0; j < str.length; j++) {
      if (abc[i] === str[j]) {
        kata = kata + abc[i];
      }
    }
  }
  return kata;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'