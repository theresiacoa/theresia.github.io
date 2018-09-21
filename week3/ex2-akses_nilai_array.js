function balikString(arr) {
	var str = arr.toString();
	var kata = '';
	
  for (var i = str.length-1; i >= 0; i--){
		kata = kata + str[i];
	}
	return kata;
}
	
console.log(balikString(['Hello World!']));