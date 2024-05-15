"use client";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import InputBox from "./InputBox";
import { IoClose } from "react-icons/io5";
import { IProduct, productsListArr } from "@/assets/constant";

interface IDialogBoxProps {
  setDailogBoxOpen: (id: boolean) => void;
  handleSave: (event: React.FormEvent<HTMLFormElement>) => void;
  setDialogBoxFormData: React.Dispatch<React.SetStateAction<IProduct | null>>
  dialogBoxFormData:IProduct | null
}
function DialogBox({ setDailogBoxOpen, handleSave,dialogBoxFormData,setDialogBoxFormData }: IDialogBoxProps) {


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = event.target;
    setDialogBoxFormData(prevState => {
      if (!prevState) return prevState;
      return {
        ...prevState,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };
  

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-white z-10 top-0 left-0 fixed">
      <span
        className="text-4xl cursor-pointer absolute right-5 top-5"
        onClick={() => setDailogBoxOpen(false)}
      >
        <IoClose></IoClose>
      </span>
      <form
        onSubmit={handleSave}
        id="product-form"
        className="bg-slate-200 py-10 px-10 rounded-lg w-2/5 flex flex-col gap-y-3 "
      >
        <InputBox
          onChange={handleInputChange}
          value={dialogBoxFormData?.["Product Name"]}
          inputType="text"
          label="Product Name"
          placeHolder="Edit your product name..."
        ></InputBox>
        <InputBox
         onChange={handleInputChange}
         value={dialogBoxFormData?.category}
          inputType="text"
          label="category"
          placeHolder="Edit your product category..."
        ></InputBox>
        <InputBox
         onChange={handleInputChange}
         value={dialogBoxFormData?.price}
          inputType="number"
          label="price"
          placeHolder="Edit your product price..."
        ></InputBox>

        <select
          name="status"
          id="status"
          onChange={handleInputChange}
          value={dialogBoxFormData?.status}
          className="outline-none mt-4 text-sm soutline-none border-none py-3 rounded-md px-3"
        >
          {["pending", "complete", "close"].map((st) => {
            return (
              <option key={st} value={st
              } className="">
                {st.toUpperCase()}
              </option>
            );
          })}
        </select>

        <div className="flex justify-between items-center gap-5 mt-3">
          <button
            onClick={() => setDailogBoxOpen(false)}
            className="text-lg px-2 flex-grow rounded-full py-2 bg-red-400 text-black hover:bg-red-800 hover:text-white duration-100"
          >
            close
          </button>
          <button
            className="text-lg px-2 py-2 rounded-full flex-grow bg-green-400 text-black hover:bg-green-800 hover:text-white duration-10"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default DialogBox;
