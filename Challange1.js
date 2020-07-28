//Pesanan Pak Arman

hitungPPN = (p, l, harga) => {
  let hargaTanah = p * l * harga;
  let PPN = (hargaTanah * 15) / 100;
  let total = PPN + hargaTanah;
  return total.toString();
};

let total = hitungPPN(20.5, 30, 1500000);
console.log(
  "Rp" +
    total
      .split("")
      .reverse()
      .join("")
      .match(/.{1,3}/g)
      .map((x) => x.split("").reverse().join(""))
      .reverse()
      .join(".")
);

//output "Rp1.060.875.000"

//Code yang nge sclice jadi 3 bagian (line 14-21) googling Hehehehe :D
