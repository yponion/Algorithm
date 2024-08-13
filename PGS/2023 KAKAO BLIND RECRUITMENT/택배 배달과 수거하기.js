function solution(cap, n, deliveries, pickups) {
  var answer = 0;

  const aryReverseFilter = (ary) => {
    return ary
      .slice()
      .reverse()
      .map((value, index) => ({ value, index }))
      .filter((item) => item.value > 0);
  };

  const dLists = aryReverseFilter(deliveries);
  let dSum = 0;
  dLists.forEach((element) => {
    dSum += element.value;
  });

  const pLists = aryReverseFilter(pickups);
  let pSum = 0;
  pLists.forEach((element) => {
    pSum += element.value;
  });

  while (dSum > 0 || pSum > 0) {
    let d = 0;
    if (dSum >= cap) {
      dSum -= cap;
      for (let i = 0; i < cap; i++) {
        if (i === 0) d = n - dLists[0].index; // 배달 가장 멀리 간 인덱스 기록
        dLists[0].value--;
        if (dLists[0].value === 0) dLists.shift();
      }
    } else if (dSum > 0) {
      dSum = 0;
      d = n - dLists[0].index; // 배달 가장 멀리간 인덱스 기록
    }
    if (pSum >= cap) {
      pSum -= cap;
      for (let i = 0; i < cap; i++) {
        if (i === 0) {
          if (d < n - pLists[0].index) {
            d = n - pLists[0].index; // 수거 가장 멀리간 인덱스가 배달 가장 멀리 간 인덱스 보다 멀다면 치환
          }
        }
        pLists[0].value--;
        if (pLists[0].value === 0) pLists.shift();
      }
    } else if (pSum > 0) {
      pSum = 0;
      if (d < n - pLists[0].index) {
        d = n - pLists[0].index; // 수거 가장 멀리간 인덱스가 배달 가장 멀리 간 인덱스 보다 멀다면 치환
      }
    }
    answer += d * 2;
  }
  return answer;
}

const cap = 4;
const n = 5;
const deliveries = [1, 0, 3, 1, 2];
const pickups = [0, 3, 0, 4, 0]; // 16

// const cap = 2;
// const n = 7;
// const deliveries = [1, 0, 2, 0, 1, 0, 2];
// const pickups = [0, 2, 0, 1, 0, 2, 0]; // 30

console.log(solution(cap, n, deliveries, pickups));
// solution(cap, n, deliveries, pickups)
