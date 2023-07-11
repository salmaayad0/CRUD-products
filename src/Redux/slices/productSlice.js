import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    products: [],
    item: null,
    error: ''
}

export const getAllProducts = createAsyncThunk('getAllProducts', async (_, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.get('http://localhost:3005/products')
        return data

    } catch (error) {
        return rejectWithValue('There is an ERROR!');
    }
})

export const addProduct = createAsyncThunk('addProduct', async (product, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.post('http://localhost:3005/products', product);
        return data
    } catch (error) {
        return rejectWithValue('ERROR!... in add product')
    }
})

export const deleteProduct = createAsyncThunk('deleteProduct', async (id, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.delete(`http://localhost:3005/products/${id}`);
        return id
    } catch (error) {
        return rejectWithValue('ERROR!...in delete product')
    }
})

export const detailsProduct = createAsyncThunk('detailsProduct', async (id, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.get(`http://localhost:3005/products/${id}`);
        return data
    } catch (error) {
        return rejectWithValue('ERROR!...in details')
    }
})

export const updateProduct = createAsyncThunk('updateProduct', async ({id, obj}, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.put(`http://localhost:3005/products/${id}`, obj);
        return data
    } catch (error) {
        return rejectWithValue('ERROR!...in update product')
    }
})


export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        //get products
        builder.addCase(getAllProducts.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        })

        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        //add new product
        builder.addCase(addProduct.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.products.push(action.payload);
        })

        builder.addCase(addProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        //delete product
        builder.addCase(deleteProduct.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.products = state.products.filter(product => product.id != action.payload);
        })

        builder.addCase(deleteProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        //details product
        builder.addCase(detailsProduct.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(detailsProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.item = action.payload;
        })

        builder.addCase(detailsProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })


        //update product
        builder.addCase(updateProduct.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.item = action.payload;
        })

        builder.addCase(updateProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})


export default productSlice.reducer
