import { StyleSheet } from 'react-native'
import { AppBaseColor } from '../../helpers/constant'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: AppBaseColor
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    back: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerStyle: {
        color: 'white',
        fontSize: 20,
    },
    image: {
        height: 300,
        width: 300,
        aspectRatio: 1,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    safeArea: {
        flex: 0,
        backgroundColor: AppBaseColor
    },
    itemName: { fontSize: 16, alignSelf: 'center', paddingVertical: 20 },
    qtyContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 40 },
    plusMinusBtn: { fontSize: 30, color: 'black', padding: 10 },
    price: { fontSize: 20, color: 'black', padding: 10 }
});

export default styles;
