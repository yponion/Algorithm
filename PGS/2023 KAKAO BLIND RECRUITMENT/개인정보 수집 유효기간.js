function solution(today, terms, privacies) {
  var answer = [];

  const dayToNumber = (day) => {
    let [y, m, d] = day.split(".").map(Number);
    return y * 12 * 28 + m * 28 + d;
  };

  const toD = dayToNumber(today);

  const termsAry = {};
  terms.forEach((element) => {
    const [type, num] = element.split(" ");
    termsAry[type] = parseInt(num);
  });

  privacies.forEach((element, index) => {
    const [day, type] = element.split(" ");
    const d = dayToNumber(day) + termsAry[type] * 28 - 1;
    if (d < toD) answer.push(index + 1);
  });

  return answer;
}

today = "2022.05.19";
terms = ["A 6", "B 12", "C 3"];
privacies = ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]; // [1, 3]

// today = "2020.01.01";
// terms = ["Z 3", "D 5"];
// privacies = [
//   "2019.01.01 D",
//   "2019.11.15 Z",
//   "2019.08.02 D",
//   "2019.07.01 D",
//   "2018.12.28 Z",
// ]; // [1, 4, 5]

console.log(solution(today, terms, privacies));
// solution(today, terms, privacies);
