/**
 * FlatListExampleWithApi
 * Es un ejemplo de una FlatList que consume una API y le pone un
 * Spinner.
 *
 * Coponentes utilizados:
 * -FlatList, ActivityIndicator, useState, useEffect,
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';

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
    return <ActivityIndicator size="large" color="#000" />;
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
