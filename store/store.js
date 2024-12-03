import { configureStore } from "@reduxjs/toolkit";
import { productWalaSlice } from "./slices/product";

export let meraStore= configureStore({
    reducer:productWalaSlice.reducer,
})