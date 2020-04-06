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

}

// type notStackNode<T> = T extends StackNode<T> ? never : T;

export default StackNode;

// export {
//   notStackNode,
// };
