import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the state
type TDialogBoxState = {
  dialogModelBox: boolean;
};

// Define the initial state
const initialState: TDialogBoxState = {
  dialogModelBox: false,
};

// Create the slice
export const dialogBoxSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    dialogBoxOpen: (state) => {
      state.dialogModelBox = true;
    },
    dialogBoxClose: (state) => {
      state.dialogModelBox = false;
    },
  },
});

export const { dialogBoxOpen, dialogBoxClose } = dialogBoxSlice.actions;
export default dialogBoxSlice.reducer;
