// 55-50+40 => 55-(50+40) 가 최소가 된다 => -로 split 하여 +한것들 앞에 -달아주면 최소가 된다.

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const splitMinus = input.split("-");
for (let i = 0; i < splitMinus.length; i++) {
  const splitPlus = splitMinus[i].split("+").map(Number);
  let sum = 0;
  splitPlus.forEach((v) => {
    sum += v;
  });
  splitMinus[i] = sum;
}

let result = splitMinus[0];
splitMinus.splice(1).forEach((v) => (result -= v));
console.log(result);
