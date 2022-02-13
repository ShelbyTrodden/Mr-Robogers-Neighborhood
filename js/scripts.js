// UI Logic

function noInputtedNumber() {
  for (let i=0; i < arguments.length; i++) {
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}

// Business Logic

function RobogersNeighborhood(Num) {
  if (noInputtedNumber(Num)) {
    return 0;
  }

}


// UI Logic

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
}