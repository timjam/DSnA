class StackNode<T> {

  private val: T;
  private nxt: StackNode<T> | undefined = undefined;

  constructor(val: T, nxt?: StackNode<T> | undefined) {
    this.val = val;
    this.nxt = nxt || undefined;
  }

  get value(): T {
    return this.value;
  }

  get next(): StackNode<T> | undefined {
    return this.next;
  }

  set next(nxt: StackNode<T> | undefined) {
    this.nxt = nxt;
  }

}

// This is here, because I would like to use this type to exclude StackNode itself
// from allowed types for StackNode value. But I run to problems all the time I try
// to use it

// type notStackNode<T> = T extends StackNode<T> ? never : T;

export default StackNode;

// export {
//   notStackNode,
// };
