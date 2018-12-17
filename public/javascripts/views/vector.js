const renderVector = ({ element, src, dest, stroke = '#666', fill = '#666' }) => {
  const context = element.getContext('2d')

  context.beginPath()
  context.lineWidth = 3
  context.lineCap = 'round'
  context.strokeStyle = stroke
  context.fillStyle = fill
  context.moveTo(src.x, src.y)
  context.lineTo(dest.x, dest.y)
  context.stroke()
  context.fill()
}

export default renderVector
