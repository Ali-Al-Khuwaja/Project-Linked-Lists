import { LinkedList } from './LinkedList';
const list = new LinkedList();

list.append('A');
list.append('B');
list.append('C');

console.log(list.headNode);
console.log(list.headNode.value);
console.log(list.headNode.nextNode.value);
console.log(list.headNode.nextNode.nextNode.value);
