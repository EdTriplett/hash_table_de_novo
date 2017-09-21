import { LinkedList, Node } from "./linkedList";

class HashTable {
  constructor(size) {
    this.buckets = new Array(size).fill(null);
  }

  hash(word) {
    // parseInt(word, 36) % this.buckets.size;
    parseInt(word[0], 36) - 10;
  }

  insert(data) {
    let index = hash(data.word);
    if (!this.buckets[index]) this.buckets[index] = new LinkedList();
    this.buckets[index].addNode(data);
  }

  renderList() {
    let count;
    this.buckets.forEach((linkedList, index) => {
      count = linkedList ? linkedList.length : 0;
      console.log(`index: ${index}, count: ${count}`);
    });
  }

  define(word) {
    const index = hash(word);
    const { node, count } = this.buckets[index].search(word);
    console.log(`Took ${count} steps`);
    return node ? node.definition : "not found";
  }
}
