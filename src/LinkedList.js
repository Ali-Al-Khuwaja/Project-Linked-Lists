import { Node } from './Node.js';
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

  head() {
    if (this.headNode === null) {
      return undefined;
    }
    return this.headNode.value;
  }
  tail() {
    if (this.headNode === null) {
      return undefined;
    }
    let current = this.headNode; //point to the head

    // search for the tail
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    // tail was found
    return current.value;
  }

  at(index) {
    // if list is empty
    if (this.headNode === null) {
      return undefined;
    }
    let current = this.headNode; //point to the head
    let counter = 0;
    // if index is at first value
    if (index === 0) {
      return this.headNode.value;
    }
    // search for the index
    while (counter < index) {
      if (current.nextNode === null) {
        return undefined;
      }
      current = current.nextNode;
      counter++;
    }
    return current.value;
  }

  pop() {
    if (this.headNode === null) {
      return undefined;
    }
    let pop = this.headNode.value;
    this.headNode = this.headNode.nextNode;
    return pop;
  }
  contains(value) {
    // start form head then keep going until one of the nodes
    //  has it's value to be equal to value
    if (this.headNode === null) {
      return undefined;
    }
    let current = this.headNode;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }
  findIndex(value) {
    // when list is empty
    if (this.headNode === null) {
      return undefined;
    }
    // when list is populated
    let current = this.headNode;
    let counter = 0;
    while (current !== null) {
      if (current.value === value) {
        return counter;
      }
      counter++;
      current = current.nextNode;
    }
    // when nothing is found
    return -1;
  }
  toString() {
    if (this.headNode === null) {
      return '';
    }
    let result = '';
    let current = this.headNode;
    while (current !== null) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    result += 'null';
    return result;
  }
}
