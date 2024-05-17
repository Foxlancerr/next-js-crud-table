import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/features/TodoListProduct/TodoSlice";
import dialogBoxReducer from "@/features/DialogBox/DialogBoxSlice";
import metaMaskBoxReducer from "@/features/MetamaskBox/metaMaskBoxSlice";
import userReducer from "@/features/User/UserSlice";

export const store = configureStore({
  reducer: {
    productReducer,
    dialogBoxReducer,
    metaMaskBoxReducer,
    userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

store.subscribe(() => {
  console.log(store.getState());
});
