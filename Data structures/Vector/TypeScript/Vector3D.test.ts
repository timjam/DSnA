import 'jest';
import Vector3D from './Vector3D';

describe('Vector3D unit tests', () => {
  
  const vector = new Vector3D({u: 4, v: 4, w: 2});
  const vector2 = new Vector3D({ u: 1, v: 2, w: 3 });

  // it('constructor', () => {
  //   const vector = new Vector3D({u: 4, v: 4, w: 2});
  // });

  it('magnitude', () => {
    expect(vector.magnitude).toBe(6);
  });

  it('unitVector', () => {
    const uv = new Vector3D({ u: 2/3, v: 2/3, w: 1/3 });
    expect(vector.unitVector).toEqual(uv);
  });

  it('add', () => {
    expect(vector.add(vector2)).toEqual(new Vector3D({ u: 5, v: 6, w: 5 }));
  });

  it('subtract', () => {
    expect(vector.subtract(vector2)).toEqual(new Vector3D({ u: 3, v: 2, w: -1 }));
  });
  
  it('copy', () => {
    const result = vector.copy();
    expect(result).toEqual(vector);
  });
  
  it('multiplyBy', () => {
    const result = vector.copy();
    result.multiplyBy(2);
    expect(result).toEqual(new Vector3D({ u: 8, v: 8, w: 4 }));
  });
  
  it('divideBy', () => {
    const result = vector.copy();
    result.divideBy(2);
    expect(result).toEqual(new Vector3D({ u: 2, v: 2, w: 1 }));
  });

  it('dotProduct', () => {
    expect(vector.dotProduct(vector2)).toBe(18);
  });

  it('crossProduct', () => {
    expect(vector.crossProduct(vector2)).toEqual(new Vector3D({ u: 8, v: -10, w: 4 }));
  });

  it('toArray', () => {
    expect(vector.toArray()).toEqual([4, 4, 2]);
  });

  it('toObject', () => {
    expect(vector.toObject()).toEqual({ u: 4, v: 4, w: 2 });
  });

});
