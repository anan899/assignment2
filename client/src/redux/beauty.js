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
    deleteBeauty: REQUEST_STATE.IDLE,
    updateBeauty: REQUEST_STATE.IDLE,
    error: null
};

const beautySlice = createSlice({
    name: 'beauty',
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
            })
            .addCase(deleteBeautyAsync.pending, (state) => {
                state.deleteBeauty = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(deleteBeautyAsync.fulfilled, (state, action) => {
                state.deleteBeauty = REQUEST_STATE.FULFILLED;
                // state.beautyList = action.payload;
            })
            .addCase(deleteBeautyAsync.rejected, (state, action) => {
                state.deleteBeauty = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(updateBeautyAsync.pending, (state) => {
                state.updateBeauty = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(updateBeautyAsync.fulfilled, (state, action) => {
                state.updateBeauty = REQUEST_STATE.FULFILLED;
                let updated = state.beautyList.findIndex(beauty=>beauty.id === action.payload.beauty.id);
                state.beautyList[updated] = action.payload.beauty;
                // state.beautyList = action.payload;
            })
            .addCase(updateBeautyAsync.rejected, (state, action) => {
                state.updateBeauty = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });
    }
});

export default beautySlice.reducer;
