'use client'
import { IProduct, productsListArr } from "@/assets/constant"
import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

import { useState } from "react";

interface ITableProps {
    setDailogBoxOpen: (id: boolean) => void
}
function Table({ setDailogBoxOpen }: ITableProps) {

    const [productList, setProductList] = useState(productsListArr)
    function calculateTotalAmount() {
        const calculateTotalsPrice: number = productList.reduce((acc: number, current: IProduct) => {
            return acc + current.price
        }, 0)
        return calculateTotalsPrice
    }

    function onEdit(id: number) {
        setDailogBoxOpen(true)
        setProductList((prev) => {
            return prev.filter(prod => prod.id !== id);
        });
    }
    function onDelete(id: number) {
        setProductList((prev) => {
            return prev.filter(prod => prod.id !== id);
        });
    }
    return (
        <div className="w-full flex flex-col relative">

            <div className="grid grid-cols-6 rounded-sm justify-between items-center py-3 px-5 bg-gray-700 text-white">
                <h1>#</h1>
                <h1>Product Name</h1>
                <h1>category</h1>
                <h1>price</h1>
                <h1>pending</h1>
                <div className="flex gap-3 ml-auto">
                    <h1>Edit</h1>
                    <h1>delete</h1>
                </div>
            </div>


            {/* tbody */}
            <div>
                {productList.map((product: IProduct) => (
                    <div key={product.id} className="border-b-2 border-black/5 py-3 px-5 grid grid-cols-6 text-sm gap-y-3 justify-between items-center">
                        <h4>{product.id}</h4>
                        <h4>{product["Product Name"]}</h4>
                        <h4>{product.category}</h4>
                        <h4>{product.price}</h4>
                        <h4 className={`w-max rounded-full text-center py-2 px-3 
                        ${product.status === 'complete' && 'bg-green-300'}
                        ${product.status === 'pending' && 'bg-orange-300'}
                        ${product.status === 'close' && 'bg-red-200 line-through'}
                        `}>{product.status}</h4>
                        <div className="flex gap-3 items-end ml-auto" >
                            <h4 className="w-max bg-green-400 text-black rounded-full p-2 text-lg hover:bg-green-800 cursor-pointer duration-100 transition-all hover:text-white"
                                onClick={onEdit}
                            ><MdEdit></MdEdit></h4>
                            <h4
                                className="w-max bg-red-400 text-black rounded-full p-2 text-lg hover:bg-red-800 cursor-pointer duration-100 transition-all hover:text-white"
                                onClick={() => {
                                    onDelete(product.id)
                                }}

                            ><MdDeleteOutline></MdDeleteOutline></h4>
                        </div>
                    </div>
                ))}
                <div className="flex py-3 rounded-sm items-center bg-blue-200 mt-3 px-5 justify-between text-sm">
                    <h1 className="text-xl font-semibold">Total</h1>
                    <h1>{calculateTotalAmount()}</h1>
                </div>
            </div>

        </div>
    )
}

export default Table