import { createSlice } from "@reduxjs/toolkit";

export let productWalaSlice=createSlice({
    name:"product-slice",
    initialState:{
        cart: []
    },
    reducers:{
        addtocart:(state,action)=>{
            state.cart.push(action.payload)

        },
        removecart:(state,action)=>{
            state.cart.splice(action.payload,1)

        },
    }

});
export let {addtocart,removecart} = productWalaSlice.actions