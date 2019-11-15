import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import TitleText from '../TitleText/TitleText';
import styles from './PhotoItemStyle';

const photoItem = ({ item }) => (
    <View style={styles.container}>
        <View style={styles.header}>
            <TitleText text="accusamus beatae ad facilis cum similique qui sunt" />
        </View>
        <View style={styles.imageContainer}>
            <Image style={styles.image}
                source={{uri: 'https://via.placeholder.com/600/92c952'}}
            />
        </View>
    </View>
    // accusamus beatae ad facilis cum similique qui sunt
    // https://via.placeholder.com/600/92c952
);

photoItem.propTypes = {
    item: PropTypes.string.isRequired,
};

export default photoItem;