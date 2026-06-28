// この関数を定義
const determinant2 = (x, y, z, w) => {
  return x*w - y * z;
};

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const [a, b, c, d] = input.split(" ");

const answer = determinant2(a, b, c, d);
console.log(answer);