// -------------ASSIGNMENT QUESTIONS-(Arrays)_03-----------//

//-----------------Question no_01------------- //

// 💡 Question 1:
// Given an integer array nums of length n and an integer target, find three integers
// in nums such that the sum is closest to the target.
// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2

// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Ans:
function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = Infinity;
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }
            if (sum > target) {
                right--;
            } else if (sum < target) {
                left++;
            } else {
                return sum;
            }
        }
    }
    return closestSum;
}

//-----------------Question no_02------------- //

// 💡 Question 2:
// Given an array nums of n integers, return an array of all the unique quadruplets
// [nums[a], nums[b], nums[c], nums[d]] such that:
//            ● 0 <= a, b, c, d < n
//            ● a, b, c, and d are distinct.
//            ● nums[a] + nums[b] + nums[c] + nums[d] == target

// You may return the answer in any order.

// Example 1:
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

Ans:
var fourSum = function (nums, target) {
    nums.sort((a, b) => +a - +b)
    let ans = []
    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) continue 
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j - 1] === nums[j]) continue 
            let k = j + 1
            let l = nums.length - 1
            while (k < l) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l]
                if (sum === target) {
                    ans.push([nums[i], nums[j], nums[k], nums[l]])
                    k++
                    while (nums[k - 1] === nums[k] && k < l) k++ 
                } else if (sum > target) l--
                else k++
            }
        }
    }
    return ans
};

//-----------------Question no_03------------- //

// 💡 Question 3:
// A permutation of an array of integers is an arrangement of its members into a
// sequence or linear order.

// For example, for arr = [1,2,3], the following are all the permutations of arr:
// [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].

// The next permutation of an array of integers is the next lexicographically greater
// permutation of its integer. More formally, if all the permutations of the array are
// sorted in one container according to their lexicographical order, then the next
// permutation of that array is the permutation that follows it in the sorted container.

// If such an arrangement is not possible, the array must be rearranged as the
// lowest possible order (i.e., sorted in ascending order).

// ● For example, the next permutation of arr = [1,2,3] is [1,3,2].
// ● Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// ● While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not
// have a lexicographical larger rearrangement.

// Given an array of integers nums, find the next permutation of nums.
// The replacement must be in place and use only constant extra memory.

// **Example 1:**
// Input: nums = [1,2,3]
// Output: [1,3,2]

Ans:
function nextPermutation(nums) {
    let k = nums.length - 2;
    while (k >= 0 && nums[k] >= nums[k + 1]) {
        k--;
    }
    if (k === -1) {
        nums.reverse();
        return;
    }
    let l = nums.length - 1;
    while (l > k && nums[l] <= nums[k]) {
        l--;
    }
    [nums[k], nums[l]] = [nums[l], nums[k]];
    let left = k + 1;
    let right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}

//-----------------Question no_04------------- //

// 💡 Question 4:
// Given a sorted array of distinct integers and a target value, return the index if the
// target is found. If not, return the index where it would be if it were inserted in
// order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

Ans:
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}

//-----------------Question no_05------------- //

// 💡 Question 5:
// You are given a large integer represented as an integer array digits, where each
// digits[i] is the ith digit of the integer. The digits are ordered from most significant
// to least significant in left-to-right order. The large integer does not contain any
// leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]

// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4]. 

Ans:
function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
}

//-----------------Question no_06------------- //

// 💡 Question 6:
// Given a non-empty array of integers nums, every element appears twice except
// for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only
// constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

Ans:
function singleNumber(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
}

//-----------------Question no_07------------- //

// 💡 Question 7:
// You are given an inclusive range [lower, upper] and a sorted unique integer array
// nums, where all elements are within the inclusive range.

// A number x is considered missing if x is in the range [lower, upper] and x is not in
// nums.

// Return the shortest sorted list of ranges that exactly covers all the missing
// numbers. That is, no element of nums is included in any of the ranges, and each
// missing number is covered by one of the ranges.

// Example 1:
// Input: nums = [0,1,3,50,75], lower = 0, upper = 99
// Output: [[2,2],[4,49],[51,74],[76,99]]

// Explanation: The ranges are:
// [2,2]
// [4,49]
// [51,74]
// [76,99]

Ans:
function findMissingRanges(nums, lower, upper) {
    let result = [];
    let prev = lower - 1;
    for (let i = 0; i <= nums.length; i++) {
        let curr = (i === nums.length) ? upper + 1 : nums[i];
        if (curr - prev >= 2) {
            result.push(getRange(prev + 1, curr - 1));
        }
        prev = curr;
    }
    return result;
}

function getRange(lower, upper) {
    return (lower === upper) ? `${lower}` : `${lower}->${upper}`;
}

//-----------------Question no_08------------- //

// 💡 Question 8:
// Given an array of meeting time intervals where intervals[i] = [starti, endi],
// determine if a person could attend all meetings.

// Example 1:
// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: false

Ans:
function canAttendMeetings(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < intervals[i - 1][1]) {
            return false;
        }
    }
    return true;
}
