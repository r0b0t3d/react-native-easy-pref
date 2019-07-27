"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const { RNEasyPref } = react_native_1.NativeModules;
const getBoolean = (key, defaultVal) => __awaiter(this, void 0, void 0, function* () {
    if (react_native_1.Platform.OS === 'ios') {
        const value = yield RNEasyPref.get(key);
        if (value != undefined) {
            return value;
        }
        return defaultVal;
    }
    else {
        return RNEasyPref.getBoolean(key, defaultVal);
    }
});
const getString = (key, defaultVal) => __awaiter(this, void 0, void 0, function* () {
    if (react_native_1.Platform.OS === 'ios') {
        const value = yield RNEasyPref.get(key);
        if (value != undefined) {
            return value;
        }
        return defaultVal;
    }
    else {
        return RNEasyPref.getString(key, defaultVal);
    }
});
const getInt = (key, defaultVal) => __awaiter(this, void 0, void 0, function* () {
    if (react_native_1.Platform.OS === 'ios') {
        const value = yield RNEasyPref.get(key);
        if (value != undefined) {
            return value;
        }
        return defaultVal;
    }
    else {
        return RNEasyPref.getInt(key, parseInt(defaultVal));
    }
});
const setInt = (key, value) => __awaiter(this, void 0, void 0, function* () {
    if (react_native_1.Platform.OS === 'ios') {
        RNEasyPref.set(key, value);
    }
    else {
        RNEasyPref.setInt(key, value);
    }
});
const setString = (key, value) => __awaiter(this, void 0, void 0, function* () {
    if (react_native_1.Platform.OS === 'ios') {
        RNEasyPref.set(key, value);
    }
    else {
        RNEasyPref.setString(key, value);
    }
});
const setBoolean = (key, value) => __awaiter(this, void 0, void 0, function* () {
    if (react_native_1.Platform.OS === 'ios') {
        RNEasyPref.set(key, value);
    }
    else {
        RNEasyPref.setBoolean(key, value);
    }
});
exports.default = {
    getBoolean,
    getString,
    getInt,
    setInt,
    setString,
    setBoolean,
};
