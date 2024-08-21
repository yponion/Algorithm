// 1: 익은 토마토, 0: 익지 않은 토마토, -1: 빈 상자
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [col, row] = input.shift().trim().split(" ").map(Number);

const container = Array.from({ length: row }, () =>
  input.shift().trim().split(" ").map(Number)
);

const queue = [];
const distance = Array.from({ length: row }, () => Array(col).fill(0));

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (container[i][j] === 1)
      queue.push([i, j]); // 익은 토마토 기본 값 0, 큐에 삽입
    else if (container[i][j] === 0) distance[i][j] = -1; // 익지 않은 토마토 -1
    // 빈상자 기본값 0
  }
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let head = 0;

while (head < queue.length) {
  const [x, y] = queue[head++];
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 0 || nx >= row || ny < 0 || ny >= col) continue; // 범위 초과 넘어감
    if (distance[nx][ny] === -1) {
      // 익지 않을 토마토일 경우
      distance[nx][ny] = distance[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
}

const day = () => {
  let max = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (distance[i][j] === -1) return -1;
      if (distance[i][j] > max) max = distance[i][j];
    }
  }
  return max;
};

console.log(day());
