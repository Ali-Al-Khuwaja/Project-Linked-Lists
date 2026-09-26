import { Node } from './Node';
export class LinkedList {
  constructor() {
    this.headNode = null;
  }
  append(value) {
    const newNode = new Node(value); // create a new node

    if (this.headNode === null) {
      this.headNode = newNode;
    } else {
      let current = this.headNode; //point to the head

      // search for the tail
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      // tail was found, append it here
      current.nextNode = newNode;
    }
  }
  prepend(value) {
    const newNode = new Node(value);

    if (this.headNode === null) {
      this.headNode = newNode;
    } else {
      newNode.nextNode = this.headNode;
      this.headNode = newNode;
    }
  }
  size() {
    let counter = 0;
    if (this.headNode !== null) {
      // list not empty
      counter = 1;
      let current = this.headNode; // set headNode as current
      while (current.nextNode !== null) {
        // keep switching until tails is found, count step while doing so
        current = current.nextNode; // set current to the next node
        counter++;
      }
    }
    return counter; // it will always return for both cases, it's either 0 or any other size
  }
  //head() should return the value of the first node in the list.
  // If the list is empty, it should return undefined.
  head() {
    if (this.headNode === null) {
      return undefined;
    }
    return this.headNode.value;
  }
}
