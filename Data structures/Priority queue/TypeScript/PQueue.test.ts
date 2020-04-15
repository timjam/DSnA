import 'jest';
import PQueuee from './PQueue';

describe('Priority Queue unit tests', () => {

  it('constructor', () => {
    const emptypq = new PQueuee();
    const pqueue2 = new PQueuee<string>('test', 4);
    expect(pqueue2).toBeInstanceOf(PQueuee);
    expect(emptypq).toBeInstanceOf(PQueuee);
  });
  
  const testobj = {
    asd: {
      a: () => console.log('test'),
      b: '123',
    },
  };

  const testdata = [['test', 4], [123, 2], [testobj, 1]];
  const pqueue = new PQueuee<any>();
  testdata.forEach(innerArray => {
    const value = innerArray[0];
    const prio = innerArray[1];
    pqueue.enqueue(value, prio as number);
  });

  const pqueue2 = new PQueuee<string>('test', 4);
  const emptypq = new PQueuee();

  it('is empty', () => {
    expect(pqueue.isEmpty).toBeFalsy();
    expect(emptypq.isEmpty).toBeTruthy();
  });
  
  it('enqueue', () => {
    pqueue.enqueue([1234], 2);
    // expect(pqueue).toEqual(new PQueuee([['test', 4], [123, 2], [{ asd: { a: () => console.log('test'), b: '123' } }, 1], [[1234], 2]]));
    pqueue.enqueue('asd', 1);
    // expect(pqueue).toEqual(new PQueuee([['asd', 1], ['test', 4], [123, 2], [{ asd: { a: () => console.log('test'), b: '123' } }, 1], [[1234], 2]]));
    pqueue2.enqueue('anothertest', 1);
    // expect(pqueue2).toEqual(new PQueuee<string>('test', 4, 'anothertest', 1));
  });
  
  it('dequeue', () => {
    // const next1 = pqueue.dequeue({ asd: { a: () => console.log('test'), b: '123' } });
    const next2 = pqueue2.dequeue();
    const next3 = emptypq.dequeue();
    // expect(next1).toEqual({});
    expect(next2).toBe('anothertest');
    expect(next3).toBeUndefined();
  });
  
  it('peek', () => {
    expect(pqueue.peek).toBe('asd');
    expect(pqueue2.peek).toBe('test');
    expect(emptypq.peek).toBeUndefined();
  });

});