var input = 
["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2 () {

  input.splice(4, 1, "Pria", "SMA Internasional Metro");
  input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
  console.log(input);

  var tanggal = input[3].split("/");
    switch (tanggal[1]) {
      case 1:
        console.log("January");
        break;
      case 2:
        console.log("February");
        break;
      case 3:
        console.log("March");
        break;
      case 4:
        console.log("April");
        break;
      case 5:
        console.log("May");
        break;
      case 6:
        console.log("June");
        break;
      case 7:
        console.log("July");
        break;
      case 8:
        console.log("August");
        break;
      case 9:
        console.log("September");
        break;
      case 10:
        console.log("October");
        break;
      case 11:
        console.log("November");
        break;
      case 12:
        console.log("December");
        break;
    }

    tanggal.sort(function(a,b) {
      return b - a;
    });
    console.log(tanggal);

    var tanggal2 = input[3].split("/").join("-");
    console.log(tanggal2);

    var nama = input.slice(1,2); //take index [1] only
    var nama = nama.toString();
    var namaDepan = nama.slice(0,15);
    console.log(namaDepan);
}

dataHandling2(input);