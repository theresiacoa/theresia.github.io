function balikKata(kata) {
    var reversed = "";
    for (var i = 1; i <= kata.length; i++) {
        reversed = reversed + kata[kata.length -i];
    }
    return reversed;
}
    
console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));