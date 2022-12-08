import {createSlice } from '@reduxjs/toolkit';


export const flashSlice = createSlice({
  name: 'flash',
  initialState: {
    flashs: [],
  },
  reducers: {
    addFlash: (state, action) => {
      state.flashs = [action.payload, ...state.flashs];
    },
    updateFlash: (state, action) => {
      state.flashs = state.flashs.map((el) =>
        el.id == action.payload.id ? action.payload : el
      );
    },
    deleteFlash: (state, action) => {
      state.flashs = state.flashs.filter((el) => el.id != action.payload);
    },
  },
});

export const {
  addFlash,
  updateFlash,
  deleteFlash,
} = flashSlice.actions;


export const selectFlash = (state) => state.flash.flashs;


export default flashSlice.reducer;
