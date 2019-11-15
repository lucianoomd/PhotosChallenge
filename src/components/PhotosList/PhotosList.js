import React from 'react';
import { FlatList, Dimensions, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import PhotoItem from '../PhotoItem/PhotoItem';
import styles from './PhotosListStyle';

const photosList = ({ photos, loading, updateList }) => {

    const keyExtractor = (item, index) => String(index);
    const screenWidth = Math.round(Dimensions.get('window').width);
    const numColumns = Math.floor((screenWidth - 20) / 120);

    return (
        <FlatList
            refreshControl={ 
                <RefreshControl refreshing={loading} onRefresh={updateList} />
            }
            style={styles.container}
            contentContainerStyle={styles.listContainer}
            data={photos}
            renderItem={({item}) => <PhotoItem item={item} />}
            numColumns={numColumns}
            keyExtractor={keyExtractor}
        />
    )
}

photosList.propTypes = {
    photos: PropTypes.array.isRequired,
};

export default photosList;