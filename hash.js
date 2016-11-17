"use strict";

class HashTable {
  constructor() {
    this.memory = [];
  }

  hash(key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      var code = key.charCodeAt(i);
      hash = ((hash << 5) - hash) + code | 0;
    }
    return hash;
  }
  
  get(key) {
    var address = this.hash(key);
    return this.memory[address];
  }

  set(key, value) {
    var address = this.hash(key);
    this.memory[address] = value;
  }

  remove(key) {
    var address = this.hash(key);
    if (this.memory[address]) {
      delete this.memory[address]; 
    }
  }
}

console.log('Hash Table implementation using JS: ');
var hash = new HashTable();
hash.set('vahid', 'son');
hash.set('ali', 'son');
hash.set('naser', 'father');
hash.set('fatemeh', 'mother');

console.log("hash.get('ali'): ", hash.get('ali'));
console.log("hash.get('naser'): ", hash.get('naser'));

hash.remove('ali');
console.log("hash.get('ali') after removing: ", hash.get('ali'));

