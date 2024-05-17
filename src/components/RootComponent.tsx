"use client";
import { useState } from "react";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  ModelBoxCloseHandlar,
  ModelBoxOpenHandlar,
} from "@/features/ModelBox/ModelBoxSlice";
import {
  createProductAtList,
  updateProductAtList,
} from "@/features/TodoListProduct/TodoSlice";

import { FaPlus } from "react-icons/fa6";
import Table from "@/components/Table";
import DialogBox from "@/components/DialogBox";
import { IProduct } from "@/types/ProductList.type";
import MetamaskBox from "./MetamaskBox";
import UserDetailBox from "./UserDetailBox";

export default function RootComponent() {
  const isUserDetailBoxOpen = useSelector(
    (state: RootState) => state.metaMaskBoxReducer.isBoxOpen
  );
  const [dialogBoxFormData, setDialogBoxFormData] =
    useState<Partial<IProduct> | null>({});
  const [selectedBoxId, setSelectedBoxId] = useState<null | number>(null);

  // redux
  const dispatch = useDispatch();
  const boxModel = useSelector(
    (state: RootState) => state.dialogBoxReducer.isModelBox
  );

  function handleSave(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (selectedBoxId == null) {
      dispatch(
        createProductAtList({
          newDialogBoxProductFormData: dialogBoxFormData as IProduct,
        })
      );
    } else {
      dispatch(
        updateProductAtList({
          uniqueId: selectedBoxId as number,
          productUpdatedData: dialogBoxFormData as IProduct,
        })
      );
    }

    dispatch(ModelBoxCloseHandlar());
    setDialogBoxFormData({});
    setSelectedBoxId(null);
  }

  return (
    <main className="flex justify-center bg-slate-100 rounded-sm w-[95%] md:w-4/5 mx-auto my-10 md:my-20 md:p-5 relative">
      {/* dialog box */}

      <div
        onClick={() => {
          dispatch(ModelBoxOpenHandlar());
        }}
        className="absolute -top-4 right-0 flex gap-x-2 items-center cursor-pointer border-blue-800/10 border-[1px] bg-slate-100 px-5 py-2 rounded-full"
      >
        <h1 className="text-lg font-semibold text-blue-500">Create New</h1>
        <span className="text-[15px] rounded-full p-2 bg-blue-500 text-white">
          <FaPlus></FaPlus>
        </span>
      </div>

      {boxModel && (
        <DialogBox
          dialogBoxFormData={dialogBoxFormData}
          setDialogBoxFormData={setDialogBoxFormData}
          handleSave={handleSave}
        />
      )}
      {isUserDetailBoxOpen && <UserDetailBox />}
      <Table
        selectedBoxId={selectedBoxId}
        setSelectedBoxId={setSelectedBoxId}
        setDialogBoxFormData={setDialogBoxFormData}
      ></Table>
    </main>
  );
}
