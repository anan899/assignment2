import {createSlice} from "@reduxjs/toolkit";
import actions from "./Actions";
import axios from "axios";
import {addBeautyAsync, deleteBeautyAsync, getBeautyAsync, updateBeautyAsync} from "./thunk";


const REQUEST_STATE = {
    IDLE: 'IDLE',
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED'
};

const INITIAL_STATE = {
    beautyList: [],
    getBeauty: REQUEST_STATE.IDLE,
    error: null
};

const usersSlice = createSlice({
    name: 'users',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBeautyAsync.pending, (state) => {
                state.getBeauty = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getBeautyAsync.fulfilled, (state, action) => {
                state.getBeauty = REQUEST_STATE.FULFILLED;
                state.beautyList = action.payload;
            })
            .addCase(getBeautyAsync.rejected, (state, action) => {
                state.getBeauty = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });
    }
});

export default usersSlice.reducer;
