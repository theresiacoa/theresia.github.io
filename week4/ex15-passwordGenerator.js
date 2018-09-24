function changeVocals (str) {
  var dict = "bfjpvBFJPV";
  var vokal = "aeiouAEIOU"
  var kalimat = "";

  for (var i = 0; i < str.length; i++) {
    var isVokal = false;
    for (var j = 0; j < vokal.length; j++) {
      if (str[i] === vokal[j]) {
        isVokal = true;
        kalimat += dict[j];
      }
    }
    if (isVokal === false) {
      kalimat += str[i];
    }
  }
  return kalimat;
}

function reverseWord (str) {
  var reversed = "";
  for (var i = str.length-1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}

function setLowerUpperCase (str) {
  var kalimat = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      kalimat = kalimat + str[i].toLowerCase();
    } else {
      kalimat += str[i].toUpperCase();
    }
  }
  return kalimat;
}

function removeSpaces (str) {
  var kalimat = str.split(" ").join("");
  return kalimat;
}

function passwordGenerator (name) {
  var changeWords = changeVocals(name);
  var reversed = reverseWord(changeWords);
  var lowerUpperWord = setLowerUpperCase(reversed);
  var noSpacing = removeSpaces(lowerUpperWord);
 
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  } else {
    return noSpacing;
  } 
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
