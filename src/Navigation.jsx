import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductScreen from './screens/ProductScreen'
import ProductDetailsScreen from './screens/ProductDetailsScreen'
import ShoopingCart from './screens/ShoopingCart'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Pressable, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { selectedCartItems } from './store/reducer/cartSlice'


const Stack = createNativeStackNavigator()

export default function Navigation() {
  const selectedCartItemsVal = useSelector(selectedCartItems)
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{contentStyle:{backgroundColor:'white'}}}
      >
        <Stack.Screen name='Products' component={ProductScreen}
          options={({ navigation}) => ({
            headerRight: () => {
              return <Pressable onPress={() => navigation.navigate('Cart')} style={{ flexDirection: 'row' }}>
                <Text>
                  <Icon name='shopping-cart' size={18} color='gray' />
                </Text>
                <Text style={{ marginLeft: 5, fontWeight: 500 }}>{selectedCartItemsVal}</Text>
              </Pressable>
            }

          })}
        />
        <Stack.Screen name='Product Details' component={ProductDetailsScreen} options={{
          presentation: 'modal'
        }} />
        <Stack.Screen name='Cart' component={ShoopingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
