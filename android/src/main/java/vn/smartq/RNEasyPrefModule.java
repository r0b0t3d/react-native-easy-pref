
package vn.smartq;

import android.content.Context;
import android.content.SharedPreferences;
import android.widget.Toast;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class RNEasyPrefModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;
    private SharedPreferences mSharedPreferences;

    public RNEasyPrefModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
        mSharedPreferences = getReactApplicationContext().getSharedPreferences("RNPreference", Context.MODE_PRIVATE);
    }

    @Override
    public String getName() {
        return "RNEasyPref";
    }

    @ReactMethod
    public void show(String message) {
        Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_LONG).show();
    }

    @ReactMethod
    public void set(String key, String data) {
        SharedPreferences.Editor editor = getEditor();
        editor.putString(key, data);
        editor.apply();
    }

    @ReactMethod
    public void set(String key, boolean data) {
        SharedPreferences.Editor editor = getEditor();
        editor.putBoolean(key, data);
        editor.apply();
    }

    @ReactMethod
    public void set(String key, int data) {
        SharedPreferences.Editor editor = getEditor();
        editor.putInt(key, data);
        editor.apply();
    }

    @ReactMethod
    public void set(String key, float data) {
        SharedPreferences.Editor editor = getEditor();
        editor.putFloat(key, data);
        editor.apply();
    }

    @ReactMethod
    public void getString(String key, String defVal, Promise promise) {
        promise.resolve(mSharedPreferences.getString(key, defVal));
    }

    @ReactMethod
    public void getBoolean(String key, boolean defVal, Promise promise) {
        promise.resolve(mSharedPreferences.getBoolean(key, defVal));
    }

    @ReactMethod
    public void getInt(String key, int defVal, Promise promise) {
        promise.resolve(mSharedPreferences.getInt(key, defVal));
    }

    @ReactMethod
    public void getFloat(String key, float defVal, Promise promise) {
        promise.resolve(mSharedPreferences.getFloat(key, defVal));
    }

    private SharedPreferences.Editor getEditor() {
        return mSharedPreferences.edit();
    }
}