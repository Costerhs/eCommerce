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