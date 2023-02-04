import { createSlice } from "@reduxjs/toolkit"
import { addFavorite, getCategory, getProductsOfCategories, getProducts, getFavoritsThunk } from "./ActionCreator"

const initialState = {
    load: false,
    products: [],
    category: [],
    productsOfCategory: [],
    favoritesProduct: []
}

export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducer: {
    },
    extraReducers: {
        [getProducts.fulfilled.type]: (state, action) => {
            state.load = false,
                state.products = action.payload
        },
        [getProducts.pending.type]: (state, action) => {
            state.load = true
        },
        [getCategory.fulfilled.type]: (state, action) => {
            state.category = action.payload
        },
        [getProductsOfCategories.fulfilled.type]: (state, action) => {
            state.productsOfCategory = action.payload
        },
        [getFavoritsThunk.fulfilled.type]: (state, action) => {
            state.favoritesProduct = action.payload
            state.load = false
        },
        [getFavoritsThunk.pending.type]: (state, action) => {
            // state.favoritesProduct = action.payload
            state.load = true
        },
    }
}
)
export default ProductsSlice.reducer