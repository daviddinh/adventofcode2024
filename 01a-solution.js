let lists = require("fs")
  .readFileSync("./01-input.txt", "utf-8")
  .split("\n")
  .map(e => e.split('   ')
            .map(f => Number(f))
  )
  .reduce((a, b) => {
    a[0].push(b[0])
    a[1].push(b[1])
    return a
  }, [[], []])
  .map(e => e.sort())

console.log(
  lists[0].map((e, i) => Math.abs(e - lists[1][i]))
  .reduce((a,b) => a + b)
  )