function urutkanAbjad(str) {
  var temp = '';
  var result = '';

  var kamus = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < kamus.length; i++) {
    for (var j = 0; j < str.length; j++) {
      if (kamus[i] === str[j]) {
        result+=kamus[i];
      }
      if ( j === str[str.length-1]) {
        break;
      }
    }
  }
  return result;
}
// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'