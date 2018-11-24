//IF ELSE WEEK2
// function game(nama, peran) {
//   if (nama === '') {
//     return 'Nama harus diisi!';
//   } else {
//     if (peran === 'ksatria') {
//       return "Selamat datang di Dunia Proxytia, " + nama + '!' +
//         " Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!";
//     } else if (peran === 'tabib') {
//       return "Selamat datang di Dunia Proxytia, " + nama +  '!' +
//        " Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka."
//     } else if (peran === 'penyihir') {
//       return "Selamat datang di Dunia Proxytia, Zero" + nama +  '!' +
//         " Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!"
//     } else if (peran === '') {
//       return 'Hello ' + nama + ', Pilih peranmu untuk memulai game!';
//     } else {
//       return 'salah peran';
//     }
//   }
// }
// console.log(game('theresia', 'ksatria'));
// console.log(game('', 'knight'));
// console.log(game('cloe', 'tabib'));


//SWITCH CASE
var tanggal = 31;
var bulan = 22;
var tahun = 2100;

if (tanggal >= 1 && tanggal <= 31 || bulan >= 1 && bulan <=12 || tahun >= 1900 && tahun <=2200) {
  switch (bulan) {
    case 1:
      bulan = 'Jan';
      break;
    case 2:
      bulan = 'Feb';
      break;
    case 3:
      bulan = 'Mar';
      break;
    case 4:
      bulan = 'Apr';
      break;
    case 5:
      bulan = 'May';
      break;
    case 6: 
      bulan = 'June';
      break;
    case 7: 
      bulan = 'July';
      break;
    case 8: 
      bulan = 'Aug';
      break;
    case 9: 
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
    default:
      break;
  }
  //console.log(tanggal + ' ' + bulan + ' ' + tahun);
} else {
  console.log('wrong date');
}

