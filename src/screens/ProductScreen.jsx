import React from 'react'
import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native'
import products from '../data/products';

export default function ProductScreen({navigation}) {
    return (
        <FlatList data={products} renderItem={({ item }) => {
            return <Pressable onPress={()=>navigation.navigate('Product Details',{
                productId:item.id
            })}  style={styles.imageContainer}>
                <Image  source={{ uri: item.image }}
                    style={styles.image}
                />
            </Pressable>
        }}
        numColumns={2}

        />
    )
}


const styles = StyleSheet.create({
    imageContainer: {
        width: '50%',
        padding: 1
    },
    image: {
        width: '100%',
        aspectRatio: 1
    }
});
