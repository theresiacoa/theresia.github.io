/**
Instruksi
=========
Buatlah sebuah function bernama capitalH yang menjalankan proses dengan menggunakan looping (boleh dengan while atau for) dan menerima satu parameter bernama height.

Buatlah sebuah symbol pola berikut:
contoh 1 ( capitalH(3) ):
| |
|-|
| |

contoh 2 ( capitalH(5) ):
|   |
|   |
|---|
|   |
|   |
 
contoh 3 ( capitalH(6) ):
|    |
|    |
|----|
|----|
|    |
|    |



tinggi huruf dan lebar sesuai dengan nilai parameter height.
garis vertical mengunakan symbol pipeline(|)
garis horizontal mengunakan symbol minus(-)
minimal nilai ganjil adalah 3, untuk nilai genap minimalnya adalah 6

*/

function capitalH(height){
 // Put your code here
    var result = '';
    if (height % 2 === 0) {
        var mid1 = height/2 - 1;
        var mid2 = height/2;              
    }
    else {
        mid1 = Math.floor(height/2);
    }
    var length = height + 2;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < length; j++) {
            if (j === 0 || j === length-1) {
                result += '|';
            }
            else {
                if (i === mid1 || i === mid2) {
                    if (j > 0 && j < length-1) {
                        result += '-';
                    }
                }
                else {
                    result += ' ';
                }    
            }
        }
        result += '\n';     
    }
    console.log(result);
}

//Test case
capitalH(3);
capitalH(5);
capitalH(6);
capitalH(9);
capitalH(11);