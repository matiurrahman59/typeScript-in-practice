"use strict";
exports.__esModule = true;
exports.getUser = exports.introduce = exports.fetchData = exports.printFormat = exports.format = exports.addStrings = exports.addNumbers = void 0;
// typing parameters
function addNumbers(a, b) {
    return a + b;
}
exports.addNumbers = addNumbers;
var addStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = 'tors'; }
    return "".concat(str1).concat(str2);
};
exports.addStrings = addStrings;
// union types
var format = function (title, param) {
    return "".concat(title, " ").concat(param);
};
exports.format = format;
// void returns
var printFormat = function (title, param) {
    console.log((0, exports.format)(title, param));
};
exports.printFormat = printFormat;
// Promise function
var fetchData = function (url) {
    return Promise.resolve("Data from ".concat(url));
};
exports.fetchData = fetchData;
// rest parameters
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(names.join(' '));
}
exports.introduce = introduce;
// typescript only enforces types at compile time not at run time
var getUser = function (user) { var _a, _b; return "".concat((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : 'first', " ").concat((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : 'last'); };
exports.getUser = getUser;
