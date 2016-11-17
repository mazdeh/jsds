"use strict";

class Queue {
  constructor() {
    this.list = [];
    this.length = 0;
  }

  enqueue(value) {
    this.length++;
    this.list.push(value);
  }

  dequeue() {
    if (this.length === 0) return;
    this.length--;
    return this.list.shift();
  }

  peek() {
    return this.list[0];
  }
}

console.log('Queue implementation in JS: ');
var q = new Queue();
q.enqueue('vahid');
q.enqueue('saeed');
console.log('q: ', q);
q.dequeue();
console.log('q: ', q);
q.enqueue('ali');
q.enqueue('amin');
console.log('q: ', q);
console.log('q.peek(): ', q.peek());
