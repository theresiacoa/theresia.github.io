//Menyusun barisan bintang
var rows = 5;
for (var i = 0; i < rows; i++) {
    console.log("*")
}

//Nested loop
var rows2 = 5;
for (var i = 0; i < rows2; i++) {
    var temp = "";
    for (var j = 0; j < rows2; j++) {
        temp = temp + "*";
  }
  console.log(temp);
}

//Tangga Bintang
var rows3 = 5;
for (var i = 0; i < rows3; i++) {
    var temp = "";
    for (var j = 0; j <= i; j++) {
        temp = temp + "*";
  }
  console.log(temp);
}