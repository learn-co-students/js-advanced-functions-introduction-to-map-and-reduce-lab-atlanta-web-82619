// Your code here

const mapToNegativize = function(array) {
    let newArray = []
    array.forEach(item => newArray.push(-item))
    return newArray
}

const mapToNoChange = function(array) {
    let newArray = []
    array.forEach(item => newArray.push(item))
    return newArray
}

const mapToDouble = function(array) {
    let newArray = []
    array.forEach(item => newArray.push(item * 2))
    return newArray
}

const mapToSquare = function(array) {
    let newArray = []
    array.forEach(item => newArray.push(item * item))
    return newArray
}

const reduceToTotal = function(array, starting = 0) {
    let result = starting
    array.forEach(item => result += item)
    return result
}

const reduceToAllTrue = function(array) {
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) return false
    }
    return true
}

const reduceToAnyTrue = function(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]) return true
    }
    return false
}