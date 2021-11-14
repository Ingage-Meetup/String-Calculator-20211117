// Implement your exercise in this file.  If you need to implement additional functions,
// remember to export them as well, if you need to access them in your unit test.
function doAllTheThings() {
    console.log("Hi there");
    return true;
}

const add = (number) => {
    let sum = 0;
    let negatives = [];
    if (number !== '') {
        let nums = number.toString().split(/[\n,]+/);
        nums.forEach((num) => {
            if (num < 0) {
                negatives.push(num);
            }
            else if (num <= 1000) {
                sum += parseInt(num);
            }
        });
        if (negatives.length > 0) {
            throw ("negatives not allowed " + negatives)
        }
    }
    return sum;
}

const sub = (number) => {
    let diff = 0;
    let negatives = [];
    if (number !== '') {
        let nums = number.toString().split(/[\n,]+/);
        if (nums[0] < 0) {
            negatives.push(nums[0]);
        }
        if (nums[1] < 0) {
            negatives.push(nums[1]);
        }
        if (negatives.length > 0) {
            throw ("negatives not allowed " + negatives)
        }
        diff = nums[0] - nums[1];
    }
    return diff;
}

const mul = (number) => {
    let product = 1;
    let negatives = [];
    if (number !== '') {
        let nums = number.toString().split(/[\n,]+/);
        nums.forEach((num) => {
            if (num < 0) {
                negatives.push(num);
            }
            else if (num <= 1000) {
                product *= parseInt(num);
            }
        });
        if (negatives.length > 0) {
            throw ("negatives not allowed " + negatives)
        }
    }
    return product;
}

module.exports = { doAllTheThings, add, sub, mul };