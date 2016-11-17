"use strict";

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  get(position) {
    if (position >= this.length) {
      throw new Error('Position out of range');
    }

    var current = this.head;

    for (var i = 0; i < position; i++) {
      current = current.next;
    }

    return current;
  }

  add(value, position) {
    var node = {
      value: value,
      next: null
    }
    
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      var prev = this.get(position - 1);
      var next = prev.next;

      prev.next = node;
      node.next = next;
    }
    this.length++;
  }

  remove(position) {
    if (this.length === 0) {
      throw new Error('Removing from epmty list');
    }
    
    if (position === 0) {
      this.head = this.head.next;
    } else {
      var prev = this.get(position - 1);
      prev.next = prev.next.next;
    }
    
    this.length--;
  }

}

module.exports = {
  LinkedList: LinkedList
}


// var ll = new LinkedList();
// ll.add('vahid', 0);
// ll.add('saeed', 1);
// ll.add('megan', 2);
// ll.add('ali', 3);

// ll.remove(1);

// console.log('ll: ', JSON.stringify(ll));

// ll.add('amin', 1);

// console.log('ll: ', JSON.stringify(ll));


// ll.add('maryam', 1);

// console.log('ll: ', JSON.stringify(ll));


