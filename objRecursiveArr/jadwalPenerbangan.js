/*
Jadwal penerbangan

Sebuah bandara telah memiliki data penerbangan harian dalam bentuk array
Function getSchedule akan menampilkan jadwal pesawat pada jam tersebut
Function tersebut menerima 1 parameter berupa string yang menujukan waktu saat ini

format data schedule adalah : jam_keberangkatan, keberangkatan, tujuan, kode_pesawat
untuk keberangkatan dan tujuan di awali dengan 3 karakter koden negara dan simbol `-`
jika koden negara keberangkatan dan tujuan berbeda maka merupakan penerbangan internasional, jika sama berarti penerbangan domestik

jika jam_keberangkatan dibawah atau sama dengan jam saat ini maka pesawat telah berangkat
jika jam_keberangkatan diatas jam saat ini maka beritahukan jam keberangkatan pesawat

contoh:
getSchedule('07:20')

output:
ga-001 penerbangan domestik tujuan bali telah berangkat
ga-002 penerbangan domestik tujuan makassar telah berangkat
mer-001 penerbangan domestik tujuan makassar telah berangkat
per-001 penerbangan internasional tujuan mal akan diberangkatkan pada pukul 07:40

*/

function getSchedule(jam) {
  var schedule = [
    ['07:00', 'ina-jakarta', 'ina-bali', 'ga-001'],
    ['07:15', 'ina-jakarta', 'ina-makassar', 'ga-002'],
    ['07:20', 'ina-jakarta', 'ina-makassar', 'mer-001'],
    ['07:40', 'ina-jakarta', 'mal-kuching', 'per-001'],
    ['08:00', 'ina-jakarta', 'ina-bali', 'ga-003'],
    ['08:15', 'ina-jakarta', 'ger-berlin', 'ga-004'],
    ['08:30', 'ina-jakarta', 'uzb-tashkent', 'do-001'],
    ['08:50', 'ina-jakarta', 'mal-kuching', 'per-002'],
    ['09:00', 'ina-jakarta', 'ina-bali', 'ga-005'],
    ['09:15', 'ina-jakarta', 'kor-jeju', 'pel-001'],
    ['09:30', 'ina-jakarta', 'uzb-tashkent', 'do-002'],
    ['09:50', 'ina-jakarta', 'mal-kuching', 'per-003'],
  ];

}


// Test case
getSchedule('07:20')
/*
ga-001 penerbangan domestik tujuan bali telah berangkat
ga-002 penerbangan domestik tujuan makassar telah berangkat
mer-001 penerbangan domestik tujuan makassar telah berangkat
per-001 penerbangan internasional tujuan mal akan diberangkatkan pada pukul 07:40
*/

console.log('\n');
getSchedule('07:50')
/*
ga-001 penerbangan domestik tujuan bali telah berangkat
ga-002 penerbangan domestik tujuan makassar telah berangkat
mer-001 penerbangan domestik tujuan makassar telah berangkat
per-001 penerbangan internasional tujuan mal telah berangkat
*/

console.log('\n');
getSchedule('08:55')
/*
ga-003 penerbangan domestik tujuan bali telah berangkat
ga-004 penerbangan internasional tujuan berlin telah berangkat
do-001 penerbangan internasional tujuan tashkent telah berangkat
per-002 penerbangan internasional tujuan kuching telah berangkat
*/

console.log('\n');
getSchedule('09:25')
/**
ga-005 penerbangan domestik tujuan bali telah berangkat
pel-001 penerbangan internasional tujuan kor telah berangkat
do-002 penerbangan internasional tujuan tashkent akan diberangkatkan pada pukul 09:30
per-003 penerbangan internasional tujuan kuching akan diberangkatkan pada pukul 09:50
 */