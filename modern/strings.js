/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

module.exports = {
  'escape': require('./utilities/escape'),
  'template': require('./utilities/template'),
  'templateSettings': require('./utilities/templateSettings'),
  'trim': require('./strings/trim'),
  'trimLeft': require('./strings/trimLeft'),
  'trimRight': require('./strings/trimRight'),
  'unescape': require('./utilities/unescape')
};
