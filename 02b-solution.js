let reports = require("fs")
  .readFileSync("./02-input.txt", "utf-8")
  .split("\n")
  .map(e => e.split(' ').map(f => Number(f)))
  .map((report) => {
    let validReport = false
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
    if (status.filter(f => !!f).length == 2) validReport = true

    if (!validReport) {
        report.forEach((_, j) => {
          let sReport = report.slice(0,j).concat(report.slice(j+1));
          let status = [true, true, true]
          sReport.forEach((e, i) => {
            if (i > 0) {
              if (e < sReport[i - 1]) status[0] = false // Not all decreasing
              if (e > sReport[i - 1]) status[1] = false // Not all increasing
              if (Math.abs(e - sReport[i-1]) < 1 || Math.abs(e - sReport[i-1]) > 3) {
                status[2] = false  // at least one and at most three.
              }
            }
          })
          if (status.filter(f => !!f).length == 2) validReport = true
      })
    }
    return validReport
  })

console.log(reports.filter(e => e).length)
