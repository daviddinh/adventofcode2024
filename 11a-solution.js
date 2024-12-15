let input = require("fs")
  .readFileSync("./11-input.txt", "utf-8")
  .split(" ").map(Number)

const change = (stone) => {
  if (stone == 0) return 1
  if (stone.toString().length % 2 == 0) {
    let stoneString = stone.toString()
    return [
      stoneString.slice(0, stoneString.length / 2),
      stoneString.slice(stoneString.length / 2)]
      .map(Number)
  }
  return stone * 2024
}

const blink = (input) => input.map(e => change(e)).flat()
let blinks = 0
while (blinks < 25) {
  input = blink(input)
  console.log("Blink number:", blinks + 1, "- Number of rocks: ", input.length)
  blinks++
}
