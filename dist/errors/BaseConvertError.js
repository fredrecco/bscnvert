"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseConvertError extends Error {
    constructor(message = "An error occurs when performing the conversion.") {
        super(message);
    }
}
exports.default = BaseConvertError;
