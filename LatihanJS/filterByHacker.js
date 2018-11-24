function filterByHacker(input) {
  
  var result = [];
  var theAuthor = 'hacker';

  for (var i = 0; i < input.length; i++) {
    var arr = [];
    for (var j = 0; j < input[i].length; j++) {
      var author = '';
      //console.log(input[i][j].length - theAuthor.length);
      for (var k = input[i][j].length - 1; k >= input[i][j].length - theAuthor.length; k--) {
        author = input[i][j][k] + author;
      }
      if (author !== 'hacker') {
        arr.push(input[i][j]);
      } else {
        author = '';
      }
    }
    result.push(arr);
  }
  console.log(result);
}



filterByHacker([
  ['Harry potter - jkrowling', 'Intro to Javascript - program buddy', 'hack to server - hacker'],
  ['Fedora deep secure - secure one', 'Wireshack to Sniff - hacker', 'book of live - live savier'],
  ['Intro to gamming - GamingNation', 'Man in middle attack - hacker']
]);
/**
[ 
  ['Harry potter - jkrowling', 'Intro to Javascript - program buddy'],
  ['Fedora deep secure - secure one', 'book of live - live savier'],
  ['Intro to gamming - GamingNation']
]
 */