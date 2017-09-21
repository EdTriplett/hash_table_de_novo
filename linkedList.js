class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(headNode=null) {  
    this.initialize(headNode)  
  }

  initialize=(headNode = null)=>{
    this.tailNode = headNode;
    this.prevNode = headNode;
    this.headNode = headNode;
  }

  addFirstNode(data) {
    this.tailNode = new Node(data, null);
    this.prevNode = this.tailNode;
  }

  // Add a node to the end of the list
  addNode(data) {
    // If we don't have a tailNode yet, that means the list is empty
    // We can treat this case as a `addFirstNode` method
    if (!this.tailNode) {
      this.addFirstHead(data);
    }
    else {
      const node = new Node(data, null);

      // First, point the last node to our new one
      this.prevNode.next = node;

      // Set our new node as the official last node
      this.prevNode = node;
    }
  }

  // Remove the node at this position (assume there is one there)
  // We'll crawl the list and save the prev
  removeNode(index) {
    // Start at the head
    let counter = 0;
    let currentNode = this.tailNode;
    let prevNode = null;

    // Crawl until we hit index
    while (counter < index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      ++counter;
    }

    // Now remove the node
    let nextNode = currentNode.next;

    // Clear the `next` reference
    currentNode.next = null;

    // Make the previous one point correctly
    prevNode.next = nextNode;
  }

  // Return the node at that position, like in an array
  // It has no error handling
  findNode(index) {
    // Start at the head
    let counter = 0;
    let currentNode = this.tailNode;

    // Crawl until we hit index
    while (counter < index) {
      currentNode = currentNode.next;
      ++counter;
    }

    return currentNode;
  }

  // Crawls and prints the list
  printList() {
    // Start at the head
    let currentNode = this.tailNode;

    while (currentNode.next !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}