function graduates (input) {
  var obj = {};

  for (var i = 0; i < input.length; i++) {
    if (obj[input[i].class] === undefined) {
      var jumlah = 0;
      obj[input[i].class] = {
        jmlLulus: 0,
        lulus: [],
        rataKelas: 0
      }
    }

    if (input[i].score >= 75) {
      obj[input[i].class].jmlLulus++;
      var studentsLulus = {
        name: input[i].name,
        score: input[i].score
      }
      studentsLulus = JSON.stringify(studentsLulus); //to look at the answer if it's too long
      obj[input[i].class].lulus.push(studentsLulus);
    }
    //console.log(obj[input[i].class]);
  
    var jumlah = 0;
    for (var j = 0; j < input.length; j++) {
      if (input[j].class === input[i].class) {
        jumlah++;
      }
      //console.log(jumlah, '===', input[i].class, input[j].class);
    }
    obj[input[i].class].rataKelas += input[i].score/jumlah;
  }
  return obj;
}


console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));


  // {
  //  foxes: {
  //   jmlLulus: 1,
  //   lulus: [{ name: 'Dimitri', score: 90 }],
  //   rataKelas: 82
  //  },
  //  wolves: {
  //   jmlLulus: 2,
  //   lulus: [{ name: 'Alexei' , score: 85 },
  //   { name: 'Anastasia', score: 78 }
  //   ],
  //   rataKelas: 81.5
  //  }

// console.log(graduates([
//   {
//     name: 'Alexander',
//     score: 100,
//     class: 'foxes'
//   },
//   {
//     name: 'Alisa',
//     score: 76,
//     class: 'wolves'
//   },
//   {
//     name: 'Vladimir',
//     score: 92,
//     class: 'foxes'
//   },
//   {
//     name: 'Albert',
//     score: 71,
//     class: 'wolves'
//   },
//   {
//     name: 'Viktor',
//     score: 80,
//     class: 'tigers'
//   }
// ]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}