/**
=======================================
Array of Objects  Mastery: Invoke Spell
=======================================

[INSTRUKSI]

Kael the Invoker memiliki 3 orb yaitu Quas (q), Wex (w), dan Exort (e). Jika orb ini
dikombinasikan maka akan menghasilkan salah satu dari 10 spell yang berbeda!

Diberikan function invokeSpell yang menerima parameter input, dan spell apa saja yang
dimiliki oleh Invoker sudah disediakan dalam bentuk array.

Function akan mengembalikan nama spell dari input yang dimasukkan oleh user, ex:
- input = 'eeq', output = 'Forge Spirit' (karena q = 1, w = 0, e = 2)
- input = 'www', output = 'EMP' (karena q = 0, w = 3, e = 0)
- input = 'wqz', output = 'Combination does not exist' (karena kombinasi tidak ditemukan)

NOTE:
Meskipun input terbalik atau tidak urut (ex: 'qwe', 'ewq', 'weq'), maka akan tetap mengeluarkan
spell yang sama!

RULE:
- tidak boleh menggunakan .map, .filter dan .reduce!

*/

function invokeSpell (input) {
  const spells = [
      { q: 3, w: 0, e: 0, spellName: 'Cold Snap' },
      { q: 0, w: 2, e: 1, spellName: 'Alacrity' },
      { q: 1, w: 0, e: 2, spellName: 'Forge Spirit' },
      { q: 0, w: 0, e: 3, spellName: 'Sunstrike' },
      { q: 1, w: 2, e: 0, spellName: 'Tornado' },
      { q: 0, w: 3, e: 0, spellName: 'EMP' },
      { q: 0, w: 1, e: 2, spellName: 'Chaos Meteor' },
      { q: 1, w: 1, e: 1, spellName: 'Deafening Blast' },
      { q: 2, w: 0, e: 1, spellName: 'Ice Wall' },
      { q: 2, w: 1, e: 0, spellName: 'Ghost Walk' },
  ];

  var jumlahQ = 0, jumlahW = 0, jumlahE = 0;

  for (var i = 0; i < input.length; i++) {
    if (input[i] === 'q') {
      jumlahQ++;
    } else if (input[i] === 'w') {
      jumlahW++;
    } else if (input[i] === 'e') {
      jumlahE++;
    }
  }

  for (var j = 0; j < spells.length; j++) {
    if (jumlahQ === spells[j].q) {
      if (jumlahW === spells[j].w) {
        if (jumlahE === spells[j].e) {
          return spells[j].spellName;
        } else {
          return 'Combination does not exist';
        }
      }
    }
  }
}

console.log(invokeSpell('qwe')); // Deafening Blast
console.log(invokeSpell('ewq')); // Deafening Blast
console.log(invokeSpell('qqq')); // Cold Snap
console.log(invokeSpell('wwq')); // Tornado
console.log(invokeSpell('wwe')); // Alacrity
console.log(invokeSpell('wew')); // Alacrity
console.log(invokeSpell('wqa')); // Combination does not exist
