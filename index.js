function superbowlWin(arr) {
  let result = arr.find(e => e.result === "W")
  if (result) {
    return result.year
  } else {
    return undefined
  }
}
