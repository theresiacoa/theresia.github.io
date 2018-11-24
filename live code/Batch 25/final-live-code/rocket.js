/**
SHINE BRIGHT LIKE A DIAMOND


Buatlah sebuah function bernama `diamond` yang menerima satu parameter berupa number.
function `diamond` akan membuat sebuah belah ketupat dengan simbol `$` dimana tinggi dari belah ketupat
ditentukan berdasarkan parameter number yang diterima.

**NOTE: Perhatikan pola untuk menentukan tinggi belah ketupat!!**

Contoh untuk input 3:
  $
 $ $
$   $
 $ $
  $


Contoh untuk input 4:

   $
  $ $
 $   $
$     $
 $   $
  $ $
   $


Contoh untuk input 6:

     $
    $ $
   $   $
  $     $
 $       $
$         $
 $       $
  $     $
   $   $
    $ $
     $


contoh untuk input 10:

         $
        $ $
       $   $
      $     $
     $       $
    $         $
   $           $
  $             $
 $               $
$                 $
 $               $
  $             $
   $           $
    $         $
     $       $
      $     $
       $   $
        $ $
         $

**/

function diamond(num) {
  var result = '';
  //horizontal
  for (var i = 0; i < num; i++) {
    var dollar = '';
    for (var j = 0; j < num + i; j++) {
      if (j == num - i - 1 || j == num + i -1) {
        // console.log(num, '===', i);
        dollar += '$';
      } else {
        dollar += ' ';
      }
    }
    result += dollar + '\n';
  }
  // console.log(result);

  for (var k = 1; k <= num; k++) {
    dollar = '';
    for (var l = 1; l < (num * 2) - k; l++) {
      // console.log(l, k);
      if (l === k + 1 || l === (num * 2) - k - 1 && l >= k) {
        dollar += '$';
      } else {
        dollar += ' ';
      }
    }
    result += dollar + '\n';
  }
  return result;
}

console.log(diamond(10));
console.log(diamond(3));
console.log(diamond(5));
console.log(diamond(4));
