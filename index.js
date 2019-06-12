function superbowlWin(arr) {
  let result = arr.find(e => e.result === "W")
  return !!result ? result.year : undefined
}
