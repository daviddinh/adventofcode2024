let input = require("fs")
  .readFileSync("./12-input.txt", "utf-8")
  .split("\n").map(e => e.split(""))

let plants = {}
let price = 0

input.forEach((row,rID) => {
  row.forEach((col,cID) => {
    if(plants[col] == undefined) {
      plants[col] = [[rID,cID]]
    } else {
      plants[col].push([rID,cID])
    }
  })
})

for (const [key, arr] of Object.entries(plants)) {
  let perimeter = 0
  let area = arr.length
  arr.forEach(e => {
    let ePerimeter = 4
    if (arr.find(f => (f[0] - 1 == e[0]) && (f[1] == e[1]))) ePerimeter -= 1
    if (arr.find(f => (f[0] + 1 == e[0]) && (f[1] == e[1]))) ePerimeter -= 1
    if (arr.find(f => (f[0] == e[0]) && (f[1] - 1 == e[1]))) ePerimeter -= 1
    if (arr.find(f => (f[0] == e[0]) && (f[1] + 1 == e[1]))) ePerimeter -= 1
    perimeter += ePerimeter
  })
  price += (perimeter * area)
}

console.log(price)
