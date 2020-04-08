import 'jest';
import Set from './Set';

describe('Set unit tests', () => {
  
  it('constructor', () => {
    const testSet = new Set([1, 2, 3, 4, 4, 5, 5, 6]);
    expect(testSet).toBeInstanceOf(Set);
    expect(testSet).toEqual(new Set([1, 2, 3, 4, 5, 6]));
  })

  const testSet = new Set([1, 2, 3, 4, 4, 5, 5, 6]);
  const testSet2 = new Set([1, 2, 5, 13, 14]);
  const emptySet = new Set();

  it('constructor with differing datatypes', () => {
    expect(() => new Set([1, '2', 2])).toThrowError();
  })

  it('contains', () => {
    expect(testSet.contains(6)).toBeTruthy();
    expect(testSet.contains(7)).toBeFalsy();
  });

  it('insert', () => {
    testSet.insert(7);
    expect(testSet).toEqual(new Set([1, 2, 3, 4, 5, 6, 7]));
  });

  it('remove', () => {
    testSet.remove(2);
    expect(testSet).toEqual(new Set([1, 3, 4, 5, 6, 7]));
  });

  it('union', () => {
    expect(testSet.union(testSet2)).toEqual(new Set[1, 2, 3, 4, 5, 6, 7, 13, 14]);
  });

  it('intersect', () => {
    expect(testSet.intersect(testSet2)).toEqual(new Set[1, 5]);
  });

  it('subtract', () => {
    expect(testSet.subtract(testSet2)).toEqual(new Set([3, 4, 6, 7]));
  });

  it('size', () => {
    expect(testSet.size).toBe(6);
    expect(emptySet.size).toBe(0);
  });

  it('isEmpty', () => {
    expect(testSet.isEmpty).toBeFalsy();
    expect(emptySet.isEmpty).toBeTruthy();
  });

});