/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={styles.mainview}>
      <View style={styles.view1}>
        <Text style={styles.text1}>HEllo RN DEveloper</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text2}>HEllo RN </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff00ff',
  },
  view1: {
    backgroundColor: 'red',
  },
  view2: {
    backgroundColor: 'grey',
  },
  text1:{
    fontSize:20,
  },
  text2:{
    fontSize:40,
  }
});

export default App;
