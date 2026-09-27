import { LinkedList } from '../src/LinkedList';

describe(
  'size',
  () => {
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
  },
  describe('head', () => {
    test('Get undefined if the list is empty', () => {
      const list = new LinkedList();
      expect(list.head()).toBe(undefined);
    });
    test('Get the first value inside the first Node in the list', () => {
      const list = new LinkedList();
      list.append(33);
      expect(list.head()).toBe(33);
    });
    test('Get the first value inside the first Node in the list with more nodes', () => {
      const list = new LinkedList();
      list.append(33);
      list.append('fe');
      list.append(3245);
      expect(list.head()).toBe(33);
    });
  }),
  describe('tail', () => {
    test('Get undefined if the list is empty', () => {
      const list = new LinkedList();
      expect(list.tail()).toBe(undefined);
    });
    test('Get the last value inside the last Node in the list', () => {
      const list = new LinkedList();
      list.append(33);
      expect(list.tail()).toBe(33);
    });
    test('Get the last value inside the last Node in the list with more nodes', () => {
      const list = new LinkedList();
      list.append(33);
      list.append('fe');
      list.append(3245);
      expect(list.tail()).toBe(3245);
    });
  })
);
