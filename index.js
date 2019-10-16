// Your code here
function mapToNegativize(sourceArray) {
  let newArray = sourceArray.map(el => el*-1);
  return newArray;
}

function mapToNoChange(sourceArray) {
  return sourceArray
}

function mapToDouble(sourceArray) {
  return sourceArray.map(el => el * 2);
}

function mapToSquare(sourceArray) {
  return sourceArray.map(el => el ** 2);
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  return sourceArray.reduce((memo, val)=> {
    return memo + val;
  }, startingPoint)
}

function reduceToAllTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (!src[i]) return false
  }
  return true
}

function reduceToAnyTrue(src) {
  for (let index = 0; index < src.length; index++) {
    if  (src[index]) {
      return true
    }
  }
  return false
}