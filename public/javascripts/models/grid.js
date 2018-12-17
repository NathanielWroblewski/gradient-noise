import { HEIGHT, WIDTH, LENGTH, PADDING, SCALE } from '../constants/index.js'

const COLS = Math.floor((WIDTH - 2 * LENGTH) / (LENGTH + PADDING))
const ROWS = Math.floor((HEIGHT - 2 * LENGTH) / (LENGTH + PADDING))
const PAD = LENGTH + PADDING

class Grid {
  constructor ({ x = LENGTH, y = LENGTH, xpad = PAD, ypad = PAD, columns = COLS, rows = ROWS }) {
    this.x = x
    this.y = y
    this.xpad = xpad
    this.ypad = ypad
    this.columns = columns
    this.rows = rows
  }

  layout (fn) {
    const results = []

    for (let row = 0; row < this.rows; row++) {
      for (let column = 0; column < this.columns; column++) {
        const x = this.x + (column * this.xpad)
        const y = this.y + (row * this.ypad)

        results.push(fn({ x, y }))
      }
    }

    return results
  }
}

export default Grid
