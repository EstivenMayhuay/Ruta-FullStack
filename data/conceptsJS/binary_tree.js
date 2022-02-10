/* Binary Tree */

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // size
  size() {
    if (!this.left && !this.right) return 1;
    if (this.left === null) return 1 + this.right.size();
    if (this.right === null) return 1 + this.left.size();
    return 1 + this.left.size() + this.right.size();
  }

  // insert
  insert(value) {
    if (value === this.value) return undefined;

    if (value > this.value) {
      if (!this.right) {
        this.right = new BinarySearchTree(value);
      }

      this.right.insert(value);
    } else if (value < this.value) {
      if (!this.left) {
        this.left = new BinarySearchTree(value);
      }

      this.left.insert(value);
    }
  }

  // contains
  contains(value) {
    if (value === this.value) return true;

    if (value > this.value) {
      if (!this.right) {
        if (this.value === value) return true;
        else return false;
      }
      return this.right.contains(value);
    } else if (value < this.value) {
      if (!this.left) {
        if (this.value === value) return true;
        else return false;
      }
      return this.left.contains(value);
    }
  }

  // Breath first search tree
  breadthFirstForEach = function (cb, queue) {
    if (!queue) {
      var queue = [];
    }

    if (this.left) queue.push(this.left);

    if (this.right) queue.push(this.right);

    cb(this.value);

    if (queue.length > 0) {
      queue.shift().breadthFirstForEach(cb, queue);
    }
  };

  // Deadth first search tree
  depthFirstForEach = function (cb, order) {
    switch (order) {
      case "pre-order":
        cb(this.value);
        if (this.left) this.left.depthFirstForEach(cb, order);
        if (this.right) this.right.depthFirstForEach(cb, order);
        break;
      case "post-order":
        if (this.left) this.left.depthFirstForEach(cb, order);
        if (this.right) this.right.depthFirstForEach(cb, order);
        cb(this.value);
        break;
      default:
        console.log(this);
        if (this.left) this.left.depthFirstForEach(cb, order);
        cb(this.value);
        if (this.right) this.right.depthFirstForEach(cb, order);
        break;
    }
  };
}

let bst = new BinarySearchTree(20);

bst.insert(15);
bst.insert(25);
bst.insert(5);
bst.insert(17);
bst.insert(21);
bst.insert(28);
bst.insert(0);
bst.insert(14);
bst.insert(50);
bst.insert(1);
bst.insert(45);
bst.insert(13);
bst.insert(12);
bst.insert(11);
bst.insert(30);
bst.insert(35);
bst.insert(33);
bst.insert(31);
bst.insert(34);

/*
bst.insert(21);
bst.insert(76);
bst.insert(18);
bst.insert(27)
bst.insert(52)
bst.insert(82)
*/

function log(value) {
  console.log(value);
}

//bst.depthFirstForEachdepthFirstForEach(log)
//bst.depthFirstForEachdepthFirstForEach(log, "pre-order")
//bst.depthFirstForEachdepthFirstForEach(log, "post-order")
//bst.breadthFirstForEach(log)

//bst

let testArr = [];

function pushInOrder(val) {
  testArr.push(val);
}

bst.breadthFirstForEach(pushInOrder);

console.log(testArr);
