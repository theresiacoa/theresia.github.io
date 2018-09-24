function makanTerusRekursif(waktu) {
  if (waktu <= 0) {
    return 0;
  } else {
    waktu -=15;
    return 1 + makanTerusRekursif(waktu);
  }
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0

/**
 66
  return 1+ rec(51)
    return 1+ rec(36)
      return 1+ rec(21)
        return 1+ rec(6)
          return 1+ rec(-9) == 0
            return 0
    
 */