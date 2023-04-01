import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from "react-redux";
import { cartSlice } from "../store/reducer/cartSlice";

const CartListItem = ({ cartItem }) => {
  const dispatch = useDispatch()
  const increaseQuantity = () => {
    dispatch(cartSlice.actions.changeQuantity({ type: 'increment', productId: cartItem.product.id }))
  };

  const decreaseQuantity = () => {
    dispatch(cartSlice.actions.changeQuantity({ type: 'decrement', productId: cartItem.product.id }))

  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: cartItem.product.image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{cartItem.product.name}</Text>
        <Text style={styles.size}>Size {cartItem.size}</Text>

        <View style={styles.footer}>
          <Text>
            <Icon
              onPress={decreaseQuantity}
              name="minus-circle"
              size={24}
              color="gray"
            />
          </Text>

          <Text style={styles.quantity}>{cartItem.quantity}</Text>
          <Pressable
            onPress={increaseQuantity}
          >
            <Icon
              name="plus-circle"
              size={24}
              color="gray"
            />
          </Pressable>

          <Text style={styles.itemTotal}>${cartItem.product.price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: "40%",
    aspectRatio: 1,
  },
  name: {
    fontWeight: "500",
    fontSize: 18,
  },
  size: {
    fontSize: 16,
    color: "gray",
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: "bold",
    color: "gray",
  },
  footer: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
  },
  itemTotal: {
    fontSize: 16,
    marginLeft: "auto",
    fontWeight: "500",
  },
});

export default CartListItem;
