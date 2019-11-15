import { StyleSheet } from 'react-native';
import { COLORS } from '../../Constants';

const styles = StyleSheet.create({
    container: {
        width: 120,
        backgroundColor: COLORS.WHITE,
        marginBottom: 4,
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
        height: 80,
        resizeMode: 'contain',
    }
});

export default styles;