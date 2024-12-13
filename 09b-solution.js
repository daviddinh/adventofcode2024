let input = require("fs")
  .readFileSync("./09-input.txt", "utf-8")
  .split('').map(Number)
let currentFileID = 0
let file = true
let diskMap = []

input.map((e) => {
  if (file) {
    diskMap.push(new Array(e).fill(currentFileID))
    currentFileID++
  } else {
    diskMap.push(new Array(e).fill('.'))
  }
  file = !file
})
currentFileID--

for (let index = currentFileID; index > 0; index--) {
  let fileIndex = diskMap.findIndex(e => e[0] == index)
  let file = diskMap[fileIndex]
  let spaceIndex = diskMap.findIndex(e => e[0] == "." && e.length >= file.length)
  if (spaceIndex != -1 && (spaceIndex < fileIndex)) {
    let space = diskMap[spaceIndex]
    diskMap[spaceIndex] = file.slice()
    diskMap[fileIndex] = new Array(file.length).fill('.')
    if ((space.length - file.length) > 0) {
      let leftOverSpace = new Array(space.length - file.length).fill('.')
      diskMap.splice(spaceIndex + 1, 0, leftOverSpace)
    }
  }
}
console.log(diskMap.flat().reduce((a,b,i) => {
  if (b !== '.') return a + (b * i)
  return a
}, 0))
