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

function unscrambleEggs(word) {
  const redex = "/egg/g";
  return word.replace(redex, "");
}

function TestConstructor1(example) {
  this.example = example;
  this.add = function () {
    console.log(example);
  };
}

const go = new TestConstructor1("string");

go.add();

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.calculateArea = function () {
  return this.width * this.height;
};
const rectangle0 = new Rectangle(5, 10);
const area0 = rectangle.calculateArea();
console.log(area);

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(5, 10);

const area = rectangle.calculateArea();

alert(area);

function transposeTwoStrings(array) {
  return array.forEach((simbol) => {});
}

function tripleShiftian(base, n) {
  for (let i = 0; i < n; i++) {
    base[i] = 4 * base[i - 1] - 5 * base[i - 2] + 3 * base[i - 3];
    return base[n];
  }
}
