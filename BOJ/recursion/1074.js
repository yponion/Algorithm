const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [n, r, c] = input.map((value) => value);

const quarter = (n, r, c) => {
  if (n === 1) return 0;
  const harf = n / 2;
  const pow = Math.pow(n, 2);
  if (r < harf && c < harf) {
    return pow * (0 / 4) + quarter(harf, r, c);
  } else if (r < harf && c >= harf) {
    return pow * (1 / 4) + quarter(harf, r, c - harf);
  } else if (r >= harf && c < harf) {
    return pow * (2 / 4) + quarter(harf, r - harf, c);
  } else if (r >= harf && c >= harf) {
    return pow * (3 / 4) + quarter(harf, r - harf, c - harf);
  }
};

console.log(quarter(Math.pow(2, n), r, c));
