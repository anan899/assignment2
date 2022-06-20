import {createSlice} from "@reduxjs/toolkit";
import {BeautyData} from "./preload";


let beautyData;

fetch("http://localhost:5000/api").then(
    response=>response.json()
).then(
    data=>{ beautyData = data}
).catch(error=>{
    console.log(error);
})

/*let beautyData1 = (beautyData)=>{
    if(typeof beautyData === 'undefined'){
        beautyData1=[];
    }else{
        beautyData1 = beautyData.beauty1;
    }
}
 */

export const beautySlice = createSlice({
    name: "beauty",
    initialState: { value: BeautyData },
    reducers: {
        addBeauty: (state, action) => {
            state.value.push(action.payload);

            localStorage.removeItem("beauty");
            localStorage.setItem("beauty",JSON.stringify(state.value));
        },

        deleteB: (state, action) => {
            state.value = state.value.filter((beauty) => beauty.Name !== action.payload.Name);
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