/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var slice = require('../arrays/slice'),
    values = require('../objects/values');

/**
 * Converts the `collection` to an array.
 *
 * @static
 * @memberOf _
 * @category Collections
 * @param {Array|Object|string} collection The collection to convert.
 * @returns {Array} Returns the new converted array.
 * @example
 *
 * (function() { return _.toArray(arguments).slice(1); })(1, 2, 3, 4);
 * // => [2, 3, 4]
 */
function toArray(collection) {
  var length = collection && collection.length;
  if (typeof length == 'number' && length > -1) {
    return slice(collection);
  }
  return values(collection);
}

module.exports = toArray;
