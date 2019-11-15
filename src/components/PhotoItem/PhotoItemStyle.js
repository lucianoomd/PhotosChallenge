import { StyleSheet } from 'react-native';
import { COLORS } from '../../Constants';

const styles = StyleSheet.create({
    container: {
        width: 160,
        backgroundColor: COLORS.WHITE,
        marginBottom: 15,
        borderRadius: 10,
        margin: 4
    },
    header: {
        padding: 10,
        borderBottomColor: COLORS.LIGHT_GRAY,
        borderBottomWidth: 1,
    },
    imageContainer: {
        padding: 15,
    },
    image: {
        height: 140,
        resizeMode: 'contain',
    }
});

export default styles;