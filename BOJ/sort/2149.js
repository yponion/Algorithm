const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const key = input[0]
  .split("")
  .map((v, i) => [v, i])
  .sort();
const n = key.length;

const tmpText = input[1].split("");
const line = tmpText.length / n;
const cyphertext = Array.from({ length: n }, () => []);
for (let i = 0; i < tmpText.length; i++) {
  cyphertext[Math.floor(i / line)].push(tmpText[i]);
}
for (let i = 0; i < key.length; i++) cyphertext[i] = [cyphertext[i], key[i][1]];
cyphertext.sort((a, b) => a[1] - b[1]);

let plaintext = "";
for (let i = 0; i < line; i++) {
  for (let j = 0; j < n; j++) {
    plaintext += cyphertext[j][0][i];
  }
}
console.log(plaintext);
