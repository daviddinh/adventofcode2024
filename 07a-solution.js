const permutations = (length) => {
  let operands = ["+", "*"]
  let results = operands.slice()
  while(results[0].length < length) {
    results = results
      .map(e => operands.map(f => e.concat(f)))
      .flat()
  }
  return results
}

const evaluateSolution = (solution) => {
  while (solution.length > 3) {
    let firstSection = eval(solution.slice(0,3).join(''))
    solution = [firstSection].concat(...solution.slice(3))
  }
  return eval(solution.join(''))
}

let input = require("fs")
  .readFileSync("./07-input.txt", "utf-8")
  .split("\n")
  .map(e => e.split(': '))
  .map(e => [Number(e[0]), e[1].split(" ").map(Number)])
  .filter(e => {
    let perms = permutations(e[1].length - 1)
    let solutions = perms
      .map(perm => e[1].map((f,i) => [f, perm[i]]).flat().slice(0, -1))
      .filter(f => evaluateSolution(f) === e[0])
    return solutions.length > 0
  })
  .map(e => e[0])
  .reduce((a, b) => a + b, 0)

console.log(input)