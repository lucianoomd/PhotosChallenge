import React from 'react';
import { View } from 'react-native';
import styles from './HomeStyle';
import Header from '../../components/Header/Header';
import PhotosList from '../../components/PhotosList/PhotosList';

const array = [1, 2, 3, 4, 5, 6, 7];

const home = () => {
  
  return (
    <View style={styles.container}>
        <Header text='PhotosChallenge' />
        <PhotosList photos={array} />
    </View>
  );
};

export default home;
