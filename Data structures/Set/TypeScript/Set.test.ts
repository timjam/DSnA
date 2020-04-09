import 'jest';
import Sett from './Set';

describe('Set unit tests', () => {
  
  it('constructor', () => {
    const testSet = new Sett([1, 2, 3, 4, 4, 5, 5, 6]);
    const emptySet = new Sett();
    expect(testSet).toBeInstanceOf(Sett);
    expect(emptySet).toBeInstanceOf(Sett);
    expect(testSet).toEqual(new Sett([1, 2, 3, 4, 5, 6]));
    expect(emptySet).toEqual(new Sett([]));
  })

  const testSet = new Sett<number>([1, 2, 3, 4, 4, 5, 5, 6]);
  const testSet2 = new Sett<number>([1, 2, 5, 13, 14]);
  const emptySet = new Sett<number>();
  const stringSet = new Sett<string>(['a', 'b', 'ab']);
  const stringSet2 = new Sett<string>(['aa', 'abb', 'db']);

  /** 
   * Constructor could possibly be declared so that this would throw
   * an error, but TS is not meant to work like that. Instead every set
   * should be declared with a type in mind, otherwise their type will be any
   * i.e. if this was declared as new Sett<number>([1, '2', 2]) TS would show
   * error here. Commenting following lines away, but leaving them here to
   * remind myself about this.
   * 
   * */ 
  // it('constructor with differing datatypes', () => {
  //   expect(() => new Sett([1, '2', 2])).toThrowError();
  // })

  it('contains', () => {
    expect(testSet.contains(6)).toBeTruthy();
    expect(testSet.contains(7)).toBeFalsy();
  });

  it('insert', () => {
    testSet.insert(7);
    expect(testSet).toEqual(new Sett([1, 2, 3, 4, 5, 6, 7]));
  });

  it('remove', () => {
    testSet.remove(2);
    expect(testSet).toEqual(new Sett([1, 3, 4, 5, 6, 7]));
  });

  it('union', () => {
    const resultSet = testSet.union(testSet2);
    expect(resultSet).toEqual(new Sett([1, 2, 3, 4, 5, 6, 7, 13, 14]));
  });

  it('union', () => {
    const resultSet = stringSet.union(stringSet2);
    expect(resultSet).toEqual(new Sett(['a', 'aa', 'ab', 'abb', 'b', 'db']));
  });

  it('intersect', () => {
    const resultSet = testSet.intersect(testSet2);
    expect(resultSet).toEqual(new Sett([1, 5]));
  });

  it('subtract', () => {
    const resultSet = testSet.subtract(testSet2);
    expect(resultSet).toEqual(new Sett([3, 4, 6, 7]));
  });

  it('size', () => {
    expect(testSet.size).toBe(6);
    expect(emptySet.size).toBe(0);
  });

  it('isEmpty', () => {
    expect(testSet.isEmpty()).toBeFalsy();
    expect(emptySet.isEmpty()).toBeTruthy();
  });

});