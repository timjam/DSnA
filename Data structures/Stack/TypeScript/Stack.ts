import StackNode from './StackNode';

class Stack<T> {
  
  private capacity!: number;
  private top?: StackNode<T> | undefined = undefined;
  private size: number = 0;
  
  constructor(capacity: number, initialValues?: Array<T>) {
    this.capacity = capacity;

    if (initialValues) {
      this.size = initialValues.length;
      // this.top = this._initStack(initialValues, initialValues.length - 1);
      initialValues.forEach(item => {
        this.push(item)
        this.size += 1;
      });
    }

  };

  // private _initStack = (array: Array<notStackNode<T>>, idx: number): StackNode<T> => {
  //   if (idx == 0) {
  //     return new StackNode(array[idx], undefined);
  //   } else {
  //     return new StackNode(array[idx], this._initStack(array, idx-1));
  //   }
  // }

  push(value: T): void {
    this.top = new StackNode(value, this.top);
  }

  pop(): T | undefined {
    const value = this.top?.value;
    this.top = this.top?.next;
    return value;
  }

}

export default Stack;
