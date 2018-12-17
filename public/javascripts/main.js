import Grid from './models/grid.js'
import Vector from './models/vector.js'
import Perlin from './models/perlin.js'
import renderVector from './views/vector.js'
import clear from './views/clear.js'
import { HEIGHT, WIDTH, LENGTH, PADDING, SCALE } from './constants/index.js'
import { polarToCartesian } from './utilities/index.js'

const element = document.querySelector('.noise')
const vectors = new Grid({}).layout(({ x, y }) => new Vector({ x, y }))
const perlin = new Perlin()
let time = 0

const step = () => {
  clear({ element })

  vectors.forEach(src => {
    const theta = perlin.noise({ ...src.divide(SCALE), z: time }) * 360
    const [x, y] = polarToCartesian(LENGTH, theta)
    const dest = new Vector({ x, y }).add(src)

    renderVector({ element, src, dest })
  })

  time += 0.01

  window.requestAnimationFrame(step)
}

step()
