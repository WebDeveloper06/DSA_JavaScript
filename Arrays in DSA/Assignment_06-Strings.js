// -------------ASSIGNMENT QUESTIONS-(Strings)_06-----------//

//-----------------Question no_01------------- //

// 💡 Question 1:

// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

// 1. - s[i] == 'I' if perm[i] < perm[i + 1], and
// 2. - s[i] == 'D' if perm[i] > perm[i + 1].

// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

// Example 1:

// Input: s = "IDID"

// Output:[0,4,1,3,2]

Ans:
function reconstructPermutation(s) {
    let n = s.length;
    let res = new Array(n + 1);
    let l = 0, r = n;
    for (let i = 0; i < n; i++) {
        if (s[i] === 'I') {
            res[i] = l++;
        } else {
            res[i] = r--;
        }

    }
    res[n] = l;
    return res;
}

//-----------------Question no_02------------- //

// 💡 Question 2:

// You are given an m x n integer matrix matrix with the following two properties:

// 1. - Each row is sorted in non-decreasing order.
// 2. - The first integer of each row is greater than the last integer of the previous row.

// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Example 1:

// ![Screenshot 2023-05-29 005303.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e4b0271f-15f0-4744-826b-18500ccfcb75/Screenshot_2023-05-29_005303.png)

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3

// Output: true

Ans:
function searchMatrix(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    let l = 0;
    let r = m * n - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let row = Math.floor(mid / n);
        let col = mid % n;
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return false;
}

//-----------------Question no_03------------- //

// 💡 Question 3:

// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// - arr.length >= 3
// - There exists some i with 0 < i < arr.length - 1 such that:
// 1. - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// 2. - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// ![Screenshot 2023-05-29 005352.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5565e778-ac57-4ced-85a2-ccb13268bdf6/Screenshot_2023-05-29_005352.png)

// Example 1:

// Input: arr = [2,1]

// Output:false

Ans:
let validMountainArray = function (A) {
    if (A.length < 3) {
      return false;
    }
    let i = 0;
    j = A.length - 1;
    while (i < A.length - 2 && A[i] < A[i + 1]) {
      i++;
    }
    while (j > 1 && A[j] < A[j - 1]) {
      j--;
    }
    return i === j;
};

//-----------------Question no_04------------- // 

// 💡 Question 4:

// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of* 0 and 1.

// Example 1:

// Input: nums = [0,1]

// Output: 2

// Explanation:

// [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

Ans:
let findMaxLength = function (nums) {
    let map = new Map();
    map.set(0, -1);
    let count = 0,
      max = 0;
    for (let i = 0; i < nums.length; i++) {
      count += nums[i] == 1 ? 1 : -1;
      if (map.has(count)) {
        max = Math.max(max, i - map.get(count));
      } else {
        map.set(count, i);
      }
    }
    return max;
};
 
//-----------------Question no_05------------- //

// 💡 Question 5:

// The product sum of two equal-length arrays a and b is equal to the sum of a[i] * b[i] for all 0 <= i < a.length (0-indexed).

// - For example, if a = [1,2,3,4] and b = [5,2,3,1], the product sum would be 1*5 + 2*2 + 3*3 + 4*1 = 22.

// Given two arrays nums1 and nums2 of length n, return the minimum product sum if you are allowed to rearrange the order of the elements in nums1.

// Example 1:

// Input: nums1 = [5,3,4,2], nums2 = [4,2,2,5]

// Output: 40

// Explanation:

// We can rearrange nums1 to become [3,5,4,2]. The product sum of [3,5,4,2] and [4,2,2,5] is 3*4 + 5*2 + 4*2 + 2*5 = 40.

Ans:
let minProductSum = function (nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => b - a);
    let res = 0;
    for (let i = 0; i < nums1.length; i++) {
      res += nums1[i] * nums2[i];
    }
    return res;
};
  
//-----------------Question no_06------------- //

// 💡 Question 6:

// An integer array original is transformed into a doubled array changed by appending twice the value of every element in original, and then randomly shuffling the resulting array.

// Given an array changed, return original if changed is a doubled array. If changed is not a doubled array, return an empty array. The elements in original *may be returned in any order.

// Example 1:

// Input: changed = [1,3,4,2,6,8]

// Output: [1,3,4]

// Explanation: One possible original array could be [1,3,4]:

// 1. - Twice the value of 1 is 1 * 2 = 2.
// 2. - Twice the value of 3 is 3 * 2 = 6.
// 3. - Twice the value of 4 is 4 * 2 = 8.

// Other original arrays could be [4,3,1] or [3,1,4].

Ans:
let findOriginalArray = function(changed) {
  let result = [];
  let map = new Map();
  
  changed.sort((a, b) => a - b);
  
  for (let i = 0; i < changed.length; i++) {
      let currentValue = changed[i];

      if (map.has(currentValue)) {
          let currentValueFrequencyAtMoment = map.get(currentValue);
          
          if (currentValueFrequencyAtMoment === 1) {
              map.delete(currentValue)
          } else {
              map.set(currentValue, currentValueFrequencyAtMoment - 1);
          }
      } else {
          let doubledValue = currentValue * 2;

          if (map.has(doubledValue)) {
              map.set(doubledValue, map.get(doubledValue) + 1);
          } else {
              map.set(doubledValue, 1);
          }

          result.push(currentValue);
      }
  }
  
  return map.size > 0 ? [] : result;
};
//-----------------Question no_07------------- //

// 💡 Question 7:

// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

// Example 1:

// ![Screenshot 2023-05-29 005522.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/00c8517f-7682-4e0b-bdd9-ce0e087f3f94/Screenshot_2023-05-29_005522.png)

// Input: n = 3

// Output: [[1,2,3],[8,9,4],[7,6,5]]

Ans:
function generateSpiralMatrix(n) {
    let matrix = Array.from({ length: n }, () => new Array(n).fill(0));
    let counter = 1,
      rowMin = 0,
      rowMax = n - 1,
      colMin = 0,
      colMax = n - 1;
  
    while (rowMin <= rowMax && colMin <= colMax) {
      for (let col = colMin; col <= colMax; col++) {
        matrix[rowMin][col] = counter++;
      }
      rowMin++;
  
      for (let row = rowMin; row <= rowMax; row++) {
        matrix[row][colMax] = counter++;
      }
      colMax--;
  
      if (rowMin <= rowMax) {
        for (let col = colMax; col >= colMin; col--) {
          matrix[rowMax][col] = counter++;
        }
        rowMax--;
      }
  
      if (colMin <= colMax) {
        for (let row = rowMax; row >= rowMin; row--) {
          matrix[row][colMin] = counter++;
        }
        colMin++;
      }
    }
  
    return matrix;
}

//-----------------Question no_08------------- //

// 💡 Question 8:

// Given two [sparse matrices](https://en.wikipedia.org/wiki/Sparse_matrix) mat1 of size m x k and mat2 of size k x n, return the result of mat1 x mat2. You may assume that multiplication is always possible.

// Example 1:

// ![Screenshot 2023-05-29 005557.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/df57e793-12bf-4104-a17b-4e6a88dc7955/Screenshot_2023-05-29_005557.png)

// Input: mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]]

// Output:[[7,0,0],[-7,0,3]]

Ans:
function multiplySparseMatrices(mat1, mat2) {
    let result = [];
    for (let i = 0; i < mat1.length; i++) {
        result[i] = [];
        for (let j = 0; j < mat2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < mat1[0].length; k++) {
                if (mat1[i][k] !== 0 && mat2[k][j] !== 0) {
                    sum += mat1[i][k] * mat2[k][j];
                }
            }
            result[i][j] = sum;
        }
    }
    return result;
}


