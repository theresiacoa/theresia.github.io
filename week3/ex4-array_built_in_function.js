var input =
  ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
  input.splice(4, 1, "Pria", "SMA Internasional Metro");
  input.splice(2, 1, "Provinsi Bandar Lampung");
  console.log(input);

  var tanggal = input[3].split('/');
  var bulan = parseInt(tanggal[1]); 
  //console.log(bulan);
  switch (bulan) {              //case and input must have the same type -- num OR str
    case 01:
      bulan = 'Jan';
      break;
    case 02:
      bulan = 'Feb';
      break;
    case 03:
      bulan = 'Mar';
      break;
    case 04:
      bulan = 'Apr';
      break;
    case 05:
      bulan = 'May';
      break;
    case 06:
      bulan = 'June';
      break;
    case 07:
      bulan = 'Jul';
      break;
    case 08:
      bulan = 'Aug';
      break;
    case 09:
      bulan = 'Sept';
      break;
    case 10:
      bulan = 'Oct';
      break;
    case 11:
      bulan = 'Nov';
      break;
    case 12:
      bulan = 'Dec';
      break;
  }
  console.log(bulan);

  tanggal.sort(function (a,b) {
    return b - a;
  });
  console.log(tanggal);

  var tanggalJoin = input[3].split('/').join('-');
  console.log(tanggalJoin);

  var stringNama = input[1].toString();
  stringNama.slice(15);
  console.log(stringNama);
}


dataHandling2(input);