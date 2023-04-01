import React, { useMemo } from 'react'
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { useDispatch } from 'react-redux';
import products from '../data/products'
import { cartSlice } from '../store/reducer/cartSlice';

export default function ProductDetailsScreen({ route, navigation }) {
    const dispatch  = useDispatch()
    const product = useMemo(() => {
        return products.find((product => product.id === route.params.productId))
    }, [route.params.productId]);
    const { width } = useWindowDimensions()

    const pressHandler = () => {
        dispatch(cartSlice.actions.addToCart(product)) 
    }
    return (
        <View>
            <ScrollView>

                <FlatList
                    data={product.images}
                    renderItem={({ item }) => {
                        return <Image source={{ uri: item }}
                            style={{ width, aspectRatio: 1 }}
                        />
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                />

                <View style={{ padding: 10 }}>
                    <Text style={styles.title}>{product.name}</Text>
                    <Text style={styles.price}>${product.price}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>

            {/* add to cart  */}

            <Pressable onPress={pressHandler} style={styles.button}>
                <Text style={styles.buttonText}>Add To Cart</Text>
            </Pressable>
        </View>

    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: '500',
        marginVertical: 10
    },
    price: {
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 1.5
    },
    description: {
        fontSize: 18,
        marginVertical: 10,
        lineHeight: 30,
        fontWeight: '300',
    },
    button: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 30,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 100,
        alignItems: 'center'

    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 500
    }
})