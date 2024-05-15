"use client";
import { IProduct, productsListArr } from "@/assets/constant";
import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

import { Dispatch, SetStateAction, useState } from "react";
import { FaPlus } from "react-icons/fa6";

interface ITableProps {
  setDailogBoxOpen: (id: boolean) => void;
  productList: IProduct[];
  selectedBoxId: number | null;
  setSelectedBoxId: Dispatch<SetStateAction<number | null>>;
  setProductList: Dispatch<SetStateAction<IProduct[]>>;
  setDialogBoxFormData: React.Dispatch<
    React.SetStateAction<Partial<IProduct> | null>
  >;
}
function Table({
  setDailogBoxOpen,
  setSelectedBoxId,
  selectedBoxId,
  productList,
  setProductList,
  setDialogBoxFormData,
}: ITableProps) {
  //   const [productList, setProductList] = useState(productsListArr);
  function calculateTotalAmount() {
    const calculateTotalsPrice: number = productList.reduce(
      (acc: number, current: IProduct) => {
        return acc + current.price;
      },
      0
    );
    return calculateTotalsPrice;
  }

  function onEdit(id: number) {
    setDailogBoxOpen(true);
    setDialogBoxFormData(productList?.[id]);
    setSelectedBoxId(id);
  }

  function onDelete(id: number) {
    setProductList((prev) => {
      return prev.filter((prod) => prod.id !== id);
    });
  }
  return (
    <div className="w-full flex flex-col relative">
      <div></div>
      <div className="grid md:grid-cols-6 grid-cols-5 rounded-sm md:justify-between justify-start items-center md:py-3 md:px-5 py-2 px-2 bg-gray-700 text-white md:text-lg text-[12px]">
        <h1 className="hidden md:block">#</h1>
        <h1>Product Name</h1>
        <h1>Category</h1>
        <h1>Price</h1>
        <h1 className="mx-auto">Status</h1>
        <div className="flex gap-3 ml-auto">
          <h1>Action</h1>
        </div>
      </div>

      {/* tbody */}
      <div>
        {productList?.map((product: IProduct, index: number) => (
          <div
            key={product?.id}
            className="border-b-2 text-[10px] md:text-sm  border-black/5 last:border-none md:py-3 py-1  md:px-5 px-2 grid grid-cols-6 text-sm gap-y-3 justify-between items-center"
          >
            <h4 className="hidden md:block">{product?.id}</h4>
            <h4>{product["Product Name"]}</h4>
            <h4 className="md:m-0 mx-auto">{product?.category}</h4>
            <h4 className="md:m-0 mx-auto">{product?.price}</h4>
            <h4
              className={` rounded-full mx-auto text-center py-2 px-3 
                        ${product?.status === "complete" && "bg-green-300"}
                        ${product?.status === "pending" && "bg-orange-300"}
                        ${
                          product?.status === "close" &&
                          "bg-red-200 line-through"
                        }
                        `}
            >
              {product?.status}
            </h4>
            <div className="flex md:gap-y-2 gap-1 ml-auto justify-end">
              <h4
                className="w-max bg-green-400 text-black rounded-full p-2 text-lg hover:bg-green-800 cursor-pointer duration-100 transition-all hover:text-white"
                onClick={() => {
                  onEdit(product.id);
                }}
              >
                <MdEdit></MdEdit>
              </h4>
              <h4
                className="w-max bg-red-400 text-black rounded-full p-2 text-lg hover:bg-red-800 cursor-pointer duration-100 transition-all hover:text-white"
                onClick={() => {
                  onDelete(product.id);
                }}
              >
                <MdDeleteOutline></MdDeleteOutline>
              </h4>
            </div>
          </div>
        ))}
        <div className="flex py-3 rounded-sm items-center bg-blue-400 text-white md:px-5 px-1 justify-between text-sm">
          <h1 className="text-xl font-semibold">Total</h1>
          <h1>{calculateTotalAmount()}</h1>
        </div>
      </div>
    </div>
  );
}

export default Table;
