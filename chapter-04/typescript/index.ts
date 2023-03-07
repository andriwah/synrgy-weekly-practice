// No. 1

function atmWithDrawal(withDraw:number, balance:number): any {
    let amount: number = 0;
    let msg: string = ''
    if (withDraw % 5 === 0) {
      amount = withDraw;
    } else {
      return msg = 'nilai invalid';
    }
  
    if (balance > amount) {
      amount += 0.5;
      balance -= amount;
    } else {
      return msg = 'Saldo tidak cukup';
    }
  
    return balance;
  }
//  console.log(atmWithDrawal(1000000, 4000000));
  
// No. 2

function nilaiUjian(x:number): string {
    let hasilUjian:string = '';
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
 console.log(nilaiUjian(90));;

//  No. 3

function ipAddress (str:string): string{
    let address:string = "";
    for (let i = 0; i < str.length; i++){
        if (str[i] === "." ){
            address += "()";
        }
        else {
            address += str[i];
        }
    }
    return address
}
// console.log(ipAddress("192.168.0.1"));

// No.4

function a(n:number): number{
    let result:number = 0
    while(n > 0){
        let satuan:number = n % 10
        result += satuan
        n = Math.floor(n/10)
    }

    return result

}
// console.log(a(239))

// No.5

function checkCharacter(names:string): string{
    let posA:number = 0;
    let posB:number = 0;
    for(let i = 0; i < names.length; i++){
        // console.log(i)
      if(names[i] === 'a'){
        if(posA == 0){
          posA = i;
          console.log(posA)
        }
      }else if(names[i] === 'b'){
        if (posB == 0) {
          posB = i;
        }
      }
    }
    let distance:number = Math.abs(posA-posB) - 1;
    let result:string = '';
    if( distance === 3 ){
        result = "YES"
    } else if( distance < 3 ){
        result = "NO";
    } 
    // console.log(posA, posB, distance)
    return result
  }
  
//   console.log(checkCharacter('acccb'));
//   console.log(checkCharacter('bccca'));
//   console.log(checkCharacter('cccca'));