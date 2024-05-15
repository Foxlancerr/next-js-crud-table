"use client";
import Table from "@/components/Table";
import DialogBox from "@/components/DialogBox";
import { useState } from "react";
import { EStatus, IProduct, productsListArr } from "@/assets/constant";
import { FaPlus } from "react-icons/fa6";

export default function Home() {
  const [productList, setProductList] = useState(productsListArr);
  const [dialogBoxFormData, setDialogBoxFormData] =
    useState<Partial<IProduct> | null>({});
  const [dailogBoxOpen, setDailogBoxOpen] = useState(false);
  const [selectedBoxId, setSelectedBoxId] = useState<null | number>(null);

  function handleSave(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const formData: Record<string, string> = {};
    for (let [key, value] of form) {
      (formData as any)[key] =
        value === ""
          ? (productList[selectedBoxId as number] as IProduct)[
              key as keyof IProduct
            ]
          : value;
    }

    const index = productList.findIndex(
      (product) => product.id === selectedBoxId
    );
    if (index !== -1) {
      setProductList((prev) => {
        const updatedProductList = [...prev];

        updatedProductList[index] = {
          ...updatedProductList[index],
          ...formData,
          price: Number(formData.price),
        };

        return updatedProductList;
      });
    } else {
      setProductList((prev) => {
        
      });
    }

    setDailogBoxOpen(false);
  }

  return (
    <main className="flex justify-center bg-slate-100 rounded-sm w-[95%] md:w-4/5 mx-auto my-10 md:my-20 md:p-5 relative">
      {/* dialog box */}

      <div
        onClick={() => setDailogBoxOpen(true)}
        className="absolute -top-16 right-0 flex gap-x-2 items-center cursor-pointer border-blue-800/10 border-[1px] bg-slate-100 px-5 py-2 rounded-full"
      >
        <h1 className="text-lg font-semibold text-blue-500">Create New</h1>
        <span className="text-[15px] rounded-full p-2 bg-blue-500 text-white">
          <FaPlus></FaPlus>
        </span>
      </div>
      {dailogBoxOpen && (
        <DialogBox
          dialogBoxFormData={dialogBoxFormData}
          setDialogBoxFormData={setDialogBoxFormData}
          setDailogBoxOpen={setDailogBoxOpen}
          handleSave={handleSave}
        />
      )}
      <Table
        setSelectedBoxId={setSelectedBoxId}
        selectedBoxId={selectedBoxId}
        setDailogBoxOpen={setDailogBoxOpen}
        setDialogBoxFormData={setDialogBoxFormData}
        productList={productList}
        setProductList={setProductList}
      ></Table>
    </main>
  );
}
