import { StyleSheet } from 'react-native'
import { AppBaseColor } from '../../helpers/constant'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    headerContainer: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: AppBaseColor
    },
    header: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addToCartContainer: {
        flex: .5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerStyle: {
        color: 'white',
        fontSize: 20,
    },
    safeArea: {
        flex: 0,
        backgroundColor: AppBaseColor
    },
    listSeparator: {
        height: 10
    },
    listView: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 16
    },
    image: {
        height: 150,
        width: 150,
        aspectRatio: 1,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    rowContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        flex: 1
    }
});

export default styles;
