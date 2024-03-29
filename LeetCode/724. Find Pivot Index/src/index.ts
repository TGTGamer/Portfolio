// Attempt one, too slow to be accepted

export function pivotIndexSlow(nums: number[]): number {

    // First return -1 if array is empty or less than one element
    if (nums.length <= 1) return -1

    // lets find the middle of the array if greater than 0
    let middle = Math.floor(nums.length / 2)

    // lets create an index to check
    let index: Boolean | Number | null = null

    // While the index is not a number, it's not finished computing, so lets keep looping
    while (typeof (index) !== "number") {
        // update the index with the function
        index = findIndex(nums, middle) //?
        if (index == true) middle-- //?
        else if (index == false) middle++ //?

        // If the index (middle) is outside of the array, return -1
        if (middle < 0 || middle > nums.length - 1) index = -1
    }
    return index //?
};

function findIndex(nums: number[], index: number): Number | Boolean {
    let leftSum = 0
    for (let i = 0; i < index; i++) {
        leftSum += nums[i]
    }

    // lets find the sum of the right side of the array
    let rightSum = 0
    for (let i = index + 1; i < nums.length; i++) {
        rightSum += nums[i]
    }

    // lets compare the left and right sums
    if (leftSum === rightSum) return index
    else if (leftSum > rightSum) return true
    else return false
}


// Attempt two, calculate the full sum of the array then minus until we reach the index
export function pivotIndex(nums: number[]): number {
    let total = 0, compare = 0, index: number | undefined;
    // Calculate the entire sum of the array
    for (let i of nums) total += i
    // calculate the sum of each step, minus from the total (removing the index item) and see if they match
    for (let i in nums) {
        if (compare === (total - compare - nums[Number(i)])) {
            index = Number(i) //?
            break
        }
        compare += nums[i] 
    }
    // If the index is not defined, return -1
    if (index == undefined) return -1
    return index
}