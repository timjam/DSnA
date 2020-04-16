class DLNode<T> {
  private data: T;
  private nxt: DLNode<T> | undefined = undefined;
  private prv: DLNode<T> | undefined = undefined;

  constructor(value: T) {
    this.data = value;
  }

  set next(node: DLNode<T> | undefined) {
    this.nxt = node;
  }
  
  set prev(node: DLNode<T> | undefined) {
    this.prv = node;
  }
  
  get next(): DLNode<T> | undefined {
    return this.nxt;
  }

  get prev(): DLNode<T> | undefined {
    return this.prv;
  }
}

export default DLNode;
