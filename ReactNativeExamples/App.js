/**
 * Aplicación principal con mini-ejemplos de ReactNative para
 * experimentar con la tecnología y aprender a utilizarla.
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HardcodeListScreen from './HardcodeListScreen';
import ApiFlatListScreen from './ApiFlatListScreen';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estoy en este mensaje</Text>
      <Button
        style={styles.boton}
        title="Listas hardcodeadas"
        onPress={() => navigation.push('HARDCODED_LIST_SCREEN')}
      />
      <Button
        style={styles.boton}
        title="Lista con API"
        onPress={() => navigation.push('API_FLAT_LIST')}
      />
    </View>
  );
};

//Creamos el StackNavigation. Entre estas pantallas se podrá navegar.
const AppNavigator = createStackNavigator(
  {
    HOME: {
      screen: HomeScreen,
    },
    HARDCODED_LIST_SCREEN: {
      screen: HardcodeListScreen,
    },
    API_FLAT_LIST: {
      screen: ApiFlatListScreen,
    },
  },
  {initialRouteName: 'HOME'},
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 22,
  },
  title: {
    color: '#141823',
    fontSize: 22,
    margin: 5,
  },
  boton: {
    margin: 5,
    padding: 5,
  },
});

export default createAppContainer(AppNavigator);
