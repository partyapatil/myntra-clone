import {configureStore, createSlice} from "@reduxjs/toolkit"
import itemSlice from "./itemsSlice";
import bagSlice from "./bagSlice";
import woslice from "./womenslice";

const myntraStore=configureStore({
    reducer:{
        items:itemSlice.reducer,
        bag:bagSlice.reducer,
        women:woslice.reducer,
    }
})


export default myntraStore;