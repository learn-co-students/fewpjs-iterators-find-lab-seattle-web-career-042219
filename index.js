const testVar = {}

function superbowlWin(record) {
  let game = record.find(game => game['result'] === "W")
  if (game) {
  	 return game['year'];
  }
}
