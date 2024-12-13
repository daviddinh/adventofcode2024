let input = require("fs")
  .readFileSync("./08-input.txt", "utf-8")
  .split("\n")
  .map(e => e.split(""))
let antennas = {}
let antinodes = []
let antennaPairs = []

input.map((row, rID) => // Get antennas
  row.map((col, cID) => {
    if(col != ".") {
      if(antennas[col] === undefined) {
        antennas[col] = [[rID, cID]]
      } else {
        antennas[col].push([rID,cID])
      }
    }
  })
)

for (const [key, value] of Object.entries(antennas)) {
    antennaPairs.push( // Get Pairs
      [key, value.flatMap((v, i) => value.slice(i+1).map(w => [v, w]))])
}

const inMap = (coords) =>
  (input[coords[0]] != undefined && input[coords[0]][coords[1]] != undefined)


antennaPairs.map(e => { // Get antinodes
  e[1].map(f => {
    let gradient = [f[1][0] - f[0][0], f[1][1] - f[0][1]]
    let current = [f[0][0],f[0][1]]
    antinodes.push(current.join("_"))
    while(inMap(current)) {
      current = [current[0] - gradient[0], current[1] - gradient[1]]
      if(inMap(current)) antinodes.push(current.join('_'))
    }
    current = [f[0][0],f[0][1]]
    antinodes.push(current.join("_"))
    while(inMap(current)) {
      current = [current[0] + gradient[0], current[1] + gradient[1]]
      if(inMap(current)) antinodes.push(current.join('_'))
    }
  })
})

console.log(antinodes.filter((e, i) => antinodes.indexOf(e) === i).length)
