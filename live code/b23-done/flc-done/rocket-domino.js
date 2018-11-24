/*
DOMINO CARD

Buatlah sebuah function bernama domino yang menerima satu parameter berupa number. function domino akan membuat sebuah kotak dengan simbol # dengan panjang dan tinggi sesuai number parameter. Kemudian, di bagian paling tengah dari kotak dituliskan kembali simbol # sepanjang sizenya dan setelah kotak terbagi dua maka di masing-masing sub kotak pada bagian tengahnya dituliskan angka domino.

NOTE ANGKA YANG BERADA DITENGAH SUB KOTAK ADALAH ANGKA RANDOM DARI ANGKA DOMINO (1-6)

Contoh untuk input 9:

#########
#       #
#   3   #
#       #
#########
#       #
#   5   #
#       #
#########
Contoh untuk input 10:

##########
#        #
#    6   #
#        #
##########
##########
#        #
#    2   #
#        #
##########
*/

function domino(size) {

  //garis tengah
  if (size % 2 === 1) {
    var garis = Math.floor(size / 2);
    var nomor = Math.floor(garis / 2);
  } else {
    var garis = size / 2;
    var nomor = Math.floor(garis / 2);
  }
  // console.log(nomor, garis);

  for (var i = 0; i < size; i++) {
    var hash = '';
    for (var j = 0; j < size; j++) {
      // console.log(i, garis);
      if (i === 0 || i === garis || i === size - 1 || size % 2 === 0 && i === garis - 1) {
        hash += '#';
      } else {
        if (j === 0 || j === size - 1) {
          hash += '#';
        } else {
          if (((size % 2 === 0 && j === garis - 1 && (i === 2 || i === size - nomor -1)) ||
            (i === nomor || i === size - 1 - nomor) && j === garis && size % 2 === 1)) {
            hash += Math.round(Math.random() * 9);
          } else {
            hash += ' ';
          }
        }
      }
    }
    console.log(hash);
  }
}

domino(9);
/*
NOTE: angka di dalam domino bisa berbeda
#########
#       #
#   3   #
#       #
#########
#       #
#   5   #
#       #
#########
*/

domino(12);
/*
NOTE: angka di dalam domino bisa berbeda
############
#          #
#    5     #
#          #
#          #
############
############
#          #
#    1     #
#          #
#          #
############
*/

domino(10);
/*
NOTE: angka di dalam domino bisa berbeda
##########
#        #
#    6   #
#        #
##########
##########
#        #
#    6   #
#        #
##########
*/

domino(21);
/*
NOTE: angka di dalam domino bisa berbeda
#####################
#                   #
#                   #
#                   #
#                   #
#         4         #
#                   #
#                   #
#                   #
#                   #
#####################
#                   #
#                   #
#                   #
#                   #
#         4         #
#                   #
#                   #
#                   #
#                   #
#####################
*/