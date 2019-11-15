import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import TitleText from '../TitleText/TitleText';
import styles from './PhotoItemStyle';

const photoItem = ({ item }) => (
    <View style={styles.container}>
        <View style={styles.header}>
            <TitleText text={item.title} />
        </View>
        <View style={styles.imageContainer}>
            <Image style={styles.image}
                source={{uri: item.url}}
            />
        </View>
    </View>
);

photoItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }).isRequired,
};

export default photoItem;