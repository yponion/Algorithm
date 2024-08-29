function solution(numbers) {
  var answer = "";
  numbers.sort(function (a, b) {
    const sa = String(a);
    const sb = String(b);
    return Number(sb + sa) - Number(sa + sb);
    // compareFunction의 반환값
    // 음수: a를 b 보다 앞에 배치, 0: 순서 유지, 양수: b를 a 보다 앞에 배치
  });
  numbers.forEach((element) => {
    answer += element;
  });
  if (Number(answer) === 0) return "0";
  return answer;
}

console.log(solution([6, 10, 2])); // "6210"
console.log(solution([3, 30, 34, 5, 9])); // "9534330"
console.log(solution([0, 0])); // "0"
