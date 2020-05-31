/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text, SectionList, ImageBackground, TouchableWithoutFeedback } from 'react-native';

const sections = [
	{
		title: 'Saiyajines',
		data: [
			{
				key: 1,
				name: 'Gokú'
			},
			{
				key: 2,
				name: 'Vegeta'
			},
			{
				key: 3,
				name: 'Gohan'
			},
			{
				key: 4,
				name: 'Broly'
			}
		]
	},
	{
		title: 'Namekianos',
		data: [
			{
				key: 5,
				name: 'Picoro Dai Makú'
			},
			{
				key: 6,
				name: 'Kami Sama'
			},
			{
				key: 7,
				name: 'Pícoro'
			},
			{
				key: 8,
				name: 'Dende'
			}
		]
	},
	{
		title: 'Terrícolas',
		data: [
			{
				key: 9,
				name: 'Pinche Yamchu'
			},
			{
				key: 10,
				name: 'Krilin'
			},
			{
				key: 11,
				name: 'Bulma'
			},
			{
				key: 12,
				name: 'Yayirobe'
			}
		]
	}
];
const SectionListExample: () => React$Node = (props) => {
	const onShowModal = props.onShowModal;
	return (
		<View style={styles.container}>
			<ImageBackground
				source={{
					uri: 'https://dragon-ball-api.herokuapp.com/images/Vegeta.jpg'
				}}
				style={styles.background}
			>
				<View style={styles.overlayBackground}>
					<SectionList
						sections={sections}
						renderItem={({ item }) => (
							<TouchableWithoutFeedback onPress={() => onShowModal(String(item.key), item.name)}>
								<Text style={styles.item}>
									{item.key} : {item.name}{' '}
								</Text>
							</TouchableWithoutFeedback>
						)}
						renderSectionHeader={({ section }) => <Text style={styles.itemHeader}>{section.title}</Text>}
					/>
				</View>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ad2a79',
		alignItems: 'stretch',
		justifyContent: 'center'
	},
	background: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center'
	},
	overlayBackground: {
		backgroundColor: 'rgba(255,255,255,0.5)'
	},
	item: {
		padding: 10,
		fontSize: 15,
		height: 45,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1
	},
	itemHeader: {
		fontSize: 20,
		color: '#f00'
	}
});

export default SectionListExample;
