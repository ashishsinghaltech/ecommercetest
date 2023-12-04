import React, { Fragment, useEffect, useState } from 'react';
import {
    Alert,
    Button,
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import styles from './style'
import IProduct from '../../model/interface/iProduct';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DeSelectItems, getTestID } from '../../helpers';
import { NavigationService } from '../../utils/navigationService';
import { connect } from 'react-redux';
import IProductListingProps from '../../model/interface/iProductListingProps';
import { addToCart } from '../../redux/actions';

const Seperator = () => (<View style={styles.listSeparator} />)

const NavigateToCart = (item: IProduct | undefined) => {
    if (item) {
        addToCart(item)
        NavigationService.navigateTo('CartScreen')
    } 
    else {
        Alert.alert('Please select an item')
    }
}

const ProductListing = (props: IProductListingProps) => {
    const productList = props.productList
    const [dataSource, setDataSource] = useState<IProduct[]>([])

    useEffect(() => {
        setDataSource(DeSelectItems(productList))
    }, [productList])

    const itemOnSelect = (index: number) => {
        const lData = DeSelectItems(dataSource)
        lData[index].isSelected = true
        setDataSource(lData)
    }

    const ListRow = (prop: any) => {
        const value: IProduct = prop.item
        const index: number = prop.index
        return (
            <TouchableOpacity
                style={{ ...styles.rowContainer, borderColor: value.colour.toLowerCase(), backgroundColor: value.isSelected ? 'lightblue' : 'white' }}
                onPress={() => itemOnSelect(prop.index)} {...getTestID(`product_${index}`)}>
                <Image style={styles.image} source={{ uri: value.img }}  {...getTestID(`productImg_${index}`)}/>
                <View style={{ justifyContent: 'space-between', flex: 1, paddingVertical: 20, paddingRight: 20 }}>
                    <Text {...getTestID(`productName_${index}`)}>{value.name}</Text>
                    <Text {...getTestID(`productPrice_${index}`)}>{`Price: $${value.price}`}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <Fragment>
            <SafeAreaView style={styles.safeArea} />
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.header}>
                        <Text style={styles.headerStyle}>{'Products'}</Text>
                    </View>
                    <View style={styles.addToCartContainer}>
                        <Button title='Cart' color={'white'} onPress={() => NavigateToCart(dataSource.find(item => item.isSelected === true))}  {...getTestID('addToCartBtn')} />
                    </View>
                </View>

                <FlatList
                    style={styles.listView}
                    ItemSeparatorComponent={Seperator}
                    data={dataSource}
                    renderItem={ListRow}
                    {...getTestID('productListing')}
                />
            </View>
        </Fragment>
    );
};

const mapStateToProps = (state: any) => ({
    productList: state.productList.productList
}
)
const mapDispatchToProps = (dispatch: any) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)
