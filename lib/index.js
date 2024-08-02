'use strict';

var React = require('react');

var Button = function (_a) {
    var label = _a.label, _b = _a.textColor, textColor = _b === void 0 ? "#020202" : _b;
    return React.createElement("div", { style: { color: textColor } },
        label,
        "Button");
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
