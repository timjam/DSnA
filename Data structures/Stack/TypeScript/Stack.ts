import StackNode from './StackNode';

class Stack<T> {
  
  private cpacity!: number;
  private top?: StackNode<T> | undefined = undefined;
  private sze: number = 0;
  
  constructor(cpacity: number, initialValues?: Array<T>) {
    this.cpacity = cpacity;

    if (initialValues) {
      this.sze = initialValues.length;
      initialValues.forEach(item => {
        this.push(item)
        this.sze += 1;
      });
    }

  };

  private _deleteAll(node: StackNode<T> | undefined): void {
    if (!node) {
      this.top = node;
      this.sze = 0;
      return;
    } else {
      this._deleteAll(node.next);
      node.next = undefined;
      return;
    }
  }
  push(value: T): void {
    if (this.sze < this.cpacity) {
      this.top = new StackNode(value, this.top);
      this.sze += 1;
    } else {
      throw new Error('Stack is full');
    }
  }

  pop(): T | undefined {
    if (this.sze > 0) {
      const value = this.top?.value;
      this.top = this.top?.next;
      this.sze -= 1;
      return value;
    } else {
      throw new Error('Can not pop from empty stack');
    }
  }

  isEmpty(): boolean {
    return (this.top === undefined && this.sze === 0);
  }

  isFull(): boolean {
    return (this.top instanceof StackNode && this.sze === this.cpacity );
  }

  flush(): void {
    // this.top = undefined 
    // Should work, because it cuts the reference chain and GC
    // should remove the objects. However it might be better to
    // delete all objects manually so that they don't stay
    // lingering in the memory at all.
    this._deleteAll(this.top);
  }

  get size(): number {
    return this.sze;
  }

  get capacity(): number {
    return this.cpacity;
  }

}

export default Stack;
