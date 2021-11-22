//  create let variable that stores how many exceptions have been used
//  traverse sequence, starting from 1
//      check if item is less than or equal to last
//          if so, increment exceptions
//          check if exceptions is more than 1
//              if so, return false
//          check if item at i+1 is less than or equal to i-1 AND if item at i is less than or equal to item   //          at i +2
//              if so, return false
//  return true

function solution(sequence) {
  const { length } = sequence;
  let exceptions = 0;
  for (let i = 1; i < length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      exceptions++;
      if (exceptions > 1) {
        return false;
      }
      if (sequence[i + 1] <= sequence[i - 1] && sequence[i] <= sequence[i - 2]) {
        return false;
      }
    }
  }
  return true;
}
