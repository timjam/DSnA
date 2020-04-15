// Leaving this here for learning purposes
type ValueArray<T> = [T,number];

class PQueuee<T> {

  private values: Array<ValueArray<T>>;

  constructor(value?: T, prio?: number) {
    this.values = [];
    if (value && prio) {
      this._insert(value, prio);
    }
  }

  private _insert(value: T, prio: number): void {
    
    let insertidx = 0;
    
    this.values.forEach(valuepriopair => {
      const vpprio = valuepriopair[1];
      if (vpprio <= prio) {
        insertidx += 1;
      }
    });

    this.values.splice(insertidx, 0, [value, prio]);

  };

  get isEmpty(): boolean {
    return this.values.length === 0;
  }

  get peek(): T | undefined {
    const res = this.values[0];
    if (!res) {
      return undefined;
    } else {
      return res[0];
    }
  }

  enqueue(value: T, prio: number): void {
    this._insert(value, prio);
  }

  dequeue(): T | undefined {
    const res = this.values.splice(0,1)[0];
    if (!res) {
      return undefined;
    } else {
      return res[0]
    }
  }


}

export default PQueuee;
