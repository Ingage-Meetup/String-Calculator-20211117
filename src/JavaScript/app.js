// Implement your exercise in this file.  If you need to implement additional functions,
// remember to export them as well, if you need to access them in your unit test.
function doAllTheThings() {
    console.log("Hi there");
    return true;
}

const add = (number) => {
    let sum = 0;
    if (number !== '') {
        let nums = number.toString().split(/[\n,]+/);
        nums.forEach((num) => {
            sum += parseInt(num);
        });
    }
    return sum;
}

module.exports = { doAllTheThings, add };