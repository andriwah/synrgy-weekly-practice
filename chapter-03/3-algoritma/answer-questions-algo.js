/*Nomor 1
Yudi ingin menarik uang sebanyak X rupiah dari ATM. Mesin ATM hanya akan menerima transaksi jika X kelipatan 5
dan saldo rekening Yudi memiliki cukup uang untuk melakukan transaksi penarikan (termasuk biaya bank). Untuk
setiap penarikan yang berhasil, bank mengenakan biaya 0,5 rupiah.
Diberikan X adalah uang yang ingin yudi tarik dan Y adalah jumlah uang dalam rekening Yudi. Ayo hitung saldo
akun Yudi setelah melakukan transaksi!

Petunjuk
Cukup lakukan operasi aritmatika biasa.  */

function atmWithDrawal(withDraw, balance) {
  let amount = 0;
  if (withDraw % 5 === 0) {
    amount = withDraw;
  } else {
    return console.log('nilai invalid');
  }

  if (balance > amount) {
    amount += 0.5;
    balance -= amount;
  } else {
    return console.log('Saldo tidak cukup');
  }

  return balance;
}

// console.log(atmWithDrawal(2500, 4000));

// /* 
// Nomor 2
// Nilai ujian mahasiswa dikategorikan sebagai berikut :
// ● - A : 91 - 100
// ● - B : 81 - 90
// ● - C : 71 - 80
// ● - D : 61 - 70
// ● - E : <= 60\
// Diberikan sebuah nilai ujian, tentukan kategori dari nilai tersebut

// Petunjuk
// Check input dan cocokan dengan kategori yang telah dibuat.
// */

function nilaiUjian(x) {
  let hasilUjian = '';
  if (x >= 91) {
    hasilUjian = 'A';
  } else if (x >= 81) {
    hasilUjian = 'B';
  } else if (x >= 71) {
    hasilUjian = 'C';
  } else if (x >= 61) {
    hasilUjian = 'D';
  } else if (x <= 60) {
    hasilUjian = 'E';
  }
  return hasilUjian;
}

// console.log(nilaiUjian(62));

// /* 
// Nomor 3
// Diberikan sebuah string alamat IP yang valid. Untuk
// setiap tanda . pada alamat IP gantilah menjadi tanda ()

// Petunjuk
// Loop string tersebut dan replace simbol yang di
// maksud.
// */

// cara 1
function ipAddress (str){
    let string = "";
    for (let i = 0; i < str.length; i++){
        if (str[i] === "." ){
            string += "()";
        }
        else {
            string += str[i];
        }
    }
    return string
}

// console.log(ipAddress("192.168.0.1"))

// cara 2
function alamatIP(ip) {
  let arr = ip.split('.');
  console.log(arr);

  let newIp = '';

  arr.map((value, index) => {
    console.log(value);

    if (index + 1 !== arr.length) {
      newIp += value + '()';
    } else {
      newIp += value;
    }
  });
  return newIp;
}

// console.log(alamatIP('192.168.0.1'));

/* 
Nomor 4
Diberikan sebuah angka n, jumlahkanlah
masing-masing digit pada angka tersebut.

Petunjuk
Gunakan operator modulus untuk mengambil setiap
digit dari angka tersebut
*/


/*
input -> n = 239

result = 9 + 3 + 2
result = 0
result += 239 % 10 -> 9
239 / 10 -> 23
result += 23 % 10 -> 3
result = 9 + 3 = 12
23 / 10 -> 2
result += 2 % 10 -> 2
result = 12 + 2 = 14
2 / 10 -> 0 */

function a(n){
    let result = 0
    while(n > 0){
        let satuan = n % 10
        console.log("satuan : " + satuan)
        result += satuan
        console.log("result : " + result)
        n = Math.floor(n/10)
        console.log("bilangan : " + n)
    }

    return result

}
// console.log(a(239))

/* 
Nomor 5
Diberikan sebuah string s. Tentukan apakah terdapat
karakter `a` dan `b` yang jarak `a ke b` atau `b ke a`
yang memiliki jarak minimal 3 karakter.
Return "YES" jika ya dan "NO" jika tidak.

Petunjuk
Check tiap karakter kemudian check 4 karakter
setelahnya.
*/

function checkCharacter(names) {
    let posA = 0
    let posB = 0
    for(let i = 0; i < names.length; i++){
      if(names[i] === 'a'){
        if(posA == 0){
          posA = i
        }
      }else if(names[i] === 'b'){
        if (posB == 0) {
          posB = i
        }
      }
    }
    let distance = Math.abs(posA-posB) - 1 
    let result = "YES"
    if(distance <= 3){
      result = "NO"
    }
    console.log(posA, distance , posB)
    return result
  }
  
  console.log(checkCharacter('aebbbwan'))