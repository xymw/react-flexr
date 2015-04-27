import React from 'react/addons';
import assign from 'react/lib/Object.assign';

function sanitizeStyles(arr) {
  return assign.apply(null, [{}].concat( arr ) );
}

function extractStyles(component) {
  const { styles } = React.addons.TestUtils.renderIntoDocument( component );
  return sanitizeStyles(styles);
}

export default {
  sanitizeStyles, extractStyles
};