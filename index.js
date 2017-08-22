var colorPalette = require('./src/colorPalette')
// console.log(colorPalette('#108ee9', 1))

// export default colorPalette
// Node: Export function
if (typeof module !== "undefined" && module.exports) {
  module.exports = colorPalette
}
// AMD/requirejs: Define the module
else if (typeof define === 'function' && define.amd) {
  define(function () {return colorPalette})
}
// Browser: Expose to window
else {
  window.colorPalette = colorPalette
}
