let input = require("fs")
  .readFileSync("./06-input.txt", "utf-8")
  .split("\n")
  .map(e => e.split(''))

let guardY = input.findIndex(e => e.indexOf("^") != -1) 
let guardX = input[guardY].findIndex(e => e.indexOf("^") != -1)
let maxPathSize = input[0].length * input[1].length
let inputString = JSON.stringify(input)
let loops = 0

input.forEach((row, rId) => {
  row.forEach((col, cId) => {
    travelledPaths = []
    position = [guardY, guardX]
    direction = 0
    tempInput = JSON.parse(inputString)
    if(col === '.') tempInput[rId][cId] = "#"
    while (position[0] >= 0 && position[0] < tempInput.length && position[1] >= 0 && position[1] < tempInput[0].length ) {
      switch(direction) {
        case 0:
          if (tempInput[position[0]-1]?.[position[1]] == "#") direction = (direction + 1) % 4
          else position[0] -= 1
          break;
        case 1:
          if (tempInput[position[0]][position[1]+1] == "#") direction = (direction + 1) % 4
          else position[1] += 1
          break;
        case 2:
          if (tempInput[position[0]+1]?.[position[1]] == "#") direction = (direction + 1) % 4
          else position[0] += 1
          break;
        case 3:
          if (tempInput[position[0]][position[1]-1] == "#") direction = (direction + 1) % 4
          else position[1] -= 1
          break;
      }
      travelledPaths.push(position.join("-"))
      if(travelledPaths.length >= maxPathSize) {
        loops++
        position[0] = -1;
      }
    }
  })
})

console.log(loops)