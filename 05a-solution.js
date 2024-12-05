let input = require("fs")
  .readFileSync("./05-input.txt", "utf-8")
  .split("\n\n")
  .map(e => e.split('\n'))
let rules = input[0].map(e => e.split('|').map(Number))
let updates = input[1].map(e => e.split(',').map(Number))
let middleNumbers = []

updates.forEach((update) => {
  validUpdate = true
  update.forEach(e => {
    rules.filter((f) => ((update.indexOf(f[0]) != -1) && (update.indexOf(f[1]) != -1)))
      .map(f => {
        if(((f.indexOf(e) == 0) && (update.indexOf(e) > update.indexOf(f[1]))) ||
          ((f.indexOf(e) == 1) && (update.indexOf(e) < update.indexOf(f[1]))))
          validUpdate = false
      })
  })
  if (validUpdate == true) middleNumbers.push(update[Math.floor(update.length / 2)])
})

console.log(middleNumbers.reduce((a,b) => a + b, 0))
