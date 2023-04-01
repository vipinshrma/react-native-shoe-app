import { createSelector, createSlice } from "@reduxjs/toolkit"

let initialState={
    cart:[],
    deliveryFee:15,
    freeDeliveryFrom:200,
    subtotal:0
}
export const cartSlice =createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const newProduct = action.payload;
            let cartProduct = state.cart.find((cart=>cart.product.id === newProduct.id))
            if(cartProduct){
                cartProduct.quantity = cartProduct.quantity + 1
            }else{
                state.cart.push({product:newProduct , quantity:1})
            }
        },
        changeQuantity:(state,action)=>{
            const {type,productId} = action.payload;
            if(!productId) return;
            let cartProduct = state.cart.find((cart=>cart.product.id === productId))

            if(type==='increment'){
                cartProduct.quantity = cartProduct.quantity + 1
            }
            if(type==='decrement'){
                if(cartProduct.quantity <=1){
                    cartProduct.quantity = 0
                    state.cart = state.cart.filter((cart=>cart.product.id !==productId))
                    return;
                }
                cartProduct.quantity = cartProduct.quantity -1
                
            }
            
        }
    }
})

export const selectedCartItems = (state)=>state.cart.cart.length

export const cartItems = (state)=>state.cart


export const selectSubtotal = (state)=>state.cart.cart.reduce((acc,cur)=>acc= acc + cur.product.price * cur.quantity,0)


export const selectDeliveryFeePrice = createSelector(cartItems,selectSubtotal,(cart,subtotal)=>(subtotal > cart.freeDeliveryFrom ? 0 : cart.deliveryFee))

export const totalPrice = createSelector(selectSubtotal,selectDeliveryFeePrice,(subtotal,deliveryFee)=>subtotal + deliveryFee)
