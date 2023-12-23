import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trace: 0,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    moveNextAction: (state)=>{
      state.trace = state.trace + 1;
    },
    movePrevAction: (state)=>{
        state.trace = state.trace - 1;
      }
  },
});

export const {moveNextAction, movePrevAction} = formSlice.actions;
export default formSlice.reducer;
