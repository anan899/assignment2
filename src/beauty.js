import {createSlice} from "@reduxjs/toolkit";
import {BeautyData} from "./preload";

export const beautySlice = createSlice({
    name: "beauty",
    initialState: { value: BeautyData },
    reducers: {
        addBeauty: (state, action) => {
            state.value.push(action.payload);
        },

        deleteB: (state, action) => {
            state.value = state.value.filter((beauty) => beauty.id !== action.payload.id);
        },

        viewBeauty:(state,action)=>{
            state.value = state.value.filter((beauty) => beauty.id === action.payload.id);
        }

    },
});

export const { addBeauty, deleteB, viewBeauty } = beautySlice.actions;
export default beautySlice.reducer;