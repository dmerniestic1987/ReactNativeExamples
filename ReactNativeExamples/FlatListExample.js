/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableWithoutFeedback } from 'react-native';

const hardData = [
	{
		key: 1,
		name: 'Luna Lunita',
		state: 1
	},
	{
		key: 2,
		name: 'El satélite más bonito',
		state: 1
	},
	{
		key: 3,
		name: 'Luna Lunita',
		state: 1
	},
	{
		key: 4,
		name: 'Brilla en la noche',
		state: 1
	},
	{
		key: 5,
		name: 'y Brilla de día',
		state: 1
	},
	{
		key: 6,
		name: 'Robocop',
		state: 1
	},
	{
		key: 7,
		name: 'Diego Alejandro',
		state: 1
	},
	{
		key: 8,
		name: 'Nicolás Maximiliano',
		state: 1
	},
	{
		key: 9,
		name: 'Robocop',
		state: 1
	},
	{
		key: 10,
		name: 'Diego Alejandro',
		state: 1
	},
	{
		key: 12,
		name: 'Nicolás Maximiliano',
		state: 1
	},
	{
		key: 13,
		name: 'Robocop',
		state: 1
	},
	{
		key: 14,
		name: 'Diego Alejandro',
		state: 1
	},
	{
		key: 15,
		name: 'Nicolás Maximiliano',
		state: 1
	},
	{
		key: 16,
		name: 'Robocop',
		state: 1
	}
];
const FlatListExample: () => React$Node = (props) => {
	const onShowModal = props.onShowModal;
	return (
		<View style={styles.container}>
			<FlatList
				data={hardData}
				renderItem={({ item }) => (
					<TouchableWithoutFeedback onPress={() => onShowModal(String(item.key), item.name)}>
						<Text style={styles.item}>
							{item.key} : {item.name}
						</Text>
					</TouchableWithoutFeedback>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ff0',
		alignItems: 'center',
		justifyContent: 'center'
	},
	item: {
		padding: 10,
		fontSize: 20,
		height: 50,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1
	}
});

export default FlatListExample;
