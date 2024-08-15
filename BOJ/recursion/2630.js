input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input.shift());
let white = 0;
let blue = 0;

const paper = Array(n);
input.forEach((line, i) => {
  paper[i] = line.split(" ").map(Number);
});

let cnt = 0;

const cut = (paper) => {
  if (paper.every((row) => row.every((value) => value === 0))) {
    white++;
  } else if (paper.every((row) => row.every((value) => value === 1))) {
    blue++;
  } else {
    const len = paper.length;
    const harf = len / 2;
    cut(paper.slice(0, harf).map((row) => row.slice(0, harf)));
    cut(paper.slice(0, harf).map((row) => row.slice(harf, len)));
    cut(paper.slice(harf, len).map((row) => row.slice(0, harf)));
    cut(paper.slice(harf, len).map((row) => row.slice(harf, len)));
  }
};

cut(paper);
console.log(white);
console.log(blue);
