class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(headNode = null) {
    this.headNode = headNode;
    this.tailNode = headNode;
    // this.initialize(headNode);
  }

  // initialize(headNode = null) {
  //   this.headNode = headNode;
  //   this.tailNode = headNode;
  // }

  addFirstNode(data) {
    this.headNode = new Node(data, null);
    this.tailNode = this.headNode;
  }

  // Add a node to the end of the list
  addNode(data) {
    // If we don't have a tailNode yet, that means the list is empty
    // We can treat this case as a `addFirstNode` method
    if (!this.tailNode) {
      this.addFirstNode(data);
    } else {
      const node = new Node(data, null);
      // Set our new node as the official last node
      this.tailNode.next = node;
      this.tailNode = node;
    }
  }

  // Remove the node at this position (assume there is one there)
  // We'll crawl the list and save the prev
  removeNode(index) {
    // Start at the head
    let counter = 0;
    let currentNode = this.headNode;
    let prevNode = null;

    // Crawl until we hit index
    while (counter < index && currentNode) {
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

  // Crawls and prints the list
  printList() {
    // Start at the head
    let currentNode = this.headNode;

    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.printList();
linkedList.addNode(52);
linkedList.printList();
