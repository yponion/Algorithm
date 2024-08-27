// // 공을 벽을 기준으로 대칭 이동 시켜서 피타고라스를 이용하여 다른 공과의 거리를 구하면 됨.

const minDist = (m, n, startX, startY, arriveX, arriveY) => {
  let min = 5000000;
  if (
    !(startY === arriveY && startX > arriveX) && // 가로로 같은 선 상에서 수구가 목적구 보다 오른쪽이면 왼쪽벽으로 안감
    min >
      Math.pow(startX + arriveX, 2) + Math.pow(Math.abs(startY - arriveY), 2)
  ) {
    min =
      Math.pow(startX + arriveX, 2) + Math.pow(Math.abs(startY - arriveY), 2);
  }
  if (
    !(startY === arriveY && startX < arriveX) && // 가로로 같은 선 상에서 수구가 목적구 보다 왼쪽이면 오른쪽벽으로 안감
    min >
      Math.pow(m - startX + m - arriveX, 2) +
        Math.pow(Math.abs(startY - arriveY), 2)
  ) {
    min =
      Math.pow(m - startX + m - arriveX, 2) +
      Math.pow(Math.abs(startY - arriveY), 2);
  }
  if (
    !(startX === arriveX && startY > arriveY) && // 세로로 같은 선 상에서 수구가 목적구 보다 위쪽이면 아래쪽벽으로 안감
    min >
      Math.pow(startY + arriveY, 2) + Math.pow(Math.abs(startX - arriveX), 2)
  ) {
    min =
      Math.pow(startY + arriveY, 2) + Math.pow(Math.abs(startX - arriveX), 2);
  }
  if (
    !(startX === arriveX && startY < arriveY) && // 세로로 같은 선 상에서 수구가 목적구 보다 아래쪽이면 위쪽벽으로 안감
    min >
      Math.pow(n - startY + n - arriveY, 2) +
        Math.pow(Math.abs(startX - arriveX), 2)
  ) {
    min =
      Math.pow(n - startY + n - arriveY, 2) +
      Math.pow(Math.abs(startX - arriveX), 2);
  }
  return min;
};

function solution(m, n, startX, startY, balls) {
  var answer = [];
  balls.forEach((element) => {
    answer.push(minDist(m, n, startX, startY, element[0], element[1]));
  });
  return answer;
}

solution(10, 10, 3, 7, [
  [7, 7],
  [2, 7],
  [7, 3],
]); //[52, 37, 116]

// 위: 제출한 코드
// 아래: 다른 사람의 풀이를 보고 깔끔하게 정리한 코드

// function solution(m, n, startX, startY, balls) {
//   var answer = [];
//   balls.forEach((element) => {
//     const [x, y] = element;
//     const value = [];

//     // 가로로 같은 선 상에서 수구가 목적구 보다 오른쪽이면 왼쪽벽으로 안감
//     if (!(startY === y && startX > x))
//       value.push((startX + x) ** 2 + (startY - y) ** 2);

//     // 가로로 같은 선 상에서 수구가 목적구 보다 왼쪽이면 오른쪽벽으로 안감
//     if (!(startY === y && startX < x))
//       value.push((2 * m - startX - x) ** 2 + (startY - y) ** 2);

//     // 세로로 같은 선 상에서 수구가 목적구 보다 위쪽이면 아래쪽벽으로 안감
//     if (!(startX === x && startY > y))
//       value.push((startY + y) ** 2 + (startX - x) ** 2);

//     // 세로로 같은 선 상에서 수구가 목적구 보다 아래쪽이면 위쪽벽으로 안감
//     if (!(startX === x && startY < y))
//       value.push((2 * n - startY - y) ** 2 + (startX - x) ** 2);

//     answer.push(Math.min(...value));
//   });

//   return answer;
// }

// solution(10, 10, 3, 7, [
//   [7, 7],
//   [2, 7],
//   [7, 3],
// ]); //[52, 37, 116]
