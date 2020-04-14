import 'jest';
import Queuee from './Queue';

describe('Queue unit tests', () => {

  it('constructor', () => {
    const objectQueue = new Queuee([{ 1: 1 }, '2', 3]);
    const numberQueue = new Queuee<number>([1, 2, 3]);
    expect(objectQueue).toBeInstanceOf(Queuee);
    expect(numberQueue).toBeInstanceOf(Queuee);
  });

  const objectQueue = new Queuee([{ 1: 1 }, '2', 3]);
  const numberQueue = new Queuee<number>([1, 2, 3]);
  
  it('enqueue', () => {
    objectQueue.enqueue('4');
    numberQueue.enqueue(5);
    expect(objectQueue).toEqual(new Queuee([{ 1: 1 }, '2', 3, '4']));
    expect(numberQueue).toEqual(new Queuee([1, 2, 3, 5]));
  });
  
  it('dequeue', () => {
    const nextObject = objectQueue.dequeue();
    const nextNumber = numberQueue.dequeue();
    expect(nextObject).toEqual({ 1: 1 });
    expect(nextNumber).toBe(1);
    expect(objectQueue).toEqual(new Queuee(['2', 3, '4']));
    expect(numberQueue).toEqual(new Queuee([2, 3, 5]));
  });
});
