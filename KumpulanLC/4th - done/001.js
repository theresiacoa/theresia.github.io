/**

Drone Position
==============

Implementasikan function dronePosition untuk mencari koordinat drone yang
ada di dalam `grid`. Drone akan direpresentasikan sebagai karakter '*'.

Format koordinat: <baris>, <kolom>

# Asumsi:
- Drone ('*') selalu berjumlah 1, tidak mungkin ada drone lain

Contoh input ada di test case.

# Aturan coding:
- WAJIB menyertakan algoritma / pseudocode
*/
/* PSEUDOCODE

STORE 'result' with blank string

FOR each value of 'grid' with increment index(i) (add by 1)
  FOR each value of 'grid' index(i) with increment index(j) (add by 1)
    IF 'grid' index(i) and index(j) equals to '*' THEN
      ADD 'result' with index(i) value and index(j) value
    END IF
  END LOOP
END LOOP

IF result equals to 0 THEN
  DISPLAY 'NO DRONE'
ELSE
  DISPLAY 'result'

 */

function dronePosition (grid) {
  var result = ''; 

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '*') {
        result += i + ', ' + j;
      }
    }
  }
  if (result === '') {
    return 'No drone';
  }
  return result;
}

console.log(dronePosition([
  ['', '', ''],
  ['', '', ''],
  ['', '', '*']
])); // 2, 2

console.log(dronePosition([
  ['', '', ''],
  ['', '*', ''],
  ['', '', '']
])); // 1, 1

console.log(dronePosition([
  ['', '', '*'],
  ['', '', ''],
  ['', '', '']
])); // 0, 2

console.log(dronePosition([
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
])); // No drone
