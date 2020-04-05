import 'jest'
import Stack from './Stack';

describe('Stack unit tests', () => {

  const stack = new Stack(10, ['1','2','3']);
  const emptyStack = new Stack(10);
  const fullStack = new Stack(3, ['1', '2', '3']);

  it('push', () => {
    expect(stack.push('7')).toEqual(new Stack(['1', '2', '3', '7']));
  })

  it('push to full', () => {
    expect(fullStack.push('7')).toThrowError('Stack is full');
  });

  it('pop', () => {
    expect(stack.pop()).toEqual(new Stack(['1','2']));
  });

  it('pop from empty', () => {
    expect(emptyStack.pop()).toThrowError('Can not pop from empty stack');
  });

  it('isEmpty', () => {
    expect(stack.isEmpty()).toBeFalsy();
    expect(emptyStack.isEmpty()).toBeTruthy();
  });

  it('isFull', () => {
    expect(stack.isFull()).toBeFalsy();
    expect(fullStack.isFull()).toBeTruthy();
  });

  it('size', () => {
    expect(stack.getSize()).toBe(3);
    expect(emptyStack.getSize()).toBe(0);
    expect(fullStack.getSize()).toBe(3);
  });

  it('capacity', () => {
    expect(stack.getCapacity()).toBe(10);
    expect(emptyStack.getCapacity()).toBe(10);
    expect(fullStack.getCapacity()).toBe(3);
  });

  it('flush', () => {
    expect(stack.flush()).toEqual(emptyStack);
  });

});