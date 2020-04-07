import 'jest'
import Stack from './Stack';
// import StackNode from './StackNode';

describe('Stack unit tests', () => {

  const stack = new Stack(10, ['1','2','3']);
  const emptyStack = new Stack(10);
  const fullStack = new Stack(3, ['1', '2', '3']);

  it('push', () => {
    stack.push('7');
    expect(stack).toEqual(new Stack(10, ['1', '2', '3', '7']));
  })

  it('push to full', () => {
    expect(() => fullStack.push('7')).toThrowError('Stack is full');
  });

  it('pop', () => {
    expect(stack.pop()).toBe('7');
    expect(stack).toEqual(new Stack(10, ['1', '2', '3']));
  });

  it('pop from empty', () => {
    expect(() => emptyStack.pop()).toThrowError('Can not pop from empty stack');
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
    expect(stack.size).toBe(3);
    expect(emptyStack.size).toBe(0);
    expect(fullStack.size).toBe(3);
  });

  it('capacity', () => {
    expect(stack.capacity).toBe(10);
    expect(emptyStack.capacity).toBe(10);
    expect(fullStack.capacity).toBe(3);
  });

  it('flush', () => {
    stack.flush();
    expect(stack).toEqual(emptyStack);
  });

});