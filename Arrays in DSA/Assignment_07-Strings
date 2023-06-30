// -------------ASSIGNMENT QUESTIONS-(Strings)_07-----------//

//-----------------Question no_01------------- //

// 💡 Question 1:

// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"

// Output: true

Ans:
function areIsomorphic(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const map = {};
    const set = new Set();
    for (let i = 0; i < s.length; i++) {
        const c1 = s[i];
        const c2 = t[i];
        if (map[c1] === undefined) {
            if (set.has(c2)) {
                return false;
            }
            map[c1] = c2;
            set.add(c2);
        } else if (map[c1] !== c2) {
            return false;
        }
    }
    return true;
}

//-----------------Question no_02------------- //

// 💡 Question 2:

// Given a string num which represents an integer, return true if num is a strobogrammatic number.

// A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

// Example 1:

// Input: num = "69"

// Output: true

Ans:
function isStrobogrammatic(num) {
    const map = {
        "0": "0",
        "1": "1",
        "6": "9",
        "8": "8",
        "9": "6"
    };
    let left = 0;
    let right = num.length - 1;
    while (left <= right) {
        if (!(num[left] in map) || map[num[left]] !== num[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

//-----------------Question no_03------------- //

// 💡 Question 3:

// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

// Example 1:

// Input: num1 = "11", num2 = "123"

// Output: "134"

Ans:
function addStrings(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = "";
    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
        const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
        const sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
        i--;
        j--;
    }
    return result;
}

//-----------------Question no_04------------- //

// 💡 Question 4:

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:

// Input: s = "Let's take LeetCode contest"

// Output: "s'teL ekat edoCteeL tsetnoc"

Ans:
function reverseWords(s) {
    return s.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}

//-----------------Question no_05------------- //

// 💡 Question 5:

// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// Example 1:

// Input: s = "abcdefg", k = 2

// Output: "bacdfeg"

Ans:
function reverseStr(s, k) {
    const arr = s.split("");
    for (let i = 0; i < arr.length; i += 2 * k) {
        let left = i;
        let right = Math.min(i + k - 1, arr.length - 1);
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr.join("");
}

//-----------------Question no_06------------- //

// 💡 Question 6:

// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// 1. - For example, if s = "abcde", then it will be "bcdea" after one shift.

// Example 1:

// Input: s = "abcde", goal = "cdeab"

// Output: true

Ans:
function canShift(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }
    return (s + s).includes(goal);
}

//-----------------Question no_07------------- //

// 💡 Question 7:

// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: s = "ab#c", t = "ad#c"

// Output: true

// Explanation: Both s and t become "ac".

Ans:
function backspaceCompare(s, t) {
    const stackS = [];
    const stackT = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== "#") {
            stackS.push(s[i]);
        } else if (stackS.length > 0) {
            stackS.pop();
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (t[i] !== "#") {
            stackT.push(t[i]);
        } else if (stackT.length > 0) {
            stackT.pop();
        }
    }

    return stackS.join("") === stackT.join("");
}

//-----------------Question no_08------------- //

// 💡 Question 8:

// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

// Example 1:

// ![Screenshot 2023-05-29 010117.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/012b0a97-4e4b-49b6-bc95-0531fc712978/Screenshot_2023-05-29_010117.png)

// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

// Output: true

Ans:
function checkStraightLine(coordinates) {
    const [x1, y1] = coordinates[0];
    const [x2, y2] = coordinates[1];
    const slope = (y2 - y1) / (x2 - x1);

    for (let i = 2; i < coordinates.length; i++) {
        const [x, y] = coordinates[i];
        const currentSlope = (y - y1) / (x - x1);

        if (currentSlope !== slope) {
            return false;
        }
    }

    return true;
}

