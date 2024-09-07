const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const dif = [];
const sortedNumber = input.slice(1).sort((a, b) => a - b);
sortedNumber.forEach((v, i) => {
  if (i > 0) {
    dif.push(v - sortedNumber[i - 1]);
  }
});

const euclidean = (a, b) => {
  while (b !== 0) [a, b] = [b, a % b];
  return a;
};

let gcd = dif[0];
for (let i = 1; i < dif.length; i++) {
  gcd = euclidean(gcd, dif[i]);
}

// const getDivisors = (n) => {
//   const front = [];
//   const mid = Math.sqrt(n);
//   for (let i = 1; i < mid; i++) if (n % i === 0) front.push(i);
//   const back = front.map((v) => n / v).reverse();
//   if (n % mid === 0) return [...front, mid, ...back];
//   else return [...front, ...back];
// };

const getDivisors = (n) => {
  const divisors = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (i !== n / i) divisors.push(n / i);
    }
  }
  return divisors.sort((a, b) => a - b);
};

const divisors = getDivisors(gcd);
const remove1 = divisors[0] === 1 ? divisors.slice(1) : divisors;
const answer = remove1.join(" ");

console.log(answer);
