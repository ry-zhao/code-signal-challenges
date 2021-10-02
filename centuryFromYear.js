//  PSEUDOCODE
//  if less than or equal to 100
//      return 1
//  else
//      divide year by 100 and .floor() it, storing it in variable called hundreds
//      if year modulo hundreds*100 is equal to zero
//          return hundreds
//      else
//          return hundreds + 1


function centuryFromYear(year) {
  if (year <= 100) {
    return 1;
  } else {
    var hundreds = Math.floor(year / 100);
    if (year % (hundreds * 100) === 0) {
      return hundreds;
    } else {
      return hundreds + 1;
    }
  }
}
