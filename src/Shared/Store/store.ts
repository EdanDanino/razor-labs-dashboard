import { configureStore } from "@reduxjs/toolkit";
import insightsReducer from "./insightsSlice";

export const store = configureStore({
  reducer: {
    insights: insightsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
