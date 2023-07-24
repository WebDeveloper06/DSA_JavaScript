// -------------ASSIGNMENT QUESTIONS-(Stack & Queue)_11-----------//

//-----------------Question no_01------------- //

// 💡 Question 1:

// https://leetcode.com/problems/make-the-string-great/

Ans:
var makeGood = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if (stack.length > 0 && Math.abs(stack[stack.length - 1].charCodeAt(0) - c.charCodeAt(0)) === 32) {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    return stack.join("");
};

//-----------------Question no_02------------- //

// 💡 Question 2:

// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

Ans:
var removeDuplicates = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (stack.length > 0 && stack[stack.length - 1] === s.charAt(i)) {
            stack.pop();
        } else {
            stack.push(s.charAt(i));
        }
    }
    return stack.join("");
};

//-----------------Question no_03------------- //

// 💡 Question 3:

// https://leetcode.com/problems/online-stock-span/

Ans:
var removeDuplicates = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (stack.length > 0 && stack[stack.length - 1] === s.charAt(i)) {
            stack.pop();
        } else {
            stack.push(s.charAt(i));
        }
    }
    return stack.join("");
};

//-----------------Question no_04------------- //

// 💡 Question 4:

// https://leetcode.com/problems/time-needed-to-buy-tickets/

Ans:
function timeRequiredToBuy(tickets, k) {
    // Scenario 1
    let result = tickets[k];

    // Scenario 2 and 3
    for (let i = 0; i < k; i++) {
        result += Math.min(tickets[k], tickets[i]);
    }

    // Scenario 4
    for (let i = k + 1; i < tickets.length; i++) {
        result += Math.min(tickets[k] - 1, tickets[i]);
    }

    return result;
};

//-----------------Question no_05------------- //

// 💡 Question 5:

// https://leetcode.com/problems/product-of-the-last-k-numbers/

Ans:
var ProductOfNumbers = function() {
    this.queue = [];
};


ProductOfNumbers.prototype.add = function(num) {
    this.queue.push(num);
};


ProductOfNumbers.prototype.getProduct = function(k) {
    let lastElem = this.queue[this.queue.length-1];
    const iterations = k-1;
    let iterator = 1;
    let currIndex = this.queue.length-2;
    while(iterator <= iterations){
        let prod = lastElem * this.queue[currIndex];
        lastElem = prod;
        currIndex--;
        iterator++
    }
    return lastElem;
};

//-----------------Question no_06------------- //

// 💡 Question 6:

// https://leetcode.com/problems/largest-rectangle-in-histogram/description/

Ans:
function largestRectangleArea(heights) {
    let stack = [-1];
    let maxArea = 0;
    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 1 && heights[stack[stack.length - 1]] >= heights[i]) {
            let height = heights[stack.pop()];
            let width = i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }
    while (stack.length > 1) {
        let height = heights[stack.pop()];
        let width = heights.length - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, height * width);
    }
    return maxArea;
}

//-----------------Question no_07------------- //

// 💡 Question 7:

// https://leetcode.com/problems/sliding-window-maximum/

Ans:
function maxSlidingWindow(nums, k) {
    let result = [];
    let deque = [];
    for (let i = 0; i < nums.length; i++) {
        while (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        deque.push(i);
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    return result;
}

//-----------------Question no_08------------- //

// 💡 Question 8:

// Design a circular queue data structure with the following operations: enQueue, deQueue, Front, Rear, and isEmpty.

Ans:
const CircularQueue = function(k) {
    this.size = k
    this.queue = []
    this.start1 = 0
    this.end1 = 0
    this.start2 = 0
    this.end2 = 0
 }
 CircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()) {
       return false
    }
    if(this.end2 <= this.size - 1) {
       this.queue[this.end2++] = value
    } else {
       this.queue[this.end1++] = value
    }
    return true
 }
 CircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()) {
       return false
    }
    if(this.queue[this.start2] !== undefined) {
       this.queue[this.start2++] = undefined
    } else {
       this.queue[this.start1++] = undefined
    }
    return true
 }
 CircularQueue.prototype.Front = function() {
    if(this.isEmpty()) {
       return -1
    }
    return this.queue[this.start2] === undefined ? this.queue[this.start1] :    this.queue[this.start2]
 }
 CircularQueue.prototype.Rear = function() {
    if(this.isEmpty()) {
       return -1
    }
    return this.queue[this.end1 - 1] === undefined ? this.queue[this.end2 - 1] :    this.queue[this.end1 - 1]
 }
 CircularQueue.prototype.isEmpty = function() {
    if(this.end2 - this.start2 + this.end1 - this.start1 <= 0) {
       return true
    }
    return false
 }
 CircularQueue.prototype.isFull = function() {
    if(this.end2 - this.start2 + this.end1 - this.start1 >= this.size) {
       return true
    }
    return false
}
