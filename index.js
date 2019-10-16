// Your code here

const mapToNegativize = function(sourceArray) {
    let newArray = []
    for(let i=0; i < sourceArray.length; i++) {
        newArray.push(-sourceArray[i])
    }
    return newArray
}

const mapToNoChange = function(sourceArray) {
    let newArray = []
    for(let i=0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i])
    }
    return newArray
}
const mapToDouble = function(sourceArray) {
    let newArray = []
    for(let i=0; i < sourceArray.length; i++) {
        newArray.push(2 * sourceArray[i])
    }
    return newArray 
}
const mapToSquare = function(sourceArray) {
    let newArray = []
    for(let i=0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * sourceArray[i])
    }
    return newArray
}

const reduceToTotal = function(sourceArray, startingPoint=0) {
    let result = startingPoint
    for(let i=0; i < sourceArray.length; i++) {
        result += sourceArray[i]
    }
    return result 
}
const reduceToAllTrue = function(sourceArray) {
    for(let i=0; i < sourceArray.length; i++) {
        if(!sourceArray[i]) return false
    }
    return true
}

const reduceToAnyTrue = function(sourceArray) {
    for(let i=0; i < sourceArray.length; i++) {
        if(sourceArray[i]) return true
    }
    return false
}
