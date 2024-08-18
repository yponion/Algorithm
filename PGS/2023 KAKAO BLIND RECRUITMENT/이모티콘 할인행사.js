//   1 <= users.length <= 100;
//   1 <= emoticons.length <= 7;
function solution(users, emoticons) {
  const createEmotRate = (n) => {
    const rate = [10, 20, 30, 40];
    const result = [];
    const recursion = (n, tmpAry = []) => {
      if (n === 0) {
        result.push(tmpAry);
        return;
      }
      for (let i = 0; i < rate.length; i++) {
        recursion(n - 1, [...tmpAry, rate[i]]);
      }
    };
    recursion(n);
    return result;
  };
  const emotRate = createEmotRate(emoticons.length);
  const buyList = emotRate.map(() => Array(2).fill(0));
  const buy = (users, emotRate) => {
    for (let i = 0; i < emotRate.length; i++) {
      for (let j = 0; j < users.length; j++) {
        let sum = 0;
        for (let k = 0; k < emotRate[i].length; k++) {
          if (users[j][0] <= emotRate[i][k]) {
            sum += Math.floor(emoticons[k] * ((100 - emotRate[i][k]) * 0.01));
          }
        }
        if (sum >= users[j][1]) {
          buyList[i][0] += 1;
        } else {
          buyList[i][1] += sum;
        }
      }
    }
  };
  buy(users, emotRate);
  const answer = buyList.reduce((max, curr) => {
    // 배열의 각 요소에 대해 주어진 리듀서 (reducer(감속기)) 함수를 실행하고, 하나의 결과값을 반환
    // 매개변수 1. 누산기 (acc), 2. 현재 값 (cur), 3. 현재 인덱스 (idx), 4. 원본 배열 (src)
    if (curr[0] > max[0]) return curr;
    if (curr[0] === max[0] && curr[1] > max[1]) return curr;
    return max;
  }, buyList[0]); // callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용합니다. 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생합니다.
  return answer;
}

// const users = [
//   [40, 10000],
//   [25, 10000],
// ];
// const emoticons = [7000, 9000]; // [1, 5400]

const users = [
  [40, 2900],
  [23, 10000],
  [11, 5200],
  [5, 5900],
  [40, 3100],
  [27, 9200],
  [32, 6900],
];
const emoticons = [1300, 1500, 1600, 4900]; // [4, 13860]

console.log(solution(users, emoticons));
