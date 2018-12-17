class Vector {
  constructor ({ x, y, z }) {
    this.x = x
    this.y = y
    this.z = z
  }

  add ({ x, y, z }) {
    return new Vector({ x: this.x + x, y: this.y + y, z: this.z + z })
  }

  subtract ({ x, y, z }) {
    return this.add({ x: -x, y: -y, z: -z })
  }

  multiply (scalar) {
    return new Vector({ x: this.x * scalar, y: this.y * scalar })
  }

  divide (scalar) {
    return this.multiply(1 / scalar)
  }

  dot ({ x, y, z }) {
    return (this.x * x) + (this.y * y) + (this.z * z)
  }
}

export default Vector
