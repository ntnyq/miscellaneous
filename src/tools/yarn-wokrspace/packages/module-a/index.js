class Square {
  constructor(width, height = width) {
    this.width = width
    this.height = height
  }

  getArea() {
    return this.width * this.height
  }
}

module.exports = Square
