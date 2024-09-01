function solution(phone_book) {
  let answer = phone_book.sort().some((v, i, a) => a[i + 1]?.startsWith(v));
  return !answer;
}

console.log(solution(["119", "97674223", "1195524421"])); // false
console.log(solution(["123", "456", "789"])); // true
