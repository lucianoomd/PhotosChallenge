import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import PhotoItem from '../PhotoItem/PhotoItem';
import styles from './PhotosListStyle';

const photosList = ({ photos }) => {

    const keyExtractor = (item, index) => String(index);

    return (

        <FlatList 
            style={styles.container}
            contentContainerStyle={styles.listContainer}
            data={photos}
            renderItem={({item}) => <PhotoItem item={item} />}
            numColumns={2}
            keyExtractor={keyExtractor}
        />
    )
}

photosList.propTypes = {
    photos: PropTypes.array.isRequired,
};

export default photosList;