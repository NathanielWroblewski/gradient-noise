export const degToRad = degrees => degrees * Math.PI / 180

export const polarToCartesian = (r, theta) => {
  const x = r * Math.cos(degToRad(theta))
  const y = r * Math.sin(degToRad(theta))

  return [x, y]
}

// linear extrapolation
export const lerp = (a, b, t) => (1 - t) * a + t * b
export const fade = t => t * t * t * (t * (t * 6 - 15) + 10)
