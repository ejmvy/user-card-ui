import { configureStore } from "@reduxjs/toolkit";
import { personSlice } from "./personSlice";

export const store = configureStore({
  reducer: {
    person: personSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
