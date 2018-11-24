//2

  // pada bulan tanggal 1 pada bulan october 2019 jatuh pada hari senin
  // buatlah sebuah program yang menampilkan nama hari berdasarkan input tanggal pada bulan dan tahun yang sama

  // contoh 1 (tanggal = 2):
  // hari selasa

  // contoh (tanggal = 8):
  // hari senin

  // contoh (tanggal = 17):
  // hari rabu

var tanggal = 8;

if (tanggal === 1 || tanggal % 7 === 1) {
    console.log('SENIN');
}
if (tanggal === 2 || tanggal % 7 === 2) {
    console.log('SELASA');
}
if (tanggal === 3 || tanggal % 7 === 3) {
    console.log('RABU');
}
if (tanggal === 4 || tanggal % 7 === 4) {
    console.log('KAMIS');
}
if (tanggal === 5 || tanggal % 7 === 5) {
    console.log('JUMAT');
}
if (tanggal === 6 || tanggal % 7 === 6) {
    console.log('SABTU');
}
if (tanggal === 7 || tanggal % 7 === 0) {
    console.log('MINGGU');
}