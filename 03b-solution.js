results = []
includeResult = true
matches = [...require("fs").readFileSync("./03-input.txt", "utf-8")
  .matchAll(/mul\(\d+,\d+\)|don't\(\)|do\(\)/gm)]
matches.forEach((match) => {
  if (match[0].indexOf("don't()") !== -1) includeResult = false
  if (match[0].indexOf("do()") !== -1) includeResult = true
  if ((match[0].indexOf("mul(") !== -1) && includeResult) 
    results.push(match[0].slice(4,-1).split(",").map(Number))
})
console.log(results.reduce((a,b) => a + (b[1] * b[0]), 0))
