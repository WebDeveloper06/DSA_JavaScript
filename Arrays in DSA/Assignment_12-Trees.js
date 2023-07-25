// -------------ASSIGNMENT QUESTIONS-(Trees)_12-----------//

//-----------------Question no_01------------- //

// 💡 Question 1:

// https://leetcode.com/problems/find-k-closest-elements/

Ans:
function findClosestElements(arr, k, x) {
    let left = 0;
    let right = arr.length - k;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return arr.slice(left, left + k);
}

//-----------------Question no_02------------- //

// 💡 Question 2:

// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/description/

Ans:
function kthSmallest(matrix, k) {
    let n = matrix.length;
    let left = matrix[0][0];
    let right = matrix[n - 1][n - 1];
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let count = 0;
        let j = n - 1;
        for (let i = 0; i < n; i++) {
            while (j >= 0 && matrix[i][j] > mid) {
                j--;
            }
            count += j + 1;
        }
        if (count < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}

//-----------------Question no_03------------- //

// 💡 Question 3:

// https://leetcode.com/problems/top-k-frequent-words/

Ans:
function topKFrequent(words, k) {
    let map = new Map();
    for (let word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }
    let arr = Array.from(map);
    arr.sort((a, b) => {
        if (a[1] !== b[1]) {
            return b[1] - a[1];
        } else {
            return a[0].localeCompare(b[0]);
        }
    });
    return arr.slice(0, k).map(a => a[0]);
}

//-----------------Question no_04------------- //

// 💡 Question 4:

// https://leetcode.com/problems/diameter-of-binary-tree/

Ans:
let root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
};
function diameterOfBinaryTree(root) {
    let max = 0;
    function dfs(node) {
        if (!node) {
            return 0;
        }
        let left = dfs(node.left);
        let right = dfs(node.right);
        max = Math.max(max, left + right);
        return Math.max(left, right) + 1;
    }
    dfs(root);
    return max;
}

//-----------------Question no_05------------- //

// 💡 Question 5:

// https://leetcode.com/problems/symmetric-tree/

Ans:
let element = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: null
        }
    },
    right: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    }
};

function isSymmetric(element) {
    if (!element) {
        return true;
    }
    function isMirror(node1, node2) {
        if (!node1 && !node2) {
            return true;
        }
        if (!node1 || !node2) {
            return false;
        }
        return node1.val === node2.val && isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
    }
    return isMirror(element.left, element.right);
}

//-----------------Question no_06------------- //

// 💡 Question 6:

// https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/

Ans:
var kthLargestNumber = function(nums, k) {
    nums.sort((a,b)=> BigInt(a)<BigInt(b) ? 1 :  BigInt(a)>BigInt(b) ? -1 : 0 );
   return nums[k-1]
};

//-----------------Question no_07------------- //

// 💡 Question 7:

// https://leetcode.com/problems/invert-binary-tree/

Ans:
var invertTree = function(root) {
    if (root === null) return null
    let temp = root.left
    root.left = root.right
    root.right = temp
    if(root.left) invertTree(root.left)
    if(root.right) invertTree(root.right)
    return root
};

//-----------------Question no_08------------- //

// 💡 Question 8:

// https://leetcode.com/problems/print-binary-tree/

Ans:
let voot = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: null
};
function printTree(voot) {
    let height = getHeight(voot);
    let width = Math.pow(2, height) - 1;
    let res = new Array(height);
    for (let i = 0; i < height; i++) {
        res[i] = new Array(width).fill("");
    }
    dfs(voot, 0, 0, width - 1, res);
    return res;
}
function getHeight(node) {
    if (!node) {
        return 0;
    }
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}
function dfs(node, level, left, right, res) {
    if (!node) {
        return;
    }
    let mid = Math.floor((left + right) / 2);
    res[level][mid] = node.val.toString();
    dfs(node.left, level + 1, left, mid - 1, res);
    dfs(node.right, level + 1, mid + 1, right, res);
}
