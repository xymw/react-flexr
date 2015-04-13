'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _Type = require('react');

var _shouldComponentUpdate = require('react/lib/shouldUpdateReactComponent');

var _shouldComponentUpdate2 = _interopRequireWildcard(_shouldComponentUpdate);

var canUseDOM = (function () {
  return typeof window !== 'undefined' && window.document && window.document.createElement && window.matchMedia;
})();

function match(props) {
  if (!canUseDOM) {
    return false;
  }
  var min = props.min;
  var max = props.max;

  var str = '(min-width: ' + min + 'px)';
  str += max ? ' and (max-width: ' + max + 'px)' : '';
  return window.matchMedia(str).matches;
}

var variables = {
  gutter: '1em'
};

exports['default'] = {
  variables: variables,

  media: {
    palm: match({ max: 680 }),
    lap: match({ min: 681, max: 959 }),
    portable: match({ max: 959 }),
    desk: match({ min: 960 })
  },

  staticProperties: {
    contextTypes: {
      gutter: _Type.PropTypes.string
    },

    childContextTypes: {
      gutter: _Type.PropTypes.string
    },

    propTypes: {
      gutter: _Type.PropTypes.string,
      flexCells: _Type.PropTypes.bool,
      align: _Type.PropTypes.oneOf(['top', 'center', 'bottom'])
    }
  },

  baseMethods: {
    getChildContext: function getChildContext() {
      var contextDefaults = {
        gutter: this.props.gutter || this.context.gutter || variables.gutter
      };
      return Object.assign(this.context, contextDefaults);
    }
  }
};
module.exports = exports['default'];