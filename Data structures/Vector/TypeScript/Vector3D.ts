interface DirectionAngles {
  u: number,
  v: number,
  w: number,
}

interface Point3D {
  u?: number,
  v?: number,
  w?: number,
}

class Vector3D {

  // Vector origin is always in {0,0,0}

  u: number;
  v: number;
  w: number;

  constructor({ u = 0, v = 0, w = 0 }: Point3D = {}) {
    this.u = u;
    this.v = v;
    this.w = w;
  }

  get magnitude(): number {
    return Math.sqrt(this.u**2 + this.v**2 + this.w**2);
  }

  get unitVector(): Vector3D {
    return new Vector3D({
      u: this.u / this.magnitude,
      v: this.v / this.magnitude,
      w: this.w / this.magnitude,
    })
  }

  add(vector: Vector3D): Vector3D {
    return new Vector3D({
      u: this.u + vector.u,
      v: this.v + vector.v,
      w: this.w + vector.w,
    })
  }

  subtract(vector: Vector3D): Vector3D {
    return new Vector3D({
      u: this.u - vector.u,
      v: this.v - vector.v,
      w: this.w - vector.w,
    })
  }

  copy(): Vector3D {
    return new Vector3D({
      u: this.u,
      v: this.v,
      w: this.w
    });
  }

  multiplyBy(scalar: number): void {
      this.u *= scalar;
      this.v *= scalar;
      this.w *= scalar;
  }

  divideBy(scalar: number): void {
    this.u /= scalar;
    this.v /= scalar;
    this.w /= scalar;
  }

  dotProduct(vector: Vector3D): number {
    return (this.u * vector.u + this.v * vector.v + this.w * vector.w);
  }

  crossProduct(vector: Vector3D): Vector3D {
    return new Vector3D({
      u: this.v * vector.w - this.w * vector.v,
      v: this.w * vector.u - this.u * vector.w,
      w: this.u * vector.v - this.v * vector.u,
    });
  }

  toArray(): Array<number> {
    return [this.u, this.v, this.w];
  }

  toObject(): Point3D {
    return {
      u: this.u,
      v: this.v,
      w: this.w,
    }
  }

}

export default Vector3D;
