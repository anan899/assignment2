import {createSlice} from "@reduxjs/toolkit";
import {getBeauty} from "./Actions";






export const beautySlice = createSlice({
    name: "beauty",
    initialState: {getBeauty},
    reducers: {
        addBeauty: (state, action) => {
            state.value.push(action.payload);

        },

        deleteB: (state, action) => {
            state.value = state.value.filter((beauty) => beauty.Name !== action.payload.Name);

        },

        updateB:(state,action)=>{

        },


    },
});

export const { addBeauty, deleteB, viewBeauty } = beautySlice.actions;
export default beautySlice.reducer;