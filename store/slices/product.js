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
      removecart: (state, action) => { 
            state.cart = state.cart.filter((item, index) => index !== action.payload);
        },
    }

});
export let {addtocart,removecart} = productWalaSlice.actions
