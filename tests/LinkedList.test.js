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
});

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
});

describe('at', () => {
  test('returns undefined if nothing is passed as arguments', () => {
    const list = new LinkedList();
    expect(list.at()).toBe(undefined);
  });
  test('returns undefined if the list is empty', () => {
    const list = new LinkedList();
    expect(list.at(3)).toBe(undefined);
  });
  test('returns first index value in the list', () => {
    const list = new LinkedList();
    list.append(33);
    list.append('fe');
    expect(list.at(0)).toBe(33);
  });
  test('returns middle index value in the list', () => {
    const list = new LinkedList();
    list.append(33);
    list.append('fe');
    list.append(7885);
    list.append('grh');
    list.append(23456);
    expect(list.at(2)).toBe(7885);
  });
  test('return last index value in the list', () => {
    const list = new LinkedList();
    list.append(33);
    list.append('fe');
    list.append(7885);
    list.append('grh');
    list.append(23456);
    expect(list.at(4)).toBe(23456);
  });
  test('return undefined for nonexistent index in the list', () => {
    const list = new LinkedList();
    list.append(33);
    list.append('fe');
    expect(list.at(7)).toBe(undefined);
  });
});
describe('pop', () => {
  test('returns undefined on an empty list', () => {
    const list = new LinkedList();
    expect(list.pop()).toBe(undefined);
  });
  test('returns undefined after pop the only node', () => {
    const list = new LinkedList();
    list.append(3);
    list.pop();
    expect(list.pop()).toBe(undefined);
  });
  test('returns the HEAD value', () => {
    const list = new LinkedList();
    list.append(123);
    list.append('fed');
    list.append(56);
    expect(list.pop()).toBe(123);
    expect(list.headNode.value).toBe('fed');
  });
});

describe('contains', () => {
  test('returns true when the value is in the list', () => {
    const list = new LinkedList();
    list.append(123);
    list.append('fed');
    list.append(56);
    expect(list.contains(56)).toBe(true);
  });
  test('returns false when the value is not in the list', () => {
    const list = new LinkedList();
    list.append(123);
    list.append('fed');
    list.append(56);
    expect(list.contains(5642)).toBe(false);
  });
  test('returns undefined when the list is empty', () => {
    const list = new LinkedList();
    expect(list.contains(5642)).toBe(undefined);
  });
});

describe('findIndex', () => {
  test('returns undefined on empty list', () => {
    const list = new LinkedList();
    expect(list.findIndex(2)).toBe(undefined);
  });
  test('returns index of the given value', () => {
    const list = new LinkedList();
    list.append(123);
    list.append('fed');
    list.append(56);
    list.append(678);
    expect(list.findIndex(56)).toBe(2);
  });
  test('return -1 if the value can’t be found in the list', () => {
    const list = new LinkedList();
    list.append(123);
    list.append('fed');
    list.append(56);
    list.append(678);
    expect(list.findIndex('hi')).toBe(-1);
  });
});

describe('toString', () => {
  test('returns an empty string for an empty list', () => {
    const list = new LinkedList();
    expect(list.toString()).toBe('');
  });
  test('returns the correct string for one node', () => {
    const list = new LinkedList();
    list.append(123);
    expect(list.toString()).toBe('( 123 ) -> null');
  });
  test('returns the correct string for multiple nodes', () => {
    const list = new LinkedList();
    list.append(123);
    list.append('fed');
    list.append(56);
    expect(list.toString()).toBe('( 123 ) -> ( fed ) -> ( 56 ) -> null');
  });
});
