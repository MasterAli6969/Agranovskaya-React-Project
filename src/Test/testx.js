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

function minimumPerimeter(area) {
  return;
}
