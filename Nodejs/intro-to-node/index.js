// const fs = require("fs"); //fs모듈은 파일 시스템에 접근하는 모듈임.
//
// fs.copyFileSync("file1.txt","file2.txt"); // 파일 복사

var superheroes = require("superheroes");
var supervillain = require("supervillains");

var mySuperheroName = superheroes.random();
var mySupervillainName = supervillain.random();

console.log(mySuperheroName);
console.log(mySupervillainName);
