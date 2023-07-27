// -------------ASSIGNMENT QUESTIONS-(Arrays)_01-----------//

//-----------------Question no_01------------- //

// 💡 Q1. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example: Input: nums = [2,7,11,15], target = 9 Output0 [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1][

Ans:
function twoSum(nums, target) {
  // create an empty object to store the sums and indices
  let map = {};
  // loop through the array of numbers
  for (let i = 0; i < nums.length; i++) {
    // calculate the complement of the current number and the target
    let complement = target - nums[i];
    // check if the complement is already in the map
    if (map[complement] !== undefined) {
      // if yes, return the indices of the current number and the complement
      return [map[complement], i];
    }
    // otherwise, add the current number and its index to the map
    map[nums[i]] = i;
  }
  // if no pair is found, return null
  return null;}

//-----------------Question no_02------------- //

// 💡 Q2. Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Example : Input: nums = [3,2,2,3], val = 3 Output: 2, nums = [2,2,*,*]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2. It does not matter what you leave beyond the returned k (hence they are underscores)[

Ans:
let removeElement = function(nums, val) {
  // Initialize the counter variable
  let count = 0;
  // Loop through the array
  for (let i = 0; i < nums.length; i++) {
    // If the current element is not equal to val
    if (nums[i] !== val) {
      // Swap it with the element at the counter index
      [nums[count], nums[i]] = [nums[i], nums[count]];
      // Increment the counter
      count++;
    }
  }
  // Return the counter as the new length
  return count;
};

//-----------------Question no_03------------- //

// 💡 Q3. Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
// Example 1: Input: nums = [1,3,5,6], target = 5
// Output: 2

Ans:
function searchInsert(nums, target) {
  // helper function for recursive binary search
  function binarySearch(start, end) {
    // base case: start is greater than end, return start as the answer
    if (start > end) {
      return start;
    }
    // calculate mid index
    let mid = Math.floor((start + end) / 2);
    // compare mid element with target
    if (nums[mid] === target) {
      // found the target, return mid
      return mid;
    } else if (target < nums[mid]) {
      // target is in the left half, recurse on left subarray
      return binarySearch(start, mid - 1);
    } else {
      // target is in the right half, recurse on right subarray
      return binarySearch(mid + 1, end);
    }
  }
  // call helper function with initial start and end values
  return binarySearch(0, nums.length - 1);
}

//-----------------Question no_04------------- //

// 💡 Q4. You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.
// Example 1: Input: digits = [1,2,3] Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124. Thus, the result should be [1,2,4].

Ans:
let plusOne = function(digits) {
    return(BigInt(digits.join("")) + BigInt(1)).toString().split("");
};    

//-----------------Question no_05------------- //

// 💡 Q5. You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
// Example 1: Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6]. The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Ans:
let merge = function(nums1, m, nums2, n) {
 let n2 = n;
    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[n2 - 1];
        while (n2 < 0) {
            return;
        }
        n2--;
    }
    nums1.sort((a, b) => a - b);    
};

//-----------------Question no_06------------- //

// 💡 Q6. Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1: Input: nums = [1,2,3,1]
// Output: true

Ans:
 function containsDuplicate(nums) {
  // initialize set to store unique elements
  let set = new Set();
  // loop over the array nums
  for (let i = 0; i < nums.length; i++) {
    // if the current element is already in the set
    if (set.has(nums[i])) {
      // return true
      return true;
    }
    // otherwise, add the current element to the set
    set.add(nums[i]);
  }
  // return false as no duplicates were found
  return false;
}

//-----------------Question no_07------------- //

// 💡 Q7. Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.
// Note that you must do this in-place without making a copy of the array.
// Example 1: Input: nums = [0,1,0,3,12] Output: [1,3,12,0,0]

Ans:
function moveZeroes(nums) {
    // initialize count to 0
    let count = 0;
    // loop over the array nums
    for (let i = 0; i < nums.length; i++) {
      // if the current element is not 0
      if (nums[i] !== 0) {
        // copy it to nums[count] and increment count
        nums[count] = nums[i];
        count++;
      }
    }
    // fill the remaining elements of nums with 0's
    for (let i = count; i < nums.length; i++) {
      nums[i] = 0;
    }
  }  

//-----------------Question no_08------------- //

// 💡 Q8. You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.
// You are given an integer array nums representing the data status of this set after the error.
// Find the number that occurs twice and the number that is missing and return them in the form of an array.
// Example 1: Input: nums = [1,2,2,4] Output: [2,3]

Ans:
 function findErrorNums(nums) {
  // initialize set to store unique elements
  let set = new Set();
  // initialize duplicate and missing variables
  let duplicate = -1;
  let missing = -1;
  // loop over the array nums
  for (let i = 0; i < nums.length; i++) {
    // if the current element is already in the set
    if (set.has(nums[i])) {
      // set duplicate to that element
      duplicate = nums[i];
    } else {
      // otherwise, add the current element to the set
      set.add(nums[i]);
    }
  }
  // loop from 1 to nums.length
  for (let i = 1; i <= nums.length; i++) {
    // if the current number is not in the set
    if (!set.has(i)) {
      // set missing to that number
      missing = i;
    }
  }
  // return [duplicate, missing] as the answer
  return [duplicate, missing];
}
