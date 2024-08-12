input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 인접 행렬
const adj = Array.from(Array(parseInt(input[0]) + 1), () =>
  Array(parseInt(input[0]) + 1).fill(false)
);

// 인접 행렬 초기화
input.slice(2).forEach((value) => {
  let [i, j] = value.split(" ").map(Number);
  adj[i][j] = adj[j][i] = true;
});

// DFS 방문 노드
const visitedDFS = Array(adj.length + 1).fill(false);

// 감염시킨 컴퓨터 개수
let cnt = 0;

// 깊이 우선 탐색 => 행을 순회하며 연결되어있고 방문하지 않은 행으로 이동 (재귀)
const dfs = (V) => {
  visitedDFS[V] = true;
  cnt++;
  for (let i = 1; i < adj.length; i++) {
    if (adj[V][i] === true && visitedDFS[i] === false) {
      dfs(i);
    }
  }
};

dfs(1);

console.log(cnt - 1);
