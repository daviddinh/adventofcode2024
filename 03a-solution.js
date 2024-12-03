const regex = /mul\(\d+,\d+\)/gm
let results = []
while ((m = regex.exec(require("fs").readFileSync("./03-input.txt", "utf-8"))) !== null) 
  m.map((match) => {results.push(match.slice(4,-1).split(",").map(Number))})
console.log(results.reduce((a,b) => a + (b[1] * b[0]), 0))
