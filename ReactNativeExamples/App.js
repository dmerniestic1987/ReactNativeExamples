/**
 * Aplicación principal con mini-ejemplos de ReactNative para
 * experimentar con la tecnología y aprender a utilizarla.
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HardcodeListScreen from './HardcodeListScreen';
import ApiFlatListScreen from './ApiFlatListScreen';

const logo = require('./assets/img/logo.jpg');

const rockAndRoll = {
	id: 1,
	name: 'Patricio Rey y los Redonditos de Ricota',
	title: 'Jamaica'
};

const BotonSuperior = (titulo, msgAlert) => <Button title={titulo} onPress={() => alert(msgAlert)} />;
const HeaderTitle = () => <Image source={logo} style={styles.logo} />;

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Estoy en este mensaje</Text>
			<Button
				style={styles.boton}
				title="Listas hardcodeadas"
				onPress={() =>
					navigation.navigate('HARDCODED_LIST_SCREEN', {
						infectadura: rockAndRoll
					})}
			/>
			<Button style={styles.boton} title="Lista con API" onPress={() => navigation.push('API_FLAT_LIST')} />
		</View>
	);
};

HomeScreen.navigationOptions = {
	title: 'Inicio'
};

HardcodeListScreen.navigationOptions = {
	headerTitle: <HeaderTitle />,
	headerRight: BotonSuperior('Boton Derecho', 'Usted hizo click en el botón derecho'),
	headerLeft: BotonSuperior('Boton Izquierdo', 'Usted hizo click en el botón izquierdo')
};

ApiFlatListScreen.navigationOptions = {
	title: 'Lista con API'
};

//Creamos el StackNavigation. Entre estas pantallas se podrá navegar.
const AppNavigator = createStackNavigator(
	{
		HOME: {
			screen: HomeScreen
		},
		HARDCODED_LIST_SCREEN: {
			screen: HardcodeListScreen,
			headerStyle: {
				backgroundColor: '#c2a5f2'
			},
			headerTintColor: '#fff'
		},
		API_FLAT_LIST: {
			screen: ApiFlatListScreen
		}
	},
	{ initialRouteName: 'HOME' }
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: 22
	},
	title: {
		color: '#141823',
		fontSize: 22,
		margin: 5
	},
	boton: {
		margin: 5,
		padding: 5
	},
	logo: {
		height: 50,
		width: 75
	}
});

export default createAppContainer(AppNavigator);
