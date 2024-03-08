import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./features/appSlice";

export const store = configureStore({
  reducer: {
    appState: appSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;