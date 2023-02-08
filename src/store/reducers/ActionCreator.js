import { createAsyncThunk } from "@reduxjs/toolkit";
import { productApi, userApi } from "../../assets/api/api";

export const getProducts = createAsyncThunk('products',
    async () => {
        const res = await productApi.getAllProduct()
        const favArray = await productApi.getFavorites()
        let product = res.data
        product.map(el => {
            for (let elem of favArray.data) {
                if (el.id == elem.product) {
                    el['deleteId'] = elem.id;
                }
            }
        });
        return product
    }
)

export const addFavorite = createAsyncThunk('favorite',
    async (id) => {
        const res = await productApi.postFavorite(id)
        return res.data.id
    }
)

export const deleteFavorite = createAsyncThunk('favoriteDel',
    async (id) => {
        const res = await productApi.delFavorite(id)
        getProducts()
        return res.data.id
    }
)

export const getCategory = createAsyncThunk('category',
    async () => {
        const res = await productApi.getCategory()
        return res.data
    }
)

export const getProductsOfCategories = createAsyncThunk('productOfcategory',
    async (id) => {
        const res = await productApi.getProductsOfCategory(id)
        return res.data
    }
)

export const getFavoritsThunk = createAsyncThunk('getFavorites',
    async () => {
        const res = await productApi.getAllProduct()
        const favArray = await productApi.getFavorites()
        let product = res.data
        product.map(el => {
            for (let elem of favArray.data) {
                if (el.id == elem.product) {
                    el['deleteId'] = elem.id;
                }
            }
        });
        let filteredProduct = product.filter(el => el.deleteId)
        return filteredProduct
    }
)

export const getUser = createAsyncThunk('user',
    async (id) => {
        const res = await userApi.getUserById(id)
        return res.data
    }
)

/*async () => {
        const favArr = await productApi.getFavorites()
        let favArrIds = favArr.data.map(el => el.product)
        const productRes = await productApi.getAllProduct()
        let arr = productRes.data.filter(el => favArrIds.includes(el.id))
        debugger
        return arr
    }*/