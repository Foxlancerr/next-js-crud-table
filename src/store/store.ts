import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/features/TodoListProduct/TodoSlice";
import dialogBoxReducer from "@/features/DialogBox/DialogBoxSlice";
export const store = configureStore({
  reducer: {
    productReducer,
    dialogBoxReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
