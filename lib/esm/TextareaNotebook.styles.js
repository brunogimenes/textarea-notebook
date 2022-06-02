var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var defaultValues = {
    verticalLineColor: "#d0a090",
    lineColor: "#fcf9cc",
    lineBorderColor: "#ccd",
    verticalLineWidth: 2,
    fontSize: 18,
    marginLeft: 50,
};
var gradientBuilder = function (verticalLineColor, lineColor, lineBorderColor, lineHeight) {
    return "linear-gradient(90deg, ".concat(verticalLineColor, ", ").concat(verticalLineColor, "), linear-gradient(   ").concat(lineColor, " ").concat(lineHeight - 2, "px, ").concat(lineBorderColor, " 2px)");
};
export var buildTextAreaStyle = function (params, extraStyles) {
    if (extraStyles === void 0) { extraStyles = {}; }
    var paramsWithDefaults = __assign(__assign({}, defaultValues), params);
    var lineHeight = paramsWithDefaults.fontSize * 1.5;
    var backgroundImage = gradientBuilder(paramsWithDefaults.verticalLineColor, paramsWithDefaults.lineColor, paramsWithDefaults.lineBorderColor, lineHeight);
    return __assign({ backgroundImage: backgroundImage, backgroundSize: "".concat(paramsWithDefaults.verticalLineWidth, "px 100%, 100% ").concat(lineHeight, "px"), backgroundPosition: "".concat(paramsWithDefaults.marginLeft - 10, "px top, left 0px"), backgroundRepeat: "no-repeat, repeat", backgroundAttachment: "local", lineHeight: "".concat(lineHeight, "px"), paddingLeft: paramsWithDefaults.marginLeft + paramsWithDefaults.verticalLineWidth, fontSize: paramsWithDefaults.fontSize, resize: "none", border: "none" }, extraStyles);
};
