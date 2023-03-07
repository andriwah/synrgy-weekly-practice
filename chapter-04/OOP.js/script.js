// 4.1 OOP
/* 1 
Buatlah sebuah class Vehicle
Attribute: isEngineActivated
Method: start (instance) -> menampilkan string “Mesin berhasil menyala” jika isEngineActivated-nya true jika tidak “Mesin gagal menyala”, explode (static) -> menampilkan string “Berhasil meledakkan kendaraan” 
*/
class Vehicle {
  constructor(isEngineActivated) {
    this.isEngineActivated = isEngineActivated;
  }
  // instance
  start() {
    if (this.isEngineActivated) {
      console.log('Mobil berhasil menyala');
    } else {
      console.log('Mobil gagal menyala');
    }
  }
  // static
  static explode() {
    console.log('Berhasil meledakkan kendaraan');
  }
}
// const vehicle = new Vehicle(true);
// vehicle.start();
// Vehicle.explode();

/* 2 
Buatlah sebuah class Car child dari class Vehicle
Attribute: name, brand, price
Method: start (instance) dengan parameter isFuelNotEmpty, jika isEngineActivated dan isFuelNotEmpty true tampilkan string “Mesin berhasil menyala” jika tidak “Mesin gagal menyala”, explode (static) -> sama seperti parent, buy (instance) dengan parameter money, jika moneynya cukup / >= price tampilkan string “Berhasil membeli NAMA_MOBIL, dengan kembalian JUMLAH_KEMBALIAN” jika tidak kembali tidak usah dikasih tau dong. Kalo ga cukup juga kasih tau 
*/
class Car extends Vehicle {
  constructor(isEngineActivated, name, brand, price) {
    super(isEngineActivated);
    this.name = name;
    this.brand = brand;
    this.price = price;
  }
  // instance
  start(isFuelNotEmpty) {
    super.start();
    if (this.isEngineActivated && isFuelNotEmpty) {
      console.log(`Mobil ${this.name} berhasil menyala`);
    } else {
      console.log(`Mobil ${this.name} gagal menyala`);
    }
  }
  // static
  static explode() {
    super.explode();
  }
  // instance
  buy(money) {
    if (money > this.price) {
      let changeMoney = money - this.price;
      if (changeMoney > 0) {
        console.log(`Berhasil membeli ${this.name} ${this.brand}, dengan uang kembalian ${changeMoney}`);
      }
    } else if (money == this.price) {
      console.log(`Pembelian Mobil ${this.name} ${this.brand} Sukses`);
    } else if (money < this.price) {
      console.log(`Uang anda tidak mencukupi`);
    }
  }
}
// let car = new Car(true, 'JIMNY', 'SUZUKI', 154000000);
// car.start(true);
// Car.explode();
// car.buy(154000000);


/* 3 
Buatlah sebuah class Product
Attribute: id (return value / hasil generate dari method generateID, name, price, stock, isStockReady (return value dari method checkIsStockReady)
Method: generateID (instance & private) -> return string, checkIsStockReady -> cek kalo stock > 0 return true else false, getProduct() -> mengembalikan semua attribute dalam bentuk object
*/
class Product {
  constructor(name, price, stock) {
    this.id = this.generateId();
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.isStockReady = this.checkIsStockReady();
  }
  generateId() {
    let id = Math.floor(Math.random() * 100)
    return id.toString();
  }
  checkIsStockReady() {
    return this.stock != 0 ? true : false;
  }
  getProduct() {
    const data = {
      id: this.id,
      name: this.name,
      price: this.price,
      stock: this.stock,
    };
  }
}

let product = new Product('hanphone', '10000', 0);
console.log(product);
