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
  lists[0].map((e, i) => {
    if(lists[1].indexOf(e) !== -1){
      return e * Math.abs((lists[1].lastIndexOf(e) - lists[1].indexOf(e) + 1))
    }
    return 0
  })
  .reduce((a,b) => a + b)
  )