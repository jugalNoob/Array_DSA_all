::::::::::FindMissingNumber:::::::::::

function findMissingNumber(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return num.length * (num.length + 1) / 2 - sum;
}
console.log(findMissingNumber([0,1,2,4])); // Output will be 3 (as 3 is the missing number in the array)

