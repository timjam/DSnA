// Weird name so that it wont conflict with possible built-in data types
class Queuee<T> {
  
  private values: Array<T>

  constructor(values: Array<T>) {
    this.values = values;
  }

  enqueue(value: T) {
    this.values.splice(this.values.length, 0, value);
  }

  dequeue(): T {
    return this.values.splice(0,1)[0];
  }
}

export default Queuee;
