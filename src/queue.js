const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.startOfQueque = null;
    this.endOfQueque = null;
  }

  getUnderlyingList() {
    return this.startOfQueque;
  }

  enqueue(value) {
    let actualNodeElement;
    if(this.startOfQueque !== null) {
      actualNodeElement = new ListNode(value)
      this.endOfQueque.next = actualNodeElement
      this.endOfQueque = actualNodeElement;
    } else {
      actualNodeElement = new ListNode(value);
      this.startOfQueque = actualNodeElement
      this.endOfQueque = actualNodeElement;
    }
  }

  dequeue() {
    let removingNodeValue;
    if(this.startOfQueque !== null) {
      removingNodeValue = this.startOfQueque.value;
      this.startOfQueque = this.startOfQueque.next;
      if(this.startOfQueque !== null) {
        if(removingNodeValue !== null) {
          return removingNodeValue;
        } else {
          return 1
        }
      } else {
        this.endOfQueque = null;
      }
    } else {
      return undefined;
    }
  }
}

module.exports = {
  Queue
};
