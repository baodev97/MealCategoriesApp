import { createSlice } from "@reduxjs/toolkit";


export interface FavoritesState {
    ids:string[]
}

const initialState: FavoritesState={
    ids:[]
}

const favoritesSlice = createSlice({
    name:'favorites',
    initialState,
    reducers:{
        addFavorite: (state,action)=>{
            state.ids.push(action.payload.id);
        },
        removefavorite:(state, action)=>{
            state.ids.slice(state.ids.indexOf(action.payload.id),1);
        }
    }
})

export const {addFavorite,removefavorite} = favoritesSlice.actions

export default favoritesSlice.reducer;