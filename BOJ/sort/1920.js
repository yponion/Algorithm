input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input.shift());
const A = input.shift().split(" ").map(Number);
const m = parseInt(input.shift());
const B = input.shift().split(" ").map(Number);

const uniqueA = [...new Set(A)];
uniqueA.sort((a, b) => a - b);

const search = (start, end, value) => {
  //   console.log(uniqueA.slice(start, end), value);
  len = end - start;
  if (len === 1) {
    if (uniqueA[start] === value) return 1;
    else return 0;
  } else if (len === 2) {
    if (uniqueA[start] === value || uniqueA[start + 1] === value) return 1;
    else return 0;
  } else {
    const mid = start + Math.floor(len / 2);
    if (uniqueA[mid] === value) {
      return 1;
    } else if (uniqueA[mid] > value) {
      return search(start, mid, value);
    } else {
      return search(mid + 1, end, value);
    }
  }
};

const result = [];

B.forEach((value) => {
  result.push(search(0, uniqueA.length, value));
});

console.log(result.join("\n"));
