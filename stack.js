"use strict";

class Stack {
  constructor() {
    this.list = [];
    this.length = 0;
  }

  push(value) {
    this.length++;
    this.list.push(value);
  }

  pop() {
    this.length--;
    return this.list.pop();
  }

  peek() {
    return this.list[this.length -1];
  }

}

var stack = new Stack();
stack.push('vahid');
stack.push('saeed');
console.log('stack: ', stack);
console.log('stack length: ', stack.length);


console.log('popping: ', stack.pop());
console.log('stack length after pop: ', stack.length);

console.log('peeking stack: ', stack.peek());
console.log('length after peeking: ', stack.length);
