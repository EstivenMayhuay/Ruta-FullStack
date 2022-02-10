/* Hashs Table */ 

class HashTable {
  constructor() {
    this.table = [];
    this.size = 35;
  }
  
  // method hashed
  _hash (key) {
    let sum = 0;
    
    for(let i=0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }
    
    return sum % this.size;
  }
  
  // set
  set (key, value) {
    if(typeof key !== "string") throw new TypeError("Key must be strings");
    
    let index = this._hash(key);
    
    if(this.table[index] === undefined) {
      this.table[index] = {}
    }
    
    this.table[index][key] = value;
  }
  
  // get
  get (key) {
    let index = this._hash(key);
        
    if(this.table[index]) return this.table[index][key];
    
    return false;
  }
  
  // hasKey
  hasKey (key) {
    let index = this._hash(key);
    
    if(this.table[index] === undefined) return false;
    
    return this.table[index].hasOwnProperty(key)
  }
}

let hashTable = new HashTable();

hashTable.set("peso", 40)
hashTable.set("peos", 80)
hashTable.set("talla", 120)

hashTable.hasKey("talla")

console.log(hashTable)