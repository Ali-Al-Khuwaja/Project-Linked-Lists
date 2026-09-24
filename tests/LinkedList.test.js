import { LinkedList } from '../src/LinkedList';

describe('size', () => {
  test('Get the size of an empty linked list', () => {
    const list = new LinkedList();
    expect(list.size()).toBe(0);
  });
  test('Get the size of a linked list that has 1 node', () => {
    const list = new LinkedList();
    list.append(3);
    expect(list.size()).toBe(1);
  });
  test('Get the size of a linked list that has 3 nodes', () => {
    const list = new LinkedList();
    list.append(3);
    list.append(5);
    list.append('a');
    expect(list.size()).toBe(3);
  });
});
