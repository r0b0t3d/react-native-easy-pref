
import { NativeModules, Platform } from 'react-native';

const { RNEasyPref } = NativeModules;

const getBoolean = async (key: string, defaultVal: any) => {
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
}

const setString = async (key, value) => {
    if (Platform.OS === 'ios') {
        RNEasyPref.set(key, value);
    } else {
        RNEasyPref.setString(key, value);
    }
};

const setBoolean = async (key, value) => {
    if (Platform.OS === 'ios') {
        RNEasyPref.set(key, value);
    } else {
        RNEasyPref.setBoolean(key, value);
    }
};

export default {
    getBoolean,
    getString,
    setString,
    setBoolean,
};
