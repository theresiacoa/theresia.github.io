 var nama = "Theresia";
 var peran = "";

var nama = "";
var peran = "";

if (nama === "" && peran === "") {
  console.log("Nama harus diisi!");
 } else if (nama && peran === "") {
    console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
 } else {
    console.log("Selamat datang di Dunia Proxytia, " + nama)
    if (peran === "ksatria") {
        console.log("Halo Ksatria " + nama +", kamu dapat menyerang dengan senjatamu!");
    } else if (peran === "tabib") {
        console.log("Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.");
    } else if (peran === "zero") {
        console.log("Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
    }
 }
  