// Your code here
function mapToNegativize(array){
    let newArray = [];
    array.forEach(element => {newArray.push(element * -1)});
    return newArray;
}

function mapToNoChange(array){
    return array
}

function mapToDouble(array){
    let newArray = [];
    array.forEach(element => {newArray.push(element * 2)});
    return newArray;
}

function mapToSquare(array){
    let newArray = [];
    array.forEach(element => {newArray.push(element * element)});
    return newArray;

}

function reduceToTotal(array, initial = 0){
    let total = initial
    array.forEach(element=> {total += element});
    return total
}

function reduceToAllTrue(array){
    for (let i = 0; i < array.length; i++){
        if (!array[i]){
            return false
        }
    }
    return true
}

function reduceToAnyTrue(array){
    for (let i = 0; i <array.length; i++){
        if(array[i]){
            return true
        }
    }
    return false
}
