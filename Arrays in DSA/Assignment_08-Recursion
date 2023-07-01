// -------------ASSIGNMENT QUESTIONS-(Recursion)_08-----------//

//-----------------Question no_01------------- //

// 💡 Question 1:

// Given two strings s1 and s2, return the lowest ASCII sum of deleted characters to make two strings equal.

// Example 1:

// Input: s1 = "sea", s2 = "eat"

// Output: 231

// Explanation: Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.

// Deleting "t" from "eat" adds 116 to the sum.

// At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.

Ans:
function minimumDeleteSum(s1, s2) {
    let n = s1.length;
    let m = s2.length;
    let sum1 = 0;
    let sum2 = 0;
    let dp = Array.from(Array(n + 1), () => new Array(m + 1).fill(0));
    for (let i = 0; i < n; i++) {
        sum1 += s1.charCodeAt(i);
    }
    for (let i = 0; i < m; i++) {
        sum2 += s2.charCodeAt(i);
    }
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (s1[i - 1] == s2[j - 1]) {
                dp[i][j] = s1.charCodeAt(i - 1) + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    let ans = dp[n][m];
    return sum1 + sum2 - 2 * ans;
}

//-----------------Question no_02------------- //

// 💡 Question 2:

// Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

// The following rules define a valid string:

// 1. - Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// 2. - Any right parenthesis ')' must have a corresponding left parenthesis '('.
// 3. - Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// - '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

// Example 1:

// Input: s = "()"

// Output: true

Ans:
function checkValidString(s) {
    let low = 0;
    let high = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(") {
            low++;
            high++;
        } else if (s[i] == ")") {
            if (low > 0) {
                low--;
            }
            high--;
        } else {
            if (low > 0) {
                low--;
            }
            high++;
        }
        if (high < 0) {
            return false;
        }
    }
    return low == 0;
}

//-----------------Question no_03------------- //

// 💡 Question 3:

// Given two strings word1 and word2, return the minimum number of steps required to make* word1 and word2 the same.

// In one step, you can delete exactly one character in either string.

// Example 1:

// Input: word1 = "sea", word2 = "eat"

// Output: 2

// Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

Ans:
function minSteps(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return m + n - 2 * dp[m][n];
}

//-----------------Question no_04------------- //

// 💡 Question 4:

// You need to construct a binary tree from a string consisting of parenthesis and integers.

// The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
// You always start to construct the left child node of the parent first if it exists.

// ![Screenshot 2023-05-29 010548.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bdbea2d1-34a4-4c4b-a450-ea6db7410c43/Screenshot_2023-05-29_010548.png)

// Input: s = "4(2(3)(1))(6(5))"

// Output: [4,2,6,3,1,5]

Ans:
function str2tree(s) {
    if (!s) return null;
    let stack = [], root = null;
    for (let i = 0; i < s.length;) {
        let j = i;
        while (j < s.length && s[j] !== '(' && s[j] !== ')') j++;
        let node = new TreeNode(+s.slice(i, j));
        if (!root) root = node;
        if (stack.length) {
            let parent = stack[stack.length - 1];
            if (!parent.left) parent.left = node;
            else parent.right = node;
        }
        if (s[j] === '(') stack.push(node);
        else stack.pop();
        i = j + 1;
    }
    return root;
}

//-----------------Question no_05------------- //

// 💡 Question 5:

// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// 1. - If the group's length is 1, append the character to s.
// 2. - Otherwise, append the character followed by the group's length.

// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.

// Example 1:

// Input: chars = ["a","a","b","b","c","c","c"]

// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

// Explanation:

// The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

Ans:
var compress = function(chars) {
    let i = 0;
    let j = 0;
    let count = 1;
    while (j < chars.length) {
        if (chars[j] === chars[j + 1]) {
            count++;
        } else {
            chars[i] = chars[j];
            i++;
            if (count > 1) {
                for (let c of count.toString()) {
                    chars[i] = c;
                    i++;
                }
            }
            count = 1;
        }
        j++;
    }
    return i;
};

//-----------------Question no_06------------- //

// 💡 Question 6:

// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "cbaebabacd", p = "abc"

// Output: [0,6]

// Explanation:

// The substring with start index = 0 is "cba", which is an anagram of "abc".

// The substring with start index = 6 is "bac", which is an anagram of "abc".

Ans:
function findAnagrams(s, p) {
    let result = [];
    let map = new Map();
    for (let i = 0; i < p.length; i++) {
        map.set(p[i], map.get(p[i]) + 1 || 1);
    }
    let counter = map.size;
    let left = 0;
    let right = 0;
    while (right < s.length) {
        if (map.has(s[right])) {
            map.set(s[right], map.get(s[right]) - 1);
            if (map.get(s[right]) === 0) counter--;
        }
        right++;
        while (counter === 0) {
            if (map.has(s[left])) {
                map.set(s[left], map.get(s[left]) + 1);
                if (map.get(s[left]) > 0) counter++;
            }
            if (right - left === p.length) {
                result.push(left);
            }
            left++;
        }
    }
    return result;
}

//-----------------Question no_07------------- //

// 💡 Question 7:

// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

// Example 1:

// Input: s = "3[a]2[bc]"

// Output: "aaabcbc"

Ans:
function decodeString(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ']') {
            stack.push(s[i]);
        } else {
            let str = '';
            while (stack[stack.length - 1] !== '[') {
                str = stack.pop() + str;
            }
            stack.pop();
            let num = '';
            while (stack.length && !isNaN(stack[stack.length - 1])) {
                num = stack.pop() + num;
            }
            num = parseInt(num);
            let decodedStr = '';
            for (let j = 0; j < num; j++) {
                decodedStr += str;
            }
            stack.push(decodedStr);
        }
    }
    return stack.join('');
}

//-----------------Question no_08------------- //

// 💡 Question 8:

// Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

// 1. - For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// Example 1:

// Input: s = "ab", goal = "ba"

// Output: true

// Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

Ans:
function canSwapTwoLetters(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }
    let diff = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            diff.push(i);
        }
    }
    return diff.length === 2 && s[diff[0]] === goal[diff[1]] && s[diff[1]] === goal[diff[0]];
}


