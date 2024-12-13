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

antennaPairs.map(e => { // Get antinodes
  e[1].map(f => {
    let gradient = [f[1][0] - f[0][0], f[1][1] - f[0][1]]
    let antinode1 = [f[0][0]-gradient[0], f[0][1]-gradient[1]]
    let antinode2 = [f[1][0]+gradient[0], f[1][1]+gradient[1]]
    if(input[antinode1[0]] != undefined && input[antinode1[0]][antinode1[1]] != undefined) {
      antinodes.push(antinode1.join("_"))
    }
    if(input[antinode2[0]] != undefined && input[antinode2[0]][antinode2[1]] != undefined) {
      antinodes.push(antinode2.join("_"))
    }
  })
})

console.log(antinodes.filter((e, i) => antinodes.indexOf(e) === i).length)
