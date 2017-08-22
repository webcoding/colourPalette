import tinyColor from 'tinycolor2'
import bezierEasing from './bezierEasing'

const colorEasing = bezierEasing(0.26, 0.09, 0.37, 0.18)

// We create a very complex algorithm which take the place of original tint/shade color system
// to make sure no one can understand it 👻
// and create an entire color palette magicly by inputing just a single primary color.
// We are using bezier-curve easing function and some color manipulations like tint/shade/darken/spin

var warmDark = 0.5 // warm color darken radio
var warmRotate = -26 // warm color rotate degree
var coldDark = 0.55 // cold color darken radio
var coldRotate = 10 // cold color rotate degree
var getShadeColor = function (c) {
  var shadeColor = tinyColor(c)
  // warm and cold color will darken in different radio, and rotate in different degree
  // warmer color
  if (shadeColor.toRgb().r > shadeColor.toRgb().b) {
    return shadeColor.darken(shadeColor.toHsl().l * warmDark * 100).spin(warmRotate).toHexString()
  }
  // colder color
  return shadeColor.darken(shadeColor.toHsl().l * coldDark * 100).spin(coldRotate).toHexString()
}
var primaryEasing = colorEasing(0.6)
const colorPalette = function (color, index) {
  var currentEasing = colorEasing(index * 0.1)
  // return light colors after tint
  if (index <= 6) {
    return tinyColor.mix(
      '#ffffff',
      color,
      currentEasing * 100 / primaryEasing
    ).toHexString()
  }
  return tinyColor.mix(
    getShadeColor(color),
    color,
    (1 - (currentEasing - primaryEasing) / (1 - primaryEasing)) * 100
  ).toHexString()
}

export default colorPalette
