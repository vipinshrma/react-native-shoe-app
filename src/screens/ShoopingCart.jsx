import React from 'react'
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import CartListItem from '../components/CartListItem'
import { selectDeliveryFeePrice, selectSubtotal, totalPrice } from '../store/reducer/cartSlice'
// import cart from '../data/cart'

export default function ShoopingCart() {
    const {cart} = useSelector(state=>state.cart)
    const subtotalVal = useSelector(selectSubtotal)
    const deliveryFee = useSelector(selectDeliveryFeePrice)
    const totalProductPrice  = useSelector(totalPrice)

    return (
        <>
            <View>
                <FlatList
                    data={cart}
                    renderItem={({ item }) => {
                        return <CartListItem cartItem={item} />
                    }}
                    ListFooterComponent={() => {
                        return   <View style={styles.totalsContainer}>
                            <View style={styles.row}>
                                <Text style={styles.text}>Subtotal</Text>
                                <Text style={styles.text}>{subtotalVal} US$</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.text}>Delivery</Text>
                                <Text style={styles.text}>{deliveryFee} US$</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.textBold}>Total</Text>
                                <Text style={styles.textBold}>{totalProductPrice} US$</Text>
                            </View>
                        </View>
                    }}
                />
            </View>
            <Pressable onPress={""} style={styles.button}>
                <Text style={styles.buttonText}>Checkout</Text>
            </Pressable>
        </>

    )
}

const styles = StyleSheet.create({
    totalsContainer: {
        margin: 20,
        padding: 10,
        borderColor: 'gainsboro',
        borderTopWidth: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2
    },
    text: {
        fontSize: 16,
        color: 'gray'
    },
    textBold: {
        fontSize: 16,
        fontWeight: '500'
    },
    button:{
        position:'absolute',
        backgroundColor:'black',
        bottom:30,
        width:'90%',
        alignSelf:'center',
        padding:20,
        borderRadius:100,
        alignItems:'center'

    },
    buttonText:{
        color:'white',
        fontSize:18,
        fontWeight:500
    }
})