import { createAsyncThunk } from "@reduxjs/toolkit";
import { productApi, userApi } from "../../assets/api/api";

export const getProducts = createAsyncThunk('products',
    async () => {
        const res = await productApi.getAllProduct()
        return res.data
    }
)

export const addFavorite = createAsyncThunk('favorite',
    async (id) => {
        const res = await productApi.postFavorite(id)
        console.log(res)
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
        const favArr = await productApi.getFavorites()
        let favArrIds = favArr.data.map(el => el.product)
        const productRes = await productApi.getAllProduct()
        let arr = productRes.data.filter(el => favArrIds.includes(el.id))

        return arr
    }
)

export const getUser = createAsyncThunk('user',
    async (id) => {
        const res = await userApi.getUserById(id)
        return res.data
    }
)