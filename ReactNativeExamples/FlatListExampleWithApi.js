/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

const hardData = [
  {
    id: 1,
    name: 'Luna Lunita',
    state: 1,
  },
  {
    id: 2,
    name: 'La flor más bonita',
    state: 1,
  },
  {
    id: 3,
    name: 'Luna Lunita',
    state: 1,
  },
  {
    id: 4,
    name: 'Brilla en la noche',
    state: 1,
  },
  {
    id: 5,
    name: 'y Brilla de día',
    state: 1,
  },
  {
    id: 6,
    name: 'Robocop',
    state: 1,
  },
  {
    id: 7,
    name: 'Diego Alejandro',
    state: 1,
  },
  {
    id: 8,
    name: 'Nicolás Maximiliano',
    state: 1,
  },
  {
    id: 9,
    name: 'Robocop',
    state: 1,
  },
  {
    id: 10,
    name: 'Diego Alejandro',
    state: 1,
  },
  {
    id: 12,
    name: 'Nicolás Maximiliano',
    state: 1,
  },
  {
    id: 13,
    name: 'Robocop',
    state: 1,
  },
  {
    id: 14,
    name: 'Diego Alejandro',
    state: 1,
  },
  {
    id: 15,
    name: 'Nicolás Maximiliano',
    state: 1,
  },
  {
    id: 16,
    name: 'Robocop',
    state: 1,
  },
];
const FlatListExampleWithApi: () => React$Node = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Text>Loading</Text>;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <Text style={styles.item}>
            {item.id} : {item.email}{' '}
          </Text>
        )}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});

export default FlatListExampleWithApi;
