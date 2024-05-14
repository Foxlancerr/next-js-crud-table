"use client";
import Table from "@/components/Table";
import DialogBox from "@/components/DialogBox";
import { useState } from "react";
import { IProduct, productsListArr } from "@/assets/constant";

export default function Home() {
  const [productList, setProductList] = useState(productsListArr);
  const [dailogBoxOpen, setDailogBoxOpen] = useState(false);
  const [selectedBoxId, setSelectedBoxId] = useState<null | number>(null);

  function handleSave(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const formData = {};
    for (let [key, value] of form) {
      (formData as any)[key] =
        value === ""
          ? (productList[selectedBoxId as number] as IProduct)[
              key as keyof IProduct
            ]
          : value;
    }

    // console.log(formData);

    setProductList((prev) => {
      const updatedProductList = [...prev];
      const index = updatedProductList.findIndex(
        (product) => product.id === selectedBoxId
      );
      if (index !== -1) {
        updatedProductList[index] = {
          ...updatedProductList[index],
          ...formData,
          price:Number(formData.price)
        };
      }

      return updatedProductList;
    });

    setDailogBoxOpen(false);
  }

  return (
    <main className="flex justify-center bg-slate-200 rounded-sm w-4/5 mx-auto my-20 p-5 relative">
      {/* dialog box */}

      {dailogBoxOpen && (
        <DialogBox
          setDailogBoxOpen={setDailogBoxOpen}
          handleSave={handleSave}
        />
      )}
      <Table
        setSelectedBoxId={setSelectedBoxId}
        setDailogBoxOpen={setDailogBoxOpen}
        productList={productList}
        setProductList={setProductList}
      ></Table>
    </main>
  );
}
