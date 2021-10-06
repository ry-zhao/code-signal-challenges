function checkPalindrome(inputString) {
  var reversed = '';
  for (var i = inputString.length - 1; i >= 0; i--) {
    reversed += inputString[i];
  }
  if (inputString === reversed) {
    return true;
  } else {
    return false;
  }
}
