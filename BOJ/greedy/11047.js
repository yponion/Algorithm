const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let [n, k] = input[0].split(" ").map(Number);
const ary = input.slice(1).map(Number);

let cnt = 0;

for (let i = ary.length - 1; i >= 0; i--) {
  if (k === 0) break;
  if (ary[i] > k) continue;
  cnt += Math.floor(k / ary[i]);
  k %= ary[i];
}
console.log(cnt);
