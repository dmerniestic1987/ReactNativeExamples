/**
 * Aplicación principal con mini-ejemplos de ReactNative para
 * experimentar con la tecnología y aprender a utilizarla.
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, Modal, Button} from 'react-native';

import FlatListExample from './FlatListExample';
import SectionListExample from './SectionListExample';

const HardcodeListScreen: () => React$Node = ({navigation}) => {
  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');
  const [countShowModal, setCountShowModal] = useState(0);
  const showModal = (title, text) => {
    setModal(true);
    setModalTitle(title);
    setModalText(text);
    setCountShowModal(countShowModal + 1);
  };
  const rockAndRolla = navigation.getParam('infectadura', {});
  console.log(rockAndRolla);
  return (
    <View style={styles.container}>
      <Modal transparent={false} visible={modal}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{modalTitle}</Text>
          <Text style={styles.modalText}>{modalText}</Text>
          <Text style={styles.modalText}>
            {'Abiertos: '.concat(String(countShowModal))}
          </Text>
          <Button title="Cerrar" onPress={() => setModal(!modal)} />
        </View>
      </Modal>
      <Text style={styles.title}>Flat List</Text>
      <FlatListExample onShowModal={showModal} />
      <Text style={styles.title}>Section List</Text>
      <SectionListExample onShowModal={showModal} />
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
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
  modalText: {
    color: '#141823',
    fontSize: 15,
    margin: 5,
  },
});

export default HardcodeListScreen;
