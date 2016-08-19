"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = times;
function times(n, f) {
    for (var i = 0; i < n; i++) {
        f.call(this, i);
    }
}

//# sourceMappingURL=times-compiled.js.map