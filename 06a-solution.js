let input = require("fs")
  .readFileSync("./06-input.txt", "utf-8")
  .split("\n")
  .map(e => e.split(''))
let guardY = input.findIndex(e => e.indexOf("^") != -1) 
let guardX = input[guardY].findIndex(e => e.indexOf("^") != -1)
let position = [guardY, guardX]
let direction = 0
let travelledPaths = new Set()
travelledPaths.add(position.join("-"))
while (position[0] >= 0 && position[0] < input.length && 
  position[1] >= 0 && position[1] < input[0].length ) {
  switch(direction) {
    case 0:
      if (input[position[0]-1][position[1]] == "#") direction = (direction + 1) % 4
      else position[0] -= 1
      break;
    case 1:
      if (input[position[0]][position[1]+1] == "#") direction = (direction + 1) % 4
      else position[1] += 1
      break;
    case 2:
      if (input[position[0]+1][position[1]] == "#") direction = (direction + 1) % 4
      else position[0] += 1
      break;
    case 3:
      if (input[position[0]][position[1]-1] == "#") direction = (direction + 1) % 4
      else position[1] -= 1
      break;
  }
  travelledPaths.add(position.join("-"))
}

console.log(travelledPaths.size - 1) // To account for that step outside the lab
