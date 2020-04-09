// Had to rename this to Sett, because of course Set conflicts with the TS/JS built-in Set
class Sett<T> {

  private vals: Array<T> = [];
  private sze: number = 0;

  constructor(valueArray?: Array<T> | undefined) {
    this.vals = this._toUunique(valueArray);
    this.sze = this.vals.length;
  }

  private _toUunique(v: Array<T> | undefined): Array<T> {
    // I could use the array methods, but because even using arrays here is questionable
    // in my opinion, I'll make own filter method in case I sometimes move away from
    // using array at all

    let tmp: Array<T> = [];
    
    v?.forEach(elem => {
      if (tmp.indexOf(elem) === -1) {
        tmp = tmp.concat([elem]);
      }
    });
    
    return tmp.sort();
  }

  get values(): Array<T> {
    return this.vals;
  }

  get size(): number {
    return this.sze;
  }

  contains(val: T): boolean {
    // Again could use 'includes' here, but implementing this Set feels quite redundant
    // and hard to come up with implementation that wouldn't use array and it's methods
    return (this.vals.indexOf(val) > -1);
  }

  insert(val: T): void {
    if (this.vals.indexOf(val) === -1) {
      this.vals = this.vals.concat([val]);
      this.sze += 1;
    }
  }

  remove(val: T): void {
    if (this.vals.indexOf(val) > -1) {
      this.vals = this.vals.filter(e => e !== val);
      this.sze -= 1;
    }
  }

  union(secondSet: Sett<T>): Sett<T> {
    const values = this.vals.concat(secondSet.values);
    return new Sett(values);
  }

  intersect(secondSet: Sett<T>): Sett<T> {
    const resultSet: Array<T> = [];
    this.vals.forEach(elem => {
      if (secondSet.values.indexOf(elem) > -1) {
        resultSet.push(elem);
      }
    });
    return new Sett(resultSet);
  }

  subtract(secondSet: Sett<T>): Sett<T> {
    const result: Array<T> = [];
    this.vals.forEach(elem => {
      if (secondSet.values.indexOf(elem) === -1) {
        result.push(elem);
      }
    });
    return new Sett(result);
  }

  isEmpty(): boolean {
    return (this.sze === 0 && this.vals.length === 0);
  }
}

export default Sett;
