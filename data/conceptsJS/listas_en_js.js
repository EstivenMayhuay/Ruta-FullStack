function Node (value) {
  this.value = value;
  this.next = null;
}

function List () {
  this._length = 0;
  this.head = null;
}

// get size
List.prototype.getSize = function () {
  if(this._length == 0) return 0;
  return this._length;
}

// get node by index
List.prototype.getAt = function (index) {
  let current = this.head,
      counter = 0;
    
  while(current !== null) {
    if(counter === index) return current;
    counter++;
    current = current.next;
  }
  
  return null;
}

// method push
List.prototype.push = function (value) {  
  let node = new Node(value),
      current = this.head;
    
  if(!current) {
    this.head = node;
    this._length++;
    return;
  }
    
  while(current.next) {
    current = current.next;
  }
  
  current.next = node;
  this._length++;
}

// method unshift
List.prototype.unshift = function (value) {
  let node = new Node(value),
      current = this.head; 
  
  if(!current) {
    this.head = node;
    this._length++;
    return;
  }
      
  this.head = node; 
  this.head.next = current;
  this._length++;
}

// method print
List.prototype.print = function () {
  let current = this.head;
  let arr = [];
  
  while(current) {
    arr.push(current.value);
    current = current.next;
  }
  
  return arr;
}

// method removeLast 
List.prototype.removeLast = function () {
  if(!this.head) return null;
  
  if(!this.head.next) {
    this.head = null;
    return;
  }
  
  let current = this.head;
  
  while(current.next.next !== null) {
    current = current.next;
  }
  
  current.next = null
}

let lista = new List();

lista.push(4);
lista.push(5);
lista.push(6);

lista.removeLast()
lista.removeLast()
lista.removeLast()
lista.removeLast()



console.log(lista.print());