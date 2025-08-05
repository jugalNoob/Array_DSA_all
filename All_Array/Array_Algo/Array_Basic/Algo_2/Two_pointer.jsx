5::Two Pointers with a Single Loop:
function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return [left, right]; // Indices of the pair
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null; // If no pair is found
}
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]





2:::Two pointer
function twoSum(arr, target) {
    // Sort the array (if it's not already sorted)
    arr.sort((a, b) => a - b);

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            return [arr[left], arr[right]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return null; // No such pair found
}

// Example usage
const arr = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(arr, target)); // Output: [2, 7]

