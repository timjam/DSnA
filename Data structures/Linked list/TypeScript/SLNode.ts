class SLNode<T> {
  private data: T;
  private nxt: SLNode<T> | undefined = undefined;

  constructor(value: T) {
    this.data = value;
  }

  set next(node: SLNode<T> | undefined) {
    this.nxt = node;
  }

  get next(): SLNode<T> | undefined {
    return this.nxt;
  }
}

export default SLNode;
