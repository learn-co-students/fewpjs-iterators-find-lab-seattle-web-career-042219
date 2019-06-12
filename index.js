function superbowlWin(record) {
  let result = record.find(win => win.result === "W")
  if (result) {
    return result.year;
  } 
}