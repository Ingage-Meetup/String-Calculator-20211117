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
            throw("negatives not allowed " + negatives)
        }
    }
    return sum;
}

module.exports = { doAllTheThings, add };