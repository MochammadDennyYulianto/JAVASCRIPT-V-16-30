function coba() {
  let belajar = "saya belajar javascript";
  console.log(belajar);
  console.log("javascript itu mudah");
}

coba();

function persegi(l, p) {
  luas = p * l;
  console.log(luas);
}

persegi(3, 6);

function out() {
  return console.log("output function");
}

function lingkaran(r) {
  luas = 3.14 * r * r;
  return luas;
}

const tinggi = 5;
let tabung = lingkaran(10) * tinggi;

function lewat(a) {
  return a;
}

//console.log(tabung);

console.log(lewat(10));
