/**
 * Aplicación principal con mini-ejemplos de ReactNative para 
 * experimentar con la tecnología y aprender a utilizarla.
 * 
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, Button } from 'react-native';

import FlatListExample from './FlatListExample';
import SectionListExample from './SectionListExample';
import FlatListExampleWithApi from './FlatListExampleWithApi';

const App: () => React$Node = () => {
	const [ modal, setModal ] = useState(false);
	const [ modalTitle, setModalTitle ] = useState('');
	const [ modalText, setModalText ] = useState('');
	const showModal = (title, text) => {
		setModal(true);
		setModalTitle(title);
		setModalText(text);
	};
	return (
		<View style={styles.container}>
			<Modal transparent={true} visible={modal}>
				<View style={styles.modalContent}>
					<Text style={styles.title}>{modalTitle}</Text>
					<Text style={styles.modalText}>{modalText}</Text>
					<Button title="Cerrar" onPress={() => setModal(!modal)} />
				</View>
			</Modal>
			<Text style={styles.title}>Flat List</Text>
			<FlatListExample onShowModal={showModal} />
			<Text style={styles.title}>Flat List con API</Text>
			<FlatListExampleWithApi onShowModal={showModal} />
			<Text style={styles.title}>Section List</Text>
			<SectionListExample onShowModal={showModal} />
		</View>
	);
};

const styles = StyleSheet.create({
	modalContent: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
		padding: 10
	},
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
	modalText: {
		color: '#141823',
		fontSize: 15,
		margin: 5
	}
});

export default App;
