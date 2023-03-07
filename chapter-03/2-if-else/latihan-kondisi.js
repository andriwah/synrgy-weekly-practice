// 3.2 Operator JS

/* Buatlah sebuah variabel integer x dan y, 

lakukan penjumlahan terhadap kedua variabel tersebut lalu lakukan pengecekan, 

apabila hasilnya lebih dari 0 maka lakukan pengecekan lagi, 

jika hasilnya habis dibagi 2 maka tuliskan pesan “Angka lebih dari 0 dan habis dibagi 2”,

jika tidak “Angka lebih dari 0 namun tidak habis dibagi 2”. Jika tidak tuliskan “Angka tidak lebih dari 0”. */


let x = 5;
let y = 7;
let sum = x + y;
// let result = x + y;

// cara 1
// let result = sum > 0 ? (sum % 2 === 0 ? "Angka lebih dari 0 dan habis dibagi 2" : "Angka lebih dari 0 namun tidak habis dibagi 2") : "angka tidak lebih dari 0";

// console.log(result)

// cara 2
// if ( result > 0 ) {
//     if ( result % 2 === 0){
//         console.log( "Angka lebih dari 0 dan habis dibagi 2")
//     } else {
//         console.log("Angka lebih dari 0 namun tidak habis dibagi 2")
//     }
// } else {
//     console.log ("angka tidak lebih dari 0");
// }

if ( sum > 0 && sum % 2 === 0 ){
    console.log("angka lebih dari 0 dan habis dibagi 2");
} else if ( sum > 0 && sum % 2 !== 0 ){
    console.log("angka lebih dari 0 dan tidak habis dibagi 2")
} else {
    console.log ("angka tidak lebih dari 0")
}