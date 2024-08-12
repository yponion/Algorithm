function solution(edges) {
  var answer = [0, 0, 0, 0];
  const graph = []; // 그래프 간선을 저장
  edges.forEach(([a, b]) => {
    if (!graph[a]) graph[a] = [];
    graph[a].push(b);
  });

  let createNode = -1; // 생성 노드
  const createNodeCandidates = []; // 생성 노드 후보

  // 간선 리스트를 순회하며, 뻗어나가는 노드가 2개 초과이면 생성 노드
  // 2개 이상인 것은 생성 노드 후보 리스트에 추가
  graph.some((value, index) => {
    if (value.length > 2) {
      createNode = index;
      return true;
    }
    if (value.length >= 2) {
      createNodeCandidates.push(index);
      return false;
    }
  });

  // 2개 초과인 것이 없어 생성 노드가 지정되지 않았다면
  if (createNode === -1) {
    // 생성 노드 후보가 1개일 때. 즉시 지정
    if (createNodeCandidates.length === 1) {
      createNode = createNodeCandidates[0];
    } else {
      // 생성 노드 후보가 여러개 일 때. 생성 노드 후보 리스트를 순회하며 들어오는 간선이 없는 노드가 생성 노드.
      let exist = false;
      for (let i = 0; i < createNodeCandidates.length; i++) {
        for (let j = 0; j < graph.length; j++) {
          if (!graph[j]) continue;
          if (graph[j].includes(createNodeCandidates[i])) {
            exist = true;
            break;
          }
        }
        if (!exist) {
          createNode = createNodeCandidates[i];
          break;
        }
        exist = false;
      }
    }
  }

  answer[0] = createNode;

  const visite = (node, start) => {
    let stack = [{ node, start }]; // 재귀 깊이 제한 10,000 정도라 재귀를 반복문으로 변경함
    while (stack.length) {
      let { node, start } = stack.pop();
      if (!graph[node]) {
        return 2; // 막대 그래프. 방문할 노드가 없을 때
      } else if (graph[node].length === 2) {
        return 3; // 8자 그래프. 방문할 노드가 2개 이상일 때
      } else {
        if (graph[node][0] === start) {
          return 1; // 도넛 그래프. 다음에 방문할 노드가 처음 방문한 노드일 때
        } else {
          stack.push({ node: graph[node][0], start });
        }
      }
    }
  };

  for (let node of graph[createNode]) {
    answer[visite(node, node)]++;
  }

  return answer;
}
