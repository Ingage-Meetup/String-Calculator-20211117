// Implement your exercise in this file.  If you need to implement additional functions,
// remember to export them as well, if you need to access them in your unit test.
function doAllTheThings() {
    console.log("Hi there");
    return true;
}

const add = (number) => {
    console.log("Passed in number is: ", number)
    let sum = 0;
    if (number !== '') {
        let nums = number.toString().split(',');
        console.log(nums)
        if (nums.length === 1){
            sum = parseInt(nums[0]);
        }
        else if (nums.length === 2) {
            sum = parseInt(nums[0]) + parseInt(nums[1]);
        }
    }
    return sum;
}

module.exports = { doAllTheThings, add };