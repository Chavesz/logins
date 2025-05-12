// polyfills.js

// Polyfill para Object.hasOwn (Node < 18)
if (typeof Object.hasOwn !== 'function') {
  Object.hasOwn = (obj, prop) =>
    Object.prototype.hasOwnProperty.call(obj, prop);
}

// Polyfill para String.prototype.replaceAll (Node < 15)
if (typeof String.prototype.replaceAll !== 'function') {
  String.prototype.replaceAll = function(search, replacement) {
    return this.split(search).join(replacement);
  };
}
