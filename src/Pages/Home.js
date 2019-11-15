import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';

const home = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}>
        <Text style={styles.text}>
          Read the docs to discover what to do next:
        </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  text: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
  },
});

export default home;
