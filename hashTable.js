const { LinkedList, Node } = require("./linkedList.js");
const json = require("./dictionary.json");

class HashTable {
  constructor(size) {
    this.buckets = new Array(size).fill(null);
    this.balanceHigh = 50;
    this.balanceLow = 5;
    this.balanceCurr = 0;
  }

  hash(word) {
    return parseInt(word, 36) % this.buckets.length;
  }

  getCount () {
    let count = 0;
    this.buckets.forEach(linkedlist => {
      count += linkedlist.length ? linkedlist.length : 0;
    });
    return count;
  }

  calcBalance() {
    this.balanceCurr = this.getCount()/this.buckets.length;
  }

  balance(tunerHigh=0, tunerLow=0) {

    const rebalance = ()=>{
      let newBalance = (this.balanceHigh + this.balanceLow)/2

      let newBuckets = new Array(Math.ceil(this.getCount()/newBalance)).fill(null);

      this.buckets.forEach((linkedList, index))=>{
        if (linkedList) {
          for (i=0; i<linkedList.length; i++) {
            newBuckets.insert
          }
        }
      }
    }

    if (tunerHigh) {
      this.balanceHigh = tunerHigh
    }
    if (tunerLow) {
      this.balanceLow = tunerLow
    }
    if (this.balanceCurr > this.balanceHigh || this.balanceCurr < this.balanceLow) {
      rebalance()

    }

    
  }

  updateBucket() {}

  insert(data) {
    let index = this.hash(data.word);
    if (!this.buckets[index]) this.buckets[index] = new LinkedList();
    this.buckets[index].addNode(data);

    this.calcBalance()
  }

  renderList() {
    let count;
    this.buckets.forEach((linkedList, index) => {
      count = linkedList ? linkedList.length : 0;
      console.log(`index: ${index}, count: ${count}`);
    });
  }

  define(word) {
    const index = this.hash(word);
    const { node, count } = this.buckets[index].search(word);
    console.log(`Took ${count} steps`);
    return node ? node.definition : "not found";
  }
}

let dictionary = new HashTable(26);
Object.keys(json).forEach(key => {
  let word = key;
  let definition = json[key];
  dictionary.insert({ word, definition });
});

// console.log(dictionary.define("war"));
// console.log(dictionary.define("truth"));
// console.log(dictionary.define("beauty"));

dictionary.renderList();
dictionary.calcBalance();
console.log("balance: ", dictionary.balanceCurr);
// dictionary.renderList();
