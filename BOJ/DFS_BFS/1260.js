const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// N: 정점의 개수, M: 간선의 개수, V: 시작할 정점의 번호
const [N, M, V] = input[0].split(" ").map(Number);

// 인접 행렬
const adj = Array.from(Array(N + 1), () => Array(N + 1).fill(false));

// 인접 행렬 초기화
input.slice(1).forEach((value) => {
  let [i, j] = value.split(" ").map(Number);
  adj[i][j] = true;
  adj[j][i] = true;
});

// DFS 방문 노드
const visitedDFS = Array(N + 1).fill(false);

// BFS 방문 노드
const visitedBFS = Array(N + 1).fill(false);

// DFS 출력할 정답
const answerDFS = [];

// BFS 출력할 정답
const answerBFS = [];

// 깊이 우선 탐색 => 행을 순회하며 연결되어있고 방문하지 않은 행으로 이동 (재귀)
const dfs = (V) => {
  visitedDFS[V] = true;
  answerDFS.push(V);
  for (let i = 1; i < adj.length; i++) {
    if (adj[V][i] === true && visitedDFS[i] === false) {
      dfs(i);
    }
  }
};

// 너비 우선 탐색 => 행을 담은 queue를 생성하여 해당 행을 다 순회하면 다음 행으로 넘어감
const bfs = (V) => {
  visitedBFS[V] = true;
  answerBFS.push(V);

  const queue = [];
  queue.push(V);

  while (queue.length !== 0) {
    let dequeue = queue.shift();
    for (let i = 1; i < adj.length; i++) {
      if (adj[dequeue][i] === true && visitedBFS[i] === false) {
        visitedBFS[i] = true;
        queue.push(i);
        answerBFS.push(i);
      }
    }
  }
};

dfs(V);
bfs(V);
console.log(answerDFS.join(" "));
console.log(answerBFS.join(" "));
