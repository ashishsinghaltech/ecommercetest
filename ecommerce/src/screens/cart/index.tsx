import React, { Fragment } from 'react';
import {
    Button,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { connect } from 'react-redux';

import { NavigationService } from '../../utils/navigationService';
import styles from './style';
import ICartProps from '../../model/interface/iCartProps';
import { decreaseQty, increaseQty } from '../../redux/actions';
import IProduct from '../../model/interface/iProduct';
import { getTestID } from '../../helpers';

interface QtyViewProps {
    item: IProduct
}

const QtyView = (props: QtyViewProps) => {
    const item = props.item
    return (
        <View style={styles.qtyContainer}>
            <TouchableOpacity onPress={() => decreaseQty(item)}  {...getTestID('decreaseQty')}>
                <Text style={styles.plusMinusBtn}>{'-'}</Text>
            </TouchableOpacity>
            <Text style={styles.plusMinusBtn} {...getTestID('quantity')}>{item.quantity}</Text>
            <TouchableOpacity onPress={() => increaseQty(item)}  {...getTestID('increaseQty')}>
                <Text style={styles.plusMinusBtn}>{'+'}</Text>
            </TouchableOpacity>
        </View>
    )
}

const CartScreen = (props: ICartProps) => {
    const item = props.cart

    return (
        <Fragment>
            <SafeAreaView style={styles.safeArea} />
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.back}>
                        <Button title='< Back' color={'white'} onPress={() => NavigationService.resetTo('ProductListingPage')} />
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.headerStyle}>{'Cart'}</Text>
                    </View>
                </View>
                <Text style={styles.itemName}>{item.name}</Text>
                <Image style={styles.image} source={{ uri: item.img }} {...getTestID('productImg')}/>
                <QtyView item={item} />
                <View style={{ alignItems: 'center', paddingTop: 20 }}>
                    <Text style={styles.price} {...getTestID('price')}>{`Price: $${item.price * (item.quantity ?? 1)}`}</Text>
                </View>
            </View>
        </Fragment>

    );
};

const mapStateToProps = (state: any) => ({
    cart: state.cart.cart
})

const mapDispatchToProps = (dispatch: any) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen)
