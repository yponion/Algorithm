// 시작 기둥, 보조 기둥, 목표 기둥 => 가장 아래 원판을 목표 기둥으로 보내기 위해선 그 위의 원판을 보조 기둥으로 이동

const hanoi = (n, start, sub, end, answer) => {
  if (n === 1) answer.push([start, end]);
  else {
    hanoi(n - 1, start, end, sub, answer); // 1. n-1개의 원판 => 시작 기둥 -> 보조 기둥
    answer.push([start, end]); // 2. 가장 큰 원판 => 목표 기둥으로 이동
    hanoi(n - 1, sub, start, end, answer); // 1. n-1개의 원판 => 보조기둥 -> 목표 기둥
  }
};

const solution = (n) => {
  const answer = [];
  hanoi(n, 1, 2, 3, answer);
  return answer;
};

console.log(solution(2));
