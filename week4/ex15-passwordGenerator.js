function changeVocals(str) {
  var kamus = 'abefijopuvABEFIJOPUV';
  var changeVoc = '';

  for (var i = 0; i < str.length; i++) {
    var isChanged = false;
    for (var j = 0; j < kamus.length; j += 2) {
      if (str[i] === kamus[j]) {
        isChanged = true;
        changeVoc += kamus[j + 1];
      }
    }
    //console.log(isChanged, '===', i);
    if (isChanged === false) {
      changeVoc += str[i];
    }
  }
  return changeVoc;
}

function reverseWord(str) {
  var reversed = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  //console.log(reversed);
  return reversed;
}

function setLowerUpperCase(str) {
  var hasil = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      hasil += str[i].toLowerCase();
    } else {
      hasil += str[i].toUpperCase();
    }
  }
  return hasil;
}

function removeSpaces(str) {
  var removeSpacing = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      removeSpacing += str[i];
    }
  }
  return removeSpacing;
}


// Single Responsibility Principle
// Each function only does one thing, and it does it well.
// Changes in each function do not affect other functions.
function passwordGenerator(name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }
  return setLowerUpperCase(
    reverseWord(
      changeVocals(
        removeSpaces(name))));
}


console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'