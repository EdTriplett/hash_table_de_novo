class Node {
  constructor(data, next) {
    this.word = data.word;
    this.definition = data.definition;
    this.next = next;
  }
}

class LinkedList {
  constructor(headNode = null) {
    this.headNode = headNode;
    this.tailNode = headNode;
  }

  addFirstNode(data) {
    this.headNode = new Node(data, null);
    this.tailNode = this.headNode;
  }

  // Add a node to the end of the list
  addNode(data) {
    if (!this.tailNode) {
      this.addFirstNode(data);
    } else {
      const node = new Node(data, null);
      this.tailNode.next = node;
      this.tailNode = node;
    }
  }

  removeNode(index) {
    // Case 1: HEAD IS NULL
    if (!this.headNode) return;

    let counter = 0;
    let currentNode = this.headNode;
    let prevNode = null;

    // Case 2: HEAD IS NOT NULL, BUT DELETING FIRST NODE
    if (!index) {
      this.headNode = this.headNode.next;
      // Case 2B: ONLY 1 NODE IN LINKED LIST
      if (!this.headNode) this.tailNode = this.headNode;
      currentNode.next = null;
      return;
    }

    // Crawl until we hit index
    while (counter < index && currentNode) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      ++counter;
    }
    if (!currentNode) return;

    // Now remove the node
    let nextNode = currentNode.next;

    // Clear the `next` reference
    currentNode.next = null;

    // Make the previous one point correctly
    prevNode.next = nextNode;
  }

  // Return the node at that position, like in an aNrray
  // It has no error handling
  findNode(index) {
    // Start at the head
    let counter = 0;
    let currentNode = this.headNode;

    // Crawl until we hit index
    while (counter < index) {
      currentNode = currentNode.next;
      ++counter;
    }

    return currentNode;
  }

  printNode(node) {
    process.stdout.write(`[${node.word}: ${node.definition}]`);
  }

  readNode(index) {
    this.printNode(this.findNode(index));
    console.log();
  }

  // Crawls and prints the list
  printList() {
    // Start at the head
    let currentNode = this.headNode;

    while (currentNode) {
      this.printNode(currentNode);
      if (currentNode.next) {
        process.stdout.write(" => ");
      }
      currentNode = currentNode.next;
    }
    process.stdout.write("\n");
  }
}

const linkedList = new LinkedList();

linkedList.addNode({
  word: "cat",
  definition: "a furry creature that bites people"
});
linkedList.addNode({ word: "dog", definition: "wipes out native wild life" });
linkedList.addNode({ word: "snake", definition: "awesome safe pets fur kids" });

linkedList.removeNode(0);
// linkedList.removeNode(0);
// linkedList.removeNode(0);

linkedList.printList();
linkedList.readNode(0);

// linkedList.addNode(5);

// const createLLFromArr = (arr)=>{
//   let linkedList = new LinkedList(arr[0])
//   for (let i=1; i<arr.length; i++){

//   }
// }
