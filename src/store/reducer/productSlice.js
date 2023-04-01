import { createSlice } from "@reduxjs/toolkit"

let initialState={
    products:[],
}
export const productSlice =createSlice({
    name:"products",
    initialState,
    reducers:{}
})