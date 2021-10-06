function adjacentElementsProduct(inputArray) {
  let largestProduct;
  let product;
  for (let i = 0; i < inputArray.length; i++) {
    let leftNum = inputArray[i];
    let rightNum = inputArray[i + 1];
    product = leftNum * rightNum;
    if (i !== 0) {
      if (product > largestProduct) {
        largestProduct = product;
      }
    } else {
      largestProduct = product;
    }
  }
  return largestProduct;
}
