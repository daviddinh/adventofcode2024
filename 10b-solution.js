let input = require("fs")
  .readFileSync("./10-input.txt", "utf-8")
  .split("\n").map(e => e.split('').map(Number))

let trailheads = input.map((row, rID) => 
  row.map((col,cID) => {
    if (col == 0) return [rID,cID]
  })).flat().filter(e => e)

const nextPossibleSteps = (p) => {
  let currentH = input[p[0]]?.[p[1]]
  let nextSteps = []
  if (input[p[0]]?.[p[1]-1] == (currentH + 1)) nextSteps.push([p[0],p[1]-1])
  if (input[p[0]-1]?.[p[1]] == (currentH + 1)) nextSteps.push([p[0]-1,p[1]])
  if (input[p[0]]?.[p[1]+1] == (currentH + 1)) nextSteps.push([p[0],p[1]+1])
  if (input[p[0]+1]?.[p[1]] == (currentH + 1)) nextSteps.push([p[0]+1,p[1]])
  return nextSteps
}

let possibleRoutes = trailheads.map(e => {
  let routes = new Array()
  routes.push([e])
  let i = 0 
  while(i < 9) {
    routes = routes.map(route => {
        let nextSteps = nextPossibleSteps(route.at(-1))
        if (nextSteps.length > 0) {
          return nextSteps.map(f => route.slice().concat([f]))
        }
        return [route]
    }).flat()
    i++
  }
  return routes
})

console.log(possibleRoutes
  .map(e => e.filter(f => f.length > 9).length)
  .reduce((a,b) => a + b,0 )
)
