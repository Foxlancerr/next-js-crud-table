import React from 'react'
import InputBox from './InputBox'
import { IoClose } from "react-icons/io5";

interface IDialogBoxProps {
    setDailogBoxOpen: (id: boolean) => void
}
function DialogBox({ setDailogBoxOpen }: IDialogBoxProps) {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-full bg-white z-10 top-0 left-0 fixed" >
            <span className='text-4xl cursor-pointer absolute right-10 top-10'
                onClick={() => setDailogBoxOpen(false)}
            ><IoClose></IoClose></span>
            <form action="" className="bg-slate-200 py-10 px-10 rounded-lg w-2/5 flex flex-col gap-y-3 ">

                <InputBox
                    label="product Name"
                    placeHolder="Edit your product name"
                ></InputBox>
                <InputBox
                    label="product Name"
                    placeHolder="Edit your product name"
                ></InputBox>
                <InputBox
                    label="product Name"
                    placeHolder="Edit your product name"
                ></InputBox>
                <InputBox
                    label="product Name"
                    placeHolder="Edit your product name"
                ></InputBox>
                <InputBox
                    label="product Name"
                    placeHolder="Edit your product name"
                ></InputBox>

            </form>
        </div >
    )
}

export default DialogBox