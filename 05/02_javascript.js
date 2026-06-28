/**
 *
 *今、2 つの文字列の長さの差を計算する関数 lengthDiff を実装しようとしています。
 *具体的には、2 つの文字列を受け取り、その 2 つの文字列の長さの差を 0 以上の整数として返す関数にしたいと思います。
 */
const lengthDiff = (s,t) => {
    return Number(s.length) - Number(t.length);
};

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const [s, t] = input.split("\n");

const answer = Math.abs(lengthDiff(s, t));

console.log(answer);

/**
 * 
    * const lengthDiff = (str1, str2) => {
    const diff = str1.length - str2.length;
    if (diff < 0) {
        return -1 * diff;
    } else {
        return diff;
    }
    };

    const fs = require("fs");
    const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
    const [s, t] = input.split("\n");
 * 
 */