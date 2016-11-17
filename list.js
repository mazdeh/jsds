"use strict";

class List {
  constructor() {
    this.memory = [];
    this.length = 0;
  }

  // O(1) constant
  get (address) {
    return this.memory[address];
  }

  push (value) {
    this.memory[this.length] = value;
    this.length++;
  }

  pop () {
    if (this.length == 0) return;
    var value = this.memory[this.length -1];
    delete this.memory[this.length -1];
    this.length--;
    return value;
  }

  unshift (value) {
    var prev = value;

    for (var i = 0; i < this.length; i++) {
      var current = this.memory[i];
      this.memory[i] = prev;
      prev = current;
    }

    this.memory[this.length] = prev;
    this.length++;
  }

  shift () {
    if (this.length == 0) return;
    var value = this.memory[0];
    for (var i = 0; i < this.length; i++) {
      this.memory[i] = this.memory[i + 1];
    }

    delete this.memory[this.length -1];
    this.length--;
    return value;
  }
}

console.log('List implementation in JS: ');
var list = new List();
list.push('ali');
list.push('amin');
list.push('vahid');
list.push('saeed');

console.log("list's length: ", list.length);
console.log("Third item in the list is: ", list.get(2));

var popped = list.pop();
console.log('item popped from the list: ', popped);
console.log('list length after pop: ', list.length);

list.unshift('mother');
console.log('first item in the List after unshift/add to start: ', list.get(0));
console.log('list length after unshift: ', list.length);

var shifted = list.shift();
console.log('item shifted from the start of the list: ', shifted);
console.log('first item after shift/remove from start: ', list.get(0));
console.log('list length after shift: ', list.length);


