const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let target = array.find(record => record.result == "W");
  if (target) {
    return target.year;
  }
  return undefined;
}
