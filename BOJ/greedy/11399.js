const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const atm = input[1].split(" ").map((str) => parseInt(str));
atm.sort((a, b) => a - b);
let sum = 0;
for (let i = 0; i < atm.length; i++) {
  for (let j = 0; j <= i; j++) {
    sum += atm[j];
  }
}
console.log(sum);
