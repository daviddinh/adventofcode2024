let input = require("fs")
  .readFileSync("./05-input.txt", "utf-8")
  .split("\n\n")
  .map(e => e.split('\n'))
let rules = input[0].map(e => e.split('|').map(Number))
let updates = input[1].map(e => e.split(',').map(Number))
let middleNumbers = []

const checkValidUpdate = (update) => {
  var validUpdate = true
  update.forEach(e => {
    let invalidRules = rules.filter((f) => (
      (update.indexOf(f[0]) != -1) && (update.indexOf(f[1]) != -1)) && 
      (((f.indexOf(e) == 0) && (update.indexOf(e) > update.indexOf(f[1]))) ||
      ((f.indexOf(e) == 1) && (update.indexOf(e) < update.indexOf(f[1])))
    ))
    if (invalidRules.length > 0) validUpdate = false
  })
  return validUpdate
}

const swapElements = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]]
}

let invalidUpdates = updates.filter((update) => !checkValidUpdate(update))

invalidUpdates.forEach((update) => {
  let validUpdate = false
  while(validUpdate == false) {
    update.forEach(e => {
      let rulesToApply =
        rules.filter((f) => ((update.indexOf(f[0]) != -1) && (update.indexOf(f[1]) != -1)) &&
          (((f.indexOf(e) == 0) && (update.indexOf(e) > update.indexOf(f[1]))) ||
          ((f.indexOf(e) == 1) && (update.indexOf(e) < update.indexOf(f[1])))))
      if (rulesToApply.length > 0) {
        swapElements(update, update.indexOf(rulesToApply[0][0]), update.indexOf(rulesToApply[0][1]))
      }
      validUpdate = checkValidUpdate(update)
    })
  }
  middleNumbers.push(update[Math.floor(update.length / 2)])
})

console.log(middleNumbers.reduce((a,b) => a + b, 0))
