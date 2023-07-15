function isValidChess960(pieces) {
  for (let i = 0; i < pieces.length; i++) {
    if (pieces[i] === "B" && (pieces[i + 1] === "B" || pieces[i - 1] === "B")) {
      return true;
    } else if (
      (pieces[i] === "K" && i > 0 && pieces[i - 1] === "R") ||
      (i < pieces.length - 1 && pieces[i + 1] === "R")
    ) {
      return true;
    }
  }
  return false;
}

function toIndustrial(time) {
  if (typeof time === "number") {
    return time * 0.02;
  } else if (typeof time === "string") {
    return;
  }
}

function powerOf4(n) {
  return Number.isInteger(n) && Number.isInteger(Math.log(n) / Math.log(4));
}

function getFreeUrinals(urinals) {
  let uriArray = urinals.split("").map(Number);
  for (let i = 0; i < uriArray.length; i++) {
    if (uriArray[i - 1] === 1 || uriArray[i + 1] === 1) {
      return -1;
    } else if (uriArray[i - 1] === 0 || uriArray[i + 1] === 0) {
      return 0;
    } else {
      return 3;
    }
  }
}

function lineupStudents(students) {
  if (typeof students === "string") {
    let arrayStudent = students.split(/\s+/);
    return arrayStudent.sort((a, b) => b.length - a.length);
  } else if (
    Array.isArray(students) &&
    students.every((e) => typeof e === "string")
  ) {
    return students.sort((a, b) => b.length - a.length);
  }
}

function totalAmountVisible(topNum, numOfSides) {
  return numOfSides * (numOfSides + 1) + topNum;
}
