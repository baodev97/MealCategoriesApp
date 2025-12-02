import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FavoritesState {
  ids: string[];
}

const initialState: FavoritesState = {
  ids: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<{ id: string }>) => {
      state.ids.push(action.payload.id);
    },
    removefavorite: (state, action: PayloadAction<{ id: string }>) => {
      state.ids = state.ids.filter((id) => id !== action.payload.id);
    },
  },
});

export const { addFavorite, removefavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
