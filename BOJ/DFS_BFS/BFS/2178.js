input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 입력 처리
let [N, M] = input.shift().split(" ").map(Number);
const maze = input.map((line) => line.split("").map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const visitedMaze = Array.from(Array(N), () => Array(M).fill(false));

const bfs = (x, y) => {
  const queue = [];
  queue.push([x, y]);
  visitedMaze[x][y] = true;

  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < M &&
        maze[nx][ny] === 1 &&
        !visitedMaze[nx][ny]
      ) {
        visitedMaze[nx][ny] = true;
        maze[nx][ny] = maze[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
};

bfs(0, 0);

console.log(maze[N - 1][M - 1]);
