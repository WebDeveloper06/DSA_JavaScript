// -------------ASSIGNMENT QUESTIONS-(Serching and Shorting)_09-----------//

//-----------------Question no_01------------- //

// 💡 Question 1:

// Given a 1-indexed array of integer numbers that are already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.

// Return the indices of the two numbers, index1, and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.
// Your solution must use only constant extra space.

// Input: numbers = [2,7,11,15], target = 9

// Output: [1,2]

// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Ans:
function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
}

//-----------------Question no_02------------- //

// 💡 Question 2:

// Given an array of integer numbers sorted in non-decreasing order, find the starting and ending position of a given target value.
// If the target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity

// Input: nums = [5,7,7,8,8,10], target = 8

// Output: [3,4]

Ans:
function searchRange(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let start = -1;
    let end = -1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            start = mid;
            end = mid;
            while (nums[start - 1] === target) {
                start--;
            }
            while (nums[end + 1] === target) {
                end++;
            }
            break;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return [start, end];
}

//-----------------Question no_03------------- //

// 💡 Question 3:

// A peak element is an element that is strictly greater than its neighbor.
// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
// You must write an algorithm that runs in O(log n) time.

// Input: nums = [1,2,3,1]

// Output: 2

// Explanation: 3 is a peak element and your function should return the index number 2.

Ans:
function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

//-----------------Question no_04------------- //

// 💡 Question 4:

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Input: nums = [1,3,5,6], target = 7
// Output: 4

Ans:
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
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

// Find the majority element in the array. A majority element in an array A[] of size n is an element that appears more than n/2 times (and hence there is at most one such element). 

// Input: A[]={3, 3, 4, 2, 4, 4, 2, 4, 4}

// Output: 4

// Explanation: The frequency of 4 is 5 which is greater than half of the size of the array size. 

Ans:
function majorityElement(nums) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] === undefined) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        }
        if (hash[nums[i]] > nums.length / 2) {
            return nums[i];
        }
    }
    return -1;
}

//-----------------Question no_06------------- //

// 💡 Question 6:

// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
// You are given an API bool isBadVersion(version) which returns whether the version is bad. Implement a function to find the first bad version. You should minimise the number of calls to the API.

// Input: n = 5, bad = 4
// Output: 4

// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.

Ans:
function firstBadVersion(n) {
    let left = 1;
    let right = n;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (isBadVersion(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

//-----------------Question no_07------------- //

// 💡 Question 7:

// Given an array of integers, find the inversion of an array. Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.
// N=5, arr[] = {2, 4, 1, 3, 5}

// Output: 3

// Explanation: (2,1) (4,1) and (4,3) forms an inversion in an array.

Ans:
function getInversions(arr) {
    let inversions = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          inversions++;
        }
      }
    }
    return inversions;
}

//-----------------Question no_08------------- //

// 💡 Question 8:

// Given three arrays sorted in non-decreasing order, print all common elements in these arrays.
// ar1[] = {1, 5, 10, 20, 40, 80} 
// ar2[] = {6, 7, 20, 80, 100} 
// ar3[] = {3, 4, 15, 20, 30, 70, 80, 120} 
// Output: 20, 80

Ans:
function findCommonElements(arr1, arr2, arr3) {
    let i = 0;
    let j = 0;
    let k = 0;
    const result = [];
  
    while (i < arr1.length && j < arr2.length && k < arr3.length) {
      if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
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
  

