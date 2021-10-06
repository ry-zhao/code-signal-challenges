function almostIncreasingSequence(sequence) {
  let exceptionUsed = false;
  let temp;
  for (let i = 0; i < sequence.length; i++) {
    if (i === 0) {
      temp = sequence[0];
    } else if (sequence[i] > temp) {
      temp = sequence[i];
    } else if (exceptionUsed === true) {
      return false;
    } else {
      exceptionUsed = true;
      if (i === 1) {
        for (let j = 1; j < sequence.length; j++) {
          if (j === sequence.length - 1) {
            return true;
          }
          if (!(sequence[j] < sequence[j + 1])) {
            return false;
          }
        }
      } else if (sequence[i - 1] < sequence[i + 1]) {
        for (let j = i + 2; j < sequence.length; j++) {
          if (!(sequence[j - 1] < sequence[j])) {
            break;
          }
          if (j === sequence.length - 1) {
            return true;
          }
        }
      } else if (sequence[i - 2] < sequence[i]) {
        for (let j = i + 1; j < sequence.length; j++) {
          if (!(sequence[j - 1] < sequence[j])) {
            return false;
          }
          if (j === sequence.length - 1) {
            return true;
          }
        }
      }
    }
    if (i === sequence.length - 1) {
      return true;
    }
  }
}
