const testVar = {}

function testFunc() {
  return "hi"
}

// function superbowlWin(array) {
//     array.find(isWin)
// }

// function isWin(element, index, array) {
//   if (element.result === "W") {
//     return element.year
//   } 
// }



function superbowlWin(array) {
  let found = array.find( element => element.result === "W")
  if (found) {
    return found.year
  } else {
    return undefined
  }
}