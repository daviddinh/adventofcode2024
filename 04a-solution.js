let wSearch = require("fs")
  .readFileSync("./04-input.txt", "utf-8")
  .split("\n")
  .map(e => e.split(''))
let xmasCount = 0
wSearch.forEach((row, rId) => {
  row.forEach((col, cId) => {
    if (((cId + 3) < row.length) && (col == "X") && (wSearch[rId][cId+1] == "M") && (wSearch[rId][cId+2] == "A") && (wSearch[rId][cId+3] == "S")) xmasCount++ // Horizontal
    if (((rId + 3) < wSearch.length) && (col == "X") && (wSearch[rId+1][cId] == "M") && (wSearch[rId+2][cId] == "A") && (wSearch[rId+3][cId] == "S")) xmasCount++ // Vertical
    if (((cId + 3) < row.length) && ((rId + 3) < wSearch.length) && (col == "X") && (wSearch[rId+1][cId+1] == "M") && (wSearch[rId+2][cId+2] == "A") && (wSearch[rId+3][cId+3] == "S")) xmasCount++ // Diagonal Down
    if (((cId + 3) < row.length) && (rId > 2 ) && (col == "X") && (wSearch[rId-1][cId+1] == "M") && (wSearch[rId-2][cId+2] == "A") && (wSearch[rId-3][cId+3] == "S")) xmasCount++ // Diagonal Up
    if ((cId > 2) && (col == "X") && (wSearch[rId][cId-1] == "M") && (wSearch[rId][cId-2] == "A") && (wSearch[rId][cId-3] == "S")) xmasCount++ // Backwards Horizontal
    if ((rId > 2) && (col == "X") && (wSearch[rId-1][cId] == "M") && (wSearch[rId-2][cId] == "A") && (wSearch[rId-3][cId] == "S")) xmasCount++ // Backwards Vertical
    if (((rId + 2) < wSearch.length) && (cId > 2) && (col == "X") && (wSearch[rId+1][cId-1] == "M") && (wSearch[rId+2][cId-2] == "A") && (wSearch[rId+3][cId-3] == "S")) xmasCount++ // Backwards Diagonal Down
    if ((rId > 2) && (cId > 2) && (col == "X") && (wSearch[rId-1][cId-1] == "M") && (wSearch[rId-2][cId-2] == "A") && (wSearch[rId-3][cId-3] == "S")) xmasCount++ // Backwards Diagonal Up
  })
})

console.log(xmasCount)
