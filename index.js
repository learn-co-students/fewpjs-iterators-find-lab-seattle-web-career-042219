const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let win = array.find(year => year.result === "W")
  return win ? win.year : undefined
}