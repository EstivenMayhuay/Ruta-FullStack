class HashTable {
  constructor () {
    this.table = new Array(5);
    this.size = 0;
  }
  
  _hash(key) {
    let hash = 0;
    
    for(let i=0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    
    return hash % this.table.length;
  }
  
  set(key, value) {
    const index = this._hash(key);
    this.table[index] = [key, value];
    console.log(this.table)
    this.size++;
  }
  
  get(key) {
    const index = this._hash(key);
    return this.table[index];
  }
  
  remove(key) {
    const index = this._hash(key);
    
    if(this.table[index] && this.table[index].length) {
      this.table[index] = [];
      this.size--;
    }
    
    return false;
  }
  
  search(key) {
    const index = this._hash(key);
    
    if(this.table[index] && this.table[index].length) {
      return this.table[index];
    }
    
    return null;
  }
}

let hash = new HashTable();

hash.set("name", "hairton");
hash.set("phone", "948255841");

hash.search("name")

console.log(hash.table)

/*
function List () {
  this.head = null;
}

function Node (value) {
  this.value = value;
  this.next = null;
}

List.prototype.push = function (value) {    
  if(this.head === null) {
    this.head = new Node(value);
    return;
  }
  
  let current = this.head;
  
  while(current.next !== null) {
    current = current.next;
  }
  
  current.next = new Node(value);
  return;
}

List.prototype.pop = function () {
  if(this.head === null) return null;
  
  let temp = this.head;
  let temp2 = null;

  if(this.head.next === null) {
    this.head = null;
    return temp.value;
  }
  
  while(temp.next.next !== null) {
    temp = temp.next;
  }

  temp2 = temp.next;
  temp.next = null;
  
  return temp2.value;
}

List.prototype.removeNode = function (node) {
  let current = this.head;
  let next = null;
  
  if(this.head.value === node) {
    this.head = null;
    return;
  }
  
  while(current !== null) {
    next = current.next;
    
    if(next.value === node) {
      current.next = next.next;
      break;
    }
    current = current.next;
  }
}

List.prototype.length = function () {
  if(this.head === null) return 0;
  
  let current = this.head;
  let cont = 1;
    
  while(current.next !== null) {
    current = current.next;
    cont++;
  }
  
  return cont;
}

List.prototype.print = function () {
  let current = this.head;
  let arr = [];
  
  if(this.head === null) return "";
  
  while(current.next !== null) {
    arr.push(current.value)
    current = current.next;
  }
  
  arr.push(current.value)
  current.next == null;
  
  return arr;
}

List.prototype.search = function (value) {
  if(this.head === null) return null;
  
  let current = this.head;
  let found = null;
  
  while(current !== null) {
    if(current.value === value) {
      found = current;
    }
    
    current = current.next;
  }
  
  return found.value;
}
*/