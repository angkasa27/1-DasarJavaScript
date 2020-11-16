class Lingkaran {
  constructor(rusuk) {
    if (rusuk % 7 === 0) this.phi = 22 / 7;
    else this.phi = 3.14;
    this.r = rusuk;
  }

  luas() {
    return this.phi * this.r * this.r;
  }
  keliling() {
    return this.phi * 2 * this.r;
  }
}

class Tabung extends Lingkaran {
  constructor(rusuk, tinggi) {
    super(rusuk);
    this.t = tinggi;
  }

  luasPermukaan() {
    return 2 * this.luas() + this.t * this.keliling();
  }

  volume() {
    return this.luas() * this.t;
  }
}

class Kerucut extends Lingkaran {
  constructor(rusuk, tinggi, pelukis) {
    super(rusuk);
    this.t = tinggi;
    if (pelukis) {
      this.s = pelukis;
    } else {
      this.s = Math.sqrt(this.t * this.t + this.r * this.r);
    }
  }

  luasPermukaan() {
    return this.luas() + this.phi * this.r * this.s;
  }

  volume() {
    return (this.luas() * this.t) / 3;
  }
}

class Bola extends Lingkaran {
  constructor(r, t) {
    super(r);
    this.tinggi = t;
  }

  luasPermukaan() {
    return 4 * this.luas();
  }

  volume() {
    return (this.luas() * this.r * 4) / 3;
  }
}
