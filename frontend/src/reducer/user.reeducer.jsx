import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useMeQuery } from "../api/login.api";

export const getLoggedInUser = createAsyncThunk(
    "User/getLoggedInUser",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/me`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('_at')}`,
                },
            });
            if (!response.ok) throw new Error("Failed to fetch user data");
            const data = await response.json();
            return data.result; // Assuming the structure matches your API response
        } catch (exception) {
            console.error(exception);
            return rejectWithValue(exception.message);
        }
    }
)

const userSlicer = createSlice({
    name:'User',
    initialState:{
        loggedInUser:null
    },
    reducers:{
        setLoggedInUser:(state,action)=>{
            state.loggedInUser = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getLoggedInUser.fulfilled,(state,action)=>{
            state.loggedInUser= action.payload
        })
        builder.addCase(getLoggedInUser.rejected,(state)=>{
            state.loggedInUser = null
        })
    }
})

export const {setLoggedInUser} = userSlicer.actions

export default userSlicer.reducer