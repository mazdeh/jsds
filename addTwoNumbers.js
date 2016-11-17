"use strict";
var LinkedList = require('./linkedlist').LinkedList;


var l1 = new LinkedList();

// l1 is 321
l1.add(1, 0);
l1.add(2, 1);
l1.add(3, 2);

// l2 is 123
var l2 = new LinkedList();
l2.add(3, 0);
l2.add(2, 1);
l2.add(1, 2);

var addTwoNumbers = function(l1, l2) {
  return l2.head.value;

};


var result = addTwoNumbers(l1, l2);
console.log('result: ', result);

