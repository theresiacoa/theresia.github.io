function balikString(str) {
  var kata = '';
  for (var i = 1; i <= str.length; i++){
		kata = kata + str[str.length - i];
	}
	return kata;
}
  
console.log(balikString(['Hello World!']));