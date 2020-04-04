import { NativeModules, Platform } from 'react-native';

const { RNEasyPref } = NativeModules;

const getBoolean = async (key: string, defaultVal: boolean) => {
    if (Platform.OS === 'ios') {
        const value = await RNEasyPref.get(key);
        if (value != undefined) {
            return value;
        }
        return defaultVal;
    } else {
        return RNEasyPref.getBoolean(key, defaultVal);
    }
};

const getString = async (key: string, defaultVal: string) => {
    if (Platform.OS === 'ios') {
        const value = await RNEasyPref.get(key);
        if (value != undefined) {
            return value;
        }
        return defaultVal;
    } else {
        return RNEasyPref.getString(key, defaultVal);
    }
};

const getInt = async (key: string, defaultVal: number) => {
    if (Platform.OS === 'ios') {
        const value = await RNEasyPref.get(key);
        if (value != undefined) {
            return value;
        }
        return defaultVal;
    } else {
        return RNEasyPref.getInt(key, defaultVal);
    }
};

const setInt = async (key: string, value: number) => {
    if (Platform.OS === 'ios') {
        RNEasyPref.set(key, value);
    } else {
        RNEasyPref.setInt(key, value);
    }
};

const setString = async (key: string, value: string) => {
    if (Platform.OS === 'ios') {
        RNEasyPref.set(key, value);
    } else {
        RNEasyPref.setString(key, value);
    }
};

const setBoolean = async (key: string, value: boolean) => {
    if (Platform.OS === 'ios') {
        RNEasyPref.set(key, value);
    } else {
        RNEasyPref.setBoolean(key, value);
    }
};

export default {
    getBoolean,
    getString,
    getInt,
    setInt,
    setString,
    setBoolean,
};
