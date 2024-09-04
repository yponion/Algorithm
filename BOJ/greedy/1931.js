const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const ary = [];
input.slice(1).forEach((v) => ary.push(v.split(" ").map(Number)));

ary.sort((a, b) => {
  if (a[1] < b[1]) return -1;
  else if (a[1] > b[1]) return 1;
  else {
    if (a[0] < b[0]) return -1;
    else if (a[0] > b[0]) return 1;
    else return 0;
  }
});

let time = 0;
let cnt = 0;
ary.forEach((v) => {
  if (v[0] >= time) {
    time = v[1];
    cnt++;
  }
});

console.log(cnt);
