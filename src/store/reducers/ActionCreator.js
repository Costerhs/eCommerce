import { createAsyncThunk } from "@reduxjs/toolkit";
import { productApi } from "../../assets/api/api";

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