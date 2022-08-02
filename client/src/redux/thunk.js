import { createAsyncThunk } from '@reduxjs/toolkit';
import { Get_Beauty, Add_Beauty,Delete_Beauty,Update_Beauty } from './actionType';
import action from './Actions';

export const getBeautyAsync = createAsyncThunk(
    Get_Beauty,
    async () => {
        return await action.getBeauty();
    }
);

export const addBeautyAsync = createAsyncThunk(
    Add_Beauty,
    async ({Name,Spouse,Title,Introduction}) => {
        return await action.addBeauty( Name,Spouse,Title,Introduction );
    }
);

export const deleteBeautyAsync = createAsyncThunk(
    Delete_Beauty,
    async (id) => {
        return await action.deleteBeauty(id);
    }
);

export const updateBeautyAsync = createAsyncThunk(
    Update_Beauty,
    async ({id,Name,Spouse,Title,Introduction}) => {
        return await action.updateBeauty({id,Name,Spouse,Title,Introduction});
    }
);
