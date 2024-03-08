import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type appState = {
  appState: string;
};

const initialState: appState = {
  appState: ""
};

export const appSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setAppState: (state, action: PayloadAction<string>) => {
      state.appState = action.payload;
    }
  }
});

export const {
  setAppState
} = appSlice.actions;

export default appSlice.reducer;