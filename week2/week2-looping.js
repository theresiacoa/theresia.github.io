//WHILE LOOPING
console.log("LOOPING PERTAMA");
var counter = 0;
while (counter >= 0 && counter < 20) {
    counter = counter + 2;
    console.log(counter + " - I love coding");
}

//WHILE LOOPING 
console.log("LOOPING KEDUA");
var counter = 0;
var temp = 20;
while (counter >= 0 && counter < 10 ) {
    counter++;
    console.log(temp + " - I will become fullstack developer");
    temp = temp - 2;
}
console.log("\n");

//FOR LOOPING
console.log("LOOPING PERTAMA");
var temp = 0;
for (var i = 0; i < 20; i++) {
    temp++;
    console.log( temp + " - I love coding");
}

//FOR LOOPING
console.log ("LOOPING KEDUA");
var temp = 20;
for (var i = 0; temp > 0; i++) {
    console.log(temp + " - I will become fullstack developer");
    temp--;
}

//ANGKA GENAP & GANJIL
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log("Genap");
    } else {
        console.log("Ganjil");
    }
}

for (var i = 1; i <= 100; i+=2) {
    if (i % 3 === 0) {
        console.log("3 kelipatan 3");
    } else {
        console.log("");
    }
}

for (var i = 1; i <= 100; i+=5) {
    if (i % 6 === 0) {
        console.log("6 kelipatan 6");
    } else {
        console.log("");
    }
}

for (var i = 1; i <= 100; i+=9) {
    if (i % 10 === 0) {
        console.log("10 kelipatan 10");
    } else {
        console.log("");
    }
}
