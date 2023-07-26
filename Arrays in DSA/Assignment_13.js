// -------------ASSIGNMENT QUESTIONS-(...)_13----------//

//-----------------Question no_01------------- //

// 💡 Question 1:

// https://leetcode.com/problems/unique-binary-search-trees/

Ans:
function numTrees(n) {
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] += dp[j - 1] * dp[i - j];
        }
    }
    return dp[n];
}

//-----------------Question no_02------------- //

// 💡 Question 2:

// https://leetcode.com/problems/validate-binary-search-tree/

Ans:
function isValidBST(root) {
    return helper(root, null, null);
}
function helper(node, lower, upper) {
    if (node == null) return true;

    let val = node.val;
    if (lower != null && val <= lower) return false;
    if (upper != null && val >= upper) return false;

    if (!helper(node.right, val, upper)) return false;
    if (!helper(node.left, lower, val)) return false;
    return true;
}

//-----------------Question no_03------------- //

// 💡 Question 3:

// https://leetcode.com/problems/recover-binary-search-tree/

Ans:
function recoverTree(root) {
    let first = null;
    let second = null;
    let prev = new TreeNode(-Infinity);

    function traverse(node) {
        if (!node) return;
        traverse(node.left);
        if (node.val < prev.val) {
            if (!first) first = prev;
            second = node;
        }

        prev = node;
        traverse(node.right);
    }

    traverse(root);
    [first.val, second.val] = [second.val, first.val];
}

//-----------------Question no_04------------- //

// 💡 Question 4:

// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

Ans:
function sortedArrayToBST(nums) {
    if (nums.length === 0) return null;

    const mid = Math.floor(nums.length / 2);
    const node = new TreeNode(nums[mid]);

    node.left = sortedArrayToBST(nums.slice(0, mid));
    node.right = sortedArrayToBST(nums.slice(mid + 1));

    return node;
}

//-----------------Question no_05------------- //

// 💡 Question 5:

// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

Ans:
function lowestCommonAncestor(root, p, q) {
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    } else {
        return root;
    }
}

//-----------------Question no_06------------- //

// 💡 Question 6:

// https://leetcode.com/problems/insert-into-a-binary-search-tree/

Ans:
function insertIntoBST(root, val) {
    if (!root) return new TreeNode(val);

    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }

    return root;
}

//-----------------Question no_07------------- //

// 💡 Question 7:

// https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/

Ans:
function numOfWays(nums) {

    const mod = BigInt(10 ** 9 + 7);

    function helper(nums) {
      const n = nums.length;
      if (n <= 1) {
        return BigInt(n);
      }
      const left = [];
      const right = [];
      const pivot = nums[0];
      for (let i = 1; i < n; i++) {
        if (nums[i] < pivot) {
          left.push(nums[i]);
        } else {
          right.push(nums[i]);
        }
      }
      const Left = helper(left);
      const Right = helper(right);
      if (Left === 0n || Right === 0n) {
        return Left + Right;
      }
         const ans = binomialCoefficient(left.length + right.length, right.length);
      return ans * Left * Right % mod;
    }
   
    return (helper(nums) - 1n) % mod;
  }
  
  function binomialCoefficient(n, k) {
    if (k < 0 || k > n) {
      return 0n;
    }
   
    if (k === 0 || k === n) {
      return 1n;
    }
   
    let res = 1n;
    for (let i = 0; i < k; i++) {
      res = res * BigInt(n - i) / BigInt(i + 1);
    }
   
    return res;
}

//-----------------Question no_08------------- //

// 💡 Question 8:

// https://leetcode.com/problems/minimum-absolute-difference-in-bst/

Ans:
function getMinimumDifference(root) {
    let prev = null;
    let minDiff = Infinity;

    function traverse(node) {
        if (!node) return;
        traverse(node.left);

        if (prev !== null) {
            minDiff = Math.min(minDiff, node.val - prev);
        }

        prev = node.val;
        traverse(node.right);
    }
    traverse(root);

    return minDiff;
}


