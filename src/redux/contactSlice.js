import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, collection, db } from '../firebase/firebase';

export const submitForm = createAsyncThunk('contact/submitForm', async (contactInfo, { rejectWithValue }) => {
    try {
        await addDoc(collection(db, 'contact'), {
            name: contactInfo.name,
            email: contactInfo.email,
            subject: contactInfo.subject,
            message: contactInfo.message,
        })
    } catch (error) {
        return rejectWithValue(error.message);
    }
})


const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(submitForm.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(submitForm.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(submitForm.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default contactSlice.reducer;