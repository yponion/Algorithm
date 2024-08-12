input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.shift());

const graph = Array.from({ length: N + 1 }, () => []);

input.forEach((line) => {
  let [a, b] = line.split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
});

const parent = Array(N + 1).fill(0);

const dfs = (node) => {
  for (let next of graph[node]) {
    if (parent[next] === 0) {
      parent[next] = node;
      dfs(next);
    }
  }
};

dfs(1);

console.log(parent.slice(2).join("\n"));
