'use strict';

require('babel-polyfill');

var _canvasMap = require('./canvas-map');

var _canvasMap2 = _interopRequireDefault(_canvasMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var map = (0, _canvasMap2.default)({
    textContainer: document.querySelector('.text'),
    mapSrc: 'img/map.svg',
    trailVisitedColor: '#47DBB4',
    fontPresentColor: '#5D5C56'
}).appendTo('.container');

//# sourceMappingURL=index-compiled.js.map