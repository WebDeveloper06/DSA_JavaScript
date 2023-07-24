// -------------ASSIGNMENT QUESTIONS-(Linked List)_10-----------//

//-----------------Question no_01------------- //

// 💡 Question 1:

// https://leetcode.com/problems/delete-node-in-a-linked-list/

Ans:
var deleteNode = function(node) {
    node.val = node.next.val;
      node.next = node.next.next;
    }
    
    const body={
      val: 4,
      next: {
        val: 5,
        next: {
          val: 1,
          next: {
            val: 9,
            next: null,
          },
        },
    },    
};

//-----------------Question no_02------------- //

// 💡 Question 2:

// https://leetcode.com/problems/remove-linked-list-elements/

Ans:
function removeElements(head, val) {
    
    if (!head) {
      return null;
    }
  
    while (head && head.val === val) {
      head = head.next;
    }
  
    let current = head;
    while (current && current.next) {
      if (current.next.val === val) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  
    return head;
  }

  const head = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 6,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 5,
              next: {
                val: 6,
                next: null,
              },
            },
          },
        },
      },
    },
};

//-----------------Question no_03------------- //

// 💡 Question 3:

// https://leetcode.com/problems/merge-two-sorted-lists/

Ans:
function mergeTwoLists(l1, l2) {
  // Handle edge cases where either list is null
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }

  // Create a dummy node to hold the head of the merged list
  const dummy = { val: -1, next: null };
  let current = dummy;

  // Merge the two lists by comparing their values
  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  // Append any remaining nodes from either list
  if (l1) {
    current.next = l1;
  }
  if (l2) {
    current.next = l2;
  }

  return dummy.next;
}

// Example usage:
const list1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null,
    },
  },
};
const list2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null,
    },
  },
};
console.log(mergeTwoLists(list1, list2)); 

//-----------------Question no_04------------- //

// 💡 Question 4:

// https://leetcode.com/problems/linked-list-cycle-ii/  

function detectCycle(value) {
    // Handle edge case where head is null
    if (!value) {
      return null;
    }
  
    // Use the "tortoise and hare" algorithm to detect a cycle
    let slow = value;
    let fast = value;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        break;
      }
    }
    if (!fast || !fast.next) {
      return null;
    }
  
    // Move one pointer back to the head of the list
    slow = value;
  
    // Move both pointers at the same speed until they meet at the start of the cycle
    while (slow !== fast) {
      slow = slow.next;
      fast = fast.next;
    }
  
    return slow;
  }
  
  // Example usage:
  const value = {
    val: 3,
    next: {
      val: 2,
      next: {
        val: 0,
        next: {
          val: -4,
          next: null,
        },
      },
    },
};
  value.next.next.next.next = value.next;
  console.log(detectCycle(value));

//-----------------Question no_05------------- //

// 💡 Question 5:

// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

Ans:
function removeNthFromEnd(hello, n) {
    // Handle edge case where head is null
    if (!hello) {
      return null;
    }
  
    // Use two pointers to find the nth node from the end of the list
    let slow = hello;
    let fast = hello;
    for (let i = 0; i < n; i++) {
      fast = fast.next;
    }
    if (!fast) {
      return hello.next;
    }
    while (fast.next) {
      slow = slow.next;
      fast = fast.next;
    }
  
    // Remove the nth node from the end of the list
    slow.next = slow.next.next;
  
    return hello;
  }
  
  // Example usage:
  const hello = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: null,
          },
        },
      },
    },
};
  const n = 2;
  console.log(removeNthFromEnd(hello, n));

//-----------------Question no_06------------- //

// 💡 Question 6:

// Given a singly linked list of size N. The task is to left-shift the linked list by k nodes, where k is a given positive integer smaller than or equal to the length of the linked list.
// Input: N = 5
// value[] = {2, 4, 7, 8, 9}
// k = 3
// Output: 8 9 2 4 7
// Explanation:Rotate 1:4 -> 7 -> 8 -> 9 -> 2
// Rotate 2: 7 -> 8 -> 9 -> 2 -> 4
// Rotate 3: 8 -> 9 -> 2 -> 4 -> 7

Ans:
function rotateLeft(happy, k) {
  // Handle edge case where head is null
  if (!happy) {
    return null;
  }

  // Find the length of the linked list
  let length = 1;
  let current = happy;
  while (current.next) {
    current = current.next;
    length++;
  }

  // Calculate the number of nodes to rotate
  k %= length;

  // Handle edge case where k is zero
  if (k === 0) {
    return happy;
  }

  // Use two pointers to find the new head of the linked list
  let slow = happy;
  let fast = happy;
  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // Rotate the linked list
  const newHappy = slow.next;
  slow.next = null;
  fast.next = happy;

  return newHappy;
}

// Example usage:
const happy= {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 7,
      next: {
        val: 8,
        next: {
          val: 9,
          next: null,
        },
      },
    },
  },
};
const k = 3;
console.log(rotateLeft(happy, k)); 

//-----------------Question no_07------------- //

// 💡 Question 7:

// Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that sum to 0 until there are no such sequences.
// After doing so, return the head of the final linked list.  You may return any such answer.
// (Note that in the examples below, all sequences are serializations of ListNode objects.)
// Input: head = [1,2,-3,3,1]
// Output: [3,1]
// Note: The answer [1,2,1] would also be accepted.

var removeZeroSumSublists = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let map = new Map();
    let sum = 0;
    for (let i = dummy; i != null; i = i.next) {
        sum += i.val;
        map.set(sum, i);
    }
    sum = 0;
    for (let i = dummy; i != null; i = i.next) {
        sum += i.val;
        i.next = map.get(sum).next;
    }
    return dummy.next;
};

//-----------------Question no_08------------- //

// 💡 Question 8:

// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
// The first node is considered odd, and the second node is even, and so on.
// Note that the relative order inside both the even and odd groups should remain as it was in the input.
// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

// Input: head = [1,2,3,4,5]

// Output: [1,3,5,2,4]

Ans:
function oddEvenList(hat) {
  // Handle edge case where head is null
  if (!hat) {
     return null;
  }

  // Create two new linked lists for odd and even nodes
  const oddHat = { val: -1, next: null };
  let oddTail = oddHat;
  const evenHat = { val: -1, next: null };
  let evenTail = evenHat;

  // Traverse the input linked list and append nodes to the odd or even list as appropriate
  let current = hat;
  let index = 1;
  while (current) {
    if (index % 2 === 1) {
      oddTail.next = current;
      oddTail = current;
    } else {
      evenTail.next = current;
      evenTail = current;
    }
    current = current.next;
    index++;
  }

  // Append the even list to the end of the odd list
  oddTail.next = evenHat.next;

  return oddHat.next;
}

// Example usage:
const hat = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};
console.log(oddEvenList(hat)); 

  
