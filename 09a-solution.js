let input = require("fs")
  .readFileSync("./09-input.txt", "utf-8")
  .split('').map(Number)
let currentFileID = 0
let file = true
let diskMap = []

const swapElements = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]]
}
const isNumber = (element) => typeof element === "number"

input.map((e) => {
  if (file) {
    diskMap = diskMap.concat(new Array(e).fill(currentFileID))
    currentFileID++
  } else {
    diskMap = diskMap.concat(new Array(e).fill('.'))
  }
  file = !file
})

while(diskMap.indexOf('.') < diskMap.filter(e => e !== ".").length){
  swapElements(diskMap, diskMap.indexOf("."), diskMap.findLastIndex(isNumber))
}
// This can definitely be refactored to not need so much memory

console.log(diskMap.filter(isNumber).reduce((a,b,i) => a + (b * i), 0))
