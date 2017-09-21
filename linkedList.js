class Node {
  constructor(data, next) {
    // this.word = data.word;
    // this.definition = data.definition
    this.data = data
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
    // Start at the head
    if (!this.headNode) {
      console.log('No headNode')
      return
      } 
    let counter = 0;
    let currentNode = this.headNode;
    let prevNode = null;
    if (index===0) {
      this.headNode = this.headNode.next
      currentNode.next=null
      return;
    }
    // Crawl until we hit index
    while (counter < index && currentNode) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      ++counter;
    }
    console.log('Prev: ',prevNode.data, prevNode.next)

    console.log('Current: ',currentNode.data, currentNode.next)
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

  // Crawls and prints the list
  printList() {
    // Start at the head
    let currentNode = this.headNode;

    while (currentNode) {
      process.stdout.write(`[${currentNode.data}]`);
      if (currentNode.next) {
        process.stdout.write('=>');
      }
      currentNode = currentNode.next;
    }
    process.stdout.write('\n')
  }
}

const linkedList = new LinkedList();

linkedList.addNode(52);
linkedList.addNode(53);
linkedList.addNode(54);
linkedList.printList()
linkedList.removeNode(0);
linkedList.printList()
linkedList.removeNode(0);
linkedList.printList()
linkedList.removeNode(0);
linkedList.printList()
// console.log('Head: ', this.headNode.data, 'Tail: ', this.tailNode.data)
linkedList.addNode(54);
linkedList.printList()


// const createLLFromArr = (arr)=>{
//   let linkedList = new LinkedList(arr[0])
//   for (let i=1; i<arr.length; i++){

//   }
// }
