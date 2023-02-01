import { createSlice } from "@reduxjs/toolkit"
import { addFavorite, getProducts } from "./ActionCreator"

const initialState = {
    load: false,
    products: []
}

export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducer: {
        getProducts(state, action) {

        }
    },
    extraReducers: {
        [getProducts.fulfilled.type]: (state, action) => {
            state.load = false,
                state.products = action.payload
        },
        [getProducts.pending.type]: (state, action) => {
            state.load = true
        },
        [addFavorite.fulfilled.type]: (state, action) => {

        },
        [addFavorite.pending.type]: (state, action) => {

        },
    }
}
)
export default ProductsSlice.reducer