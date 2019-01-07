
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

const set = async (key, value) => {
	RNEasyPref.set(key, value);
};

export default {
    getBoolean,
    set,
};
