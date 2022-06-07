import {createSlice} from "@reduxjs/toolkit";
import {BeautyData} from "./preload";

export const beautySlice = createSlice({
    name: "beauty",
    initialState: { value: JSON.parse(localStorage.getItem("beauty")) },
    reducers: {
        addBeauty: (state, action) => {
            state.value.push(action.payload);
            localStorage.removeItem("beauty");
            localStorage.setItem("beauty",JSON.stringify(state.value));
        },

        deleteB: (state, action) => {
            state.value = state.value.filter((beauty) => beauty.id !== action.payload.id);
            localStorage.removeItem("beauty");
            localStorage.setItem("beauty",JSON.stringify(state.value));
        },

        viewBeauty:(state,action)=>{
            state.value = state.value.filter((beauty) => beauty.id === action.payload.id);
        }

    },
});

export const { addBeauty, deleteB, viewBeauty } = beautySlice.actions;
export default beautySlice.reducer;