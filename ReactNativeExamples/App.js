/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import FlatListExample from './FlatListExample';
import SectionListExample from './SectionListExample';
import FlatListExampleWithApi from './FlatListExampleWithApi';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flat List</Text>
      <FlatListExample />
      <Text style={styles.title}>Flat List con API</Text>
      <FlatListExampleWithApi />
      <Text style={styles.title}>Section List</Text>
      <SectionListExample />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 22,
  },
  title: {
    color: '#141823',
    fontSize: 22,
  },
});

export default App;
