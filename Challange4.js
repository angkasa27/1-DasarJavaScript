hitung = (a, r, n) => {
  let S = a;
  for (let i = 1; i < n; i++) {
    S += a * Math.pow(r, i);
  }
  return S;
};

console.log(hitung(4, 3, 10));
