import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/features/TodoListProduct/TodoSlice";
import dialogBoxReducer from "@/features/DialogBox/DialogBoxSlice";
import metaMaskBoxReducer from "@/features/MetamaskBox/metaMaskBoxSlice";
export const store = configureStore({
  reducer: {
    productReducer,
    dialogBoxReducer,
    metaMaskBoxReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
