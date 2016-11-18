/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var sum = [],
        carry = 0,
        list1 = l1,
        list2 = l2,
        i = 0;
    
    while (list1 || list2) {
      var p = ((list1) ? list1.val : 0);
      var q = ((list2) ? list2.val : 0);  
        
        sum[i] = p + q + carry;
        if (sum[i] >= 10) {
          sum[i] = sum[i] % 10;
          carry = 1;
        } else {
          carry = 0;
        }
        
        if (list1) { list1 = list1.next}
        if (list2) { list2 = list2.next}
        i++;
    }
    if (carry > 0) {
      sum[sum.length] = 1;
    }
    
    return sum;
};

var l1 = null;

var l2 = {
  val: 5, 
  next: null
}

console.log('l1: ', l1);
console.log('l2: ', l2);
var result = addTwoNumbers(l1, l2);
console.log('result: ', result);






