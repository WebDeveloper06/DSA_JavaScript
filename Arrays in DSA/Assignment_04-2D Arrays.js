// -------------ASSIGNMENT QUESTIONS-(2D-Arrays)_04-----------//

//-----------------Question no_01------------- //

// 💡 Question 1:
// Given three integer arrays arr1, arr2 and arr3 sorted in **strictly increasing** order, return a sorted array of **only** the integers that appeared in **all** three arrays.

// Example 1:

// Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]

// Output: [1,5]

// Explanation: Only 1 and 5 appeared in the three arrays.

Ans:
function findCommonElements(arr1, arr2, arr3) {
    let i = 0;
    let j = 0;
    let k = 0;
    let result = [];
    while (i < arr1.length && j < arr2.length && k < arr3.length) {
        if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
            result.push(arr1[i]);
            i++;
            j++;
            k++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr2[j] < arr3[k]) {
            j++;
        } else {
            k++;
        }
    }
    return result;
}

//-----------------Question no_02------------- //

// 💡 Question 2:

// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// - answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// - answer[1] is a list of all distinct integers in nums2 which are not present in nums1.

// Note that the integers in the lists may be returned in any order.

// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4,6]

// Output: [[1,3],[4,6]]

// Explanation:

// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].

// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

Ans:
function findDistinctElements(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let diff1 = [...set1].filter(x => !set2.has(x));
    let diff2 = [...set2].filter(x => !set1.has(x));
    return [diff1, diff2];
}

//-----------------Question no_03------------- //

// 💡 Question 3:
// Given a 2D integer array matrix, return the transpose of matrix.

// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]

// Output: [[1,4,7],[2,5,8],[3,6,9]]

Ans:
function transpose(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    return matrix;
}

//-----------------Question no_04------------- //

// 💡 Question 4:
// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return *the maximized sum*.

// Example 1:

// Input: nums = [1,4,3,2]

// Output: 4

// Explanation: All possible pairings (ignoring the ordering of elements) are:

// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3

// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3

// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4

// So the maximum possible sum is 4.

Ans:
function arrayPairSum(nums) {
    nums.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }
    return sum;
}

//-----------------Question no_05------------- //

// 💡 Question 5:
// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rowsof the staircase you will build.

// Input: n = 5

// Output: 2

// Explanation: Because the 3rd row is incomplete, we return 2.

Ans:
function arrangeCoins(n) {
    let left = 0;
    let right = n;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let curr = mid * (mid + 1) / 2;
        if (curr === n) {
            return mid;
        } else if (curr < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
}

//-----------------Question no_06------------- //

// 💡 Question 6:
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]

// Output: [0,1,9,16,100]

// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100]

Ans:
function sortedSquares(nums) {
    let left = 0;
    let right = nums.length - 1;
    let result = new Array(nums.length);
    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[i] = nums[left] * nums[left];
            left++;
        } else {
            result[i] = nums[right] * nums[right];
            right--;
        }
    }
    return result;
}

//-----------------Question no_07------------- //

// 💡 Question 7:
// You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

// Count and return the number of maximum integers in the matrix after performing all the operations

// Example 1:

// Input: m = 3, n = 3, ops = [[2,2],[3,3]]

// Output: 4

// Explanation: The maximum integer in M is 2, and there are four of it in M. So return 4.

Ans:
var maxCount = function(m, n, ops) {
    let minA = m;
    let minB = n;
    for (let i = 0; i < ops.length; i++) {
        minA = Math.min(minA, ops[i][0]);
        minB = Math.min(minB, ops[i][1]);
    }
    return minA * minB;  
};

//-----------------Question no_08------------- //

// 💡 Question 8

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form* [x1,y1,x2,y2,...,xn,yn].

// Example 1:

// Input: nums = [2,5,1,3,4,7], n = 3

// Output: [2,3,5,4,1,7]

// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

Ans:
function rearrangeArray(nums) {
    let n = nums.length / 2;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            let temp = nums[n + i - 1];
            nums[n + i - 1] = nums[n - i + j];
            nums[n - i + j] = temp;
        }
    }
    return nums;
}

