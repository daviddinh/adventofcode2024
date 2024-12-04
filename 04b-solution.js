let wSearch = require("fs")
  .readFileSync("./04-input.txt", "utf-8")
  .split("\n")
  .map(e => e.split(''))
let xmasCount = 0
wSearch.forEach((row, rId) => {
  row.forEach((col, cId) => {
    if ((rId + 1 < wSearch.length) && (cId + 1 < row.length) && (rId > 0) && (cId > 0) && (col == "A")) {
      let masCount = 0
      if (((wSearch[rId-1][cId-1] == "M") && (wSearch[rId+1][cId+1] == "S"))) masCount++
      if (((wSearch[rId+1][cId+1] == "M") && (wSearch[rId-1][cId-1] == "S"))) masCount++
      if (((wSearch[rId-1][cId+1] == "S") && (wSearch[rId+1][cId-1] == "M"))) masCount++
      if (((wSearch[rId-1][cId+1] == "M") && (wSearch[rId+1][cId-1] == "S"))) masCount++
      if (masCount == 2) xmasCount++
    }
  })
})

console.log(xmasCount)
