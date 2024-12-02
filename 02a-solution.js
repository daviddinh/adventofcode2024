let reports = require("fs")
  .readFileSync("./02-input.txt", "utf-8")
  .split("\n")
  .map(e => e.split(' ').map(f => Number(f)))
  .map((report) => {
    let status = [true, true, true]
    report.forEach((e, i) => {
      if (i > 0) {
        if (e < report[i - 1]) status[0] = false // Not all decreasing
        if (e > report[i - 1]) status[1] = false // Not all increasing
        if (Math.abs(e - report[i-1]) < 1 || Math.abs(e - report[i-1]) > 3) {
          status[2] = false  // at least one and at most three.
        }
      }
    })
    return status
  })
  .filter(e => e.filter(f => !!f).length == 2).length

console.log(reports)
