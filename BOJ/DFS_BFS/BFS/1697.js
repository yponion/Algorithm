const [n, k] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const queue = [n];
let head = 0;

const distance = Array(100001).fill(-1);
distance[n] = 0;

while (head < queue.length) {
  const arrive = queue[head++];
  if (arrive - 1 >= 0) {
    // X - 1
    if (
      distance[arrive - 1] === -1 ||
      distance[arrive - 1] > distance[arrive] + 1
    ) {
      distance[arrive - 1] = distance[arrive] + 1;
      queue.push(arrive - 1);
    }
  }
  if (arrive + 1 <= 100000) {
    // X + 1
    if (
      distance[arrive + 1] === -1 ||
      distance[arrive + 1] > distance[arrive] + 1
    ) {
      distance[arrive + 1] = distance[arrive] + 1;
      queue.push(arrive + 1);
    }
  }
  if (arrive * 2 <= 100000) {
    // X * 2
    if (
      distance[arrive * 2] === -1 ||
      distance[arrive * 2] > distance[arrive] + 1
    ) {
      distance[arrive * 2] = distance[arrive] + 1;
      queue.push(arrive * 2);
    }
  }
}

console.log(distance[k]);
