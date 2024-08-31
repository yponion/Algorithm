// function solution(participant, completion) {
//   const a = new Set(participant);
//   const b = new Set(completion);

//   let answer = [...a.difference(b)][0]; // node 22.0.0 이상에서 difference 메서드 지원
//   return answer;
// } // 동명이인 => 중복제거 되면 안됨

const aryToMap = (ary) => {
  const tmpMap = new Map();
  ary.forEach((element) => {
    if (tmpMap.has(element)) tmpMap.set(element, tmpMap.get(element) + 1);
    else tmpMap.set(element, 1);
  });
  return tmpMap;
};

function solution(participant, completion) {
  const mapA = aryToMap(participant);
  completion.forEach((element) => {
    if (mapA.get(element) > 1) {
      mapA.set(element, mapA.get(element) - 1);
    } else {
      mapA.delete(element);
    }
  });
  return [...mapA][0][0];
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
