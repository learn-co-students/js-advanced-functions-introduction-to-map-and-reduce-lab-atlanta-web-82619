// Your code here
function mapToNegativize(nums) {
    let arr = [];
    nums.forEach(num => {
        arr.push(num * -1);
    })
    return arr;
}

function mapToNoChange(arr) {
    return arr;
}

function mapToDouble(nums) {
    let arr = [];
    nums.forEach(num => {
        arr.push(num * 2);
    })
    return arr;
}

function mapToSquare(nums) {
    let arr = [];
    nums.forEach(num => {
        arr.push(num ** 2);
    })
    return arr;
}

function reduceToTotal(arr, start = 0) {
    let total = start;

    arr.forEach(num => {
        total += num;
    })

    return total;
}

function reduceToAllTrue(arr) {
    let ret = true;

    arr.forEach(el => {
        if (!el) {
            ret = false;
        }
    })

    return ret;
}

function reduceToAnyTrue(arr) {
    let ret = false;

    arr.forEach(el => {
        if (el) {
            ret = true;
        }
    })
    return ret;
}