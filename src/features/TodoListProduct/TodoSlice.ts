import { productsListArr } from "./../../assets/constant";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/assets/constant";

const initialState = {
  productsListArr,
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    deleteProductFromList: (state, action: PayloadAction<number>) => {
      const index = state.productsListArr.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1) {
        state.productsListArr.splice(index, 1);
      }
    },
    updateProductAtList: (
      state,
      action: PayloadAction<{ uniqueId: number; productUpdatedData: IProduct }>
    ) => {
      console.log(action.payload.productUpdatedData)
      console.log("update product successfully")
      const updateProductIndex = state.productsListArr.findIndex(
        (product) => product.id === action.payload.uniqueId
      );
      if (updateProductIndex !== -1) {
        state.productsListArr[updateProductIndex] = {
          ...state.productsListArr[updateProductIndex],
          ...action.payload.productUpdatedData,
        };
      }
    },
    createProductAtList: (
      state,
      action: PayloadAction<{ newDialogBoxProductFormData: IProduct }>
    ) => {
      console.log("called create product successfully")
      state.productsListArr.push({
        ...action.payload.newDialogBoxProductFormData,
        id: state.productsListArr.length + 1,
      });
    },
  },
});

export const {
  deleteProductFromList,
  updateProductAtList,
  createProductAtList,
} = productSlice.actions;

export default productSlice.reducer;
