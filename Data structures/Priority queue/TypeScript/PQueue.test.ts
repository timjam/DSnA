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
    pqueue.enqueue('asdasd', 1);
    pqueue2.enqueue('anothertest', 1);
  });
  
  it('dequeue', () => {
    const next1 = pqueue.dequeue();
    const next2 = pqueue2.dequeue();
    const next3 = emptypq.dequeue();
    expect(next1).toEqual(testobj);
    expect(next2).toBe('anothertest');
    expect(next3).toBeUndefined();
  });
  
  it('peek', () => {
    expect(pqueue.peek).toBe('asdasd');
    expect(pqueue2.peek).toBe('test');
    expect(emptypq.peek).toBeUndefined();
  });

  it('extras', () => {
    const n1 = pqueue.dequeue();
    const n2 = pqueue.dequeue();
    expect(n1).toBe('asdasd');
    expect(n2).toBe(123);
    expect(pqueue.peek).toEqual([1234]);
  })

});