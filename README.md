
# react-native-easy-pref

## Getting started

`$ npm install react-native-easy-pref --save`

### Mostly automatic installation

`$ react-native link react-native-easy-pref`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-easy-pref` and add `RNEasyPref.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNEasyPref.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import vn.smartq.RNEasyPrefPackage;` to the imports at the top of the file
  - Add `new RNEasyPrefPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-easy-pref'
  	project(':react-native-easy-pref').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-easy-pref/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-easy-pref')
  	```


## Usage
```javascript
import RNEasyPref from 'react-native-easy-pref';

// TODO: What to do with the module?
RNEasyPref;
```
  