"use client";
import Image from "next/image";
import React from "react";
import MetamaskIcon from "@/assets/icons/metamask.svg";
import { useDispatch, useSelector } from "react-redux";
import { metamaskBoxOpenHandlar } from "@/features/MetamaskBox/metaMaskBoxSlice";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { logOutUser, resetUserDetails } from "@/features/User/UserSlice";
import { LuUserCircle } from "react-icons/lu";

function Header() {
  const dispatch = useDispatch();

  return (
    <nav className="py-2 px-10 bg-slate-200/30 shadow-sm shadow-black/10 z-20 sticky top-0 left-0 flex justify-between items-center">
      <h1 className="text-black font-bold" >NextJs-App</h1>

      <div className="flex gap-2 items-center">
        <div
          className="p-2  text-blue-800 text-3xl  relative rounded-full "
          onClick={() => dispatch(metamaskBoxOpenHandlar())}
        >
          <LuUserCircle className="cursor-pointer object-cover hover:rotate-[15deg] hover:scale-[2] duration-200"></LuUserCircle>
        </div>
        <div
          className="p-2 text-red-700 relative text-3xl cursor-pointer hover:translate-x-1 duration-200 rounded-full"
          onClick={() => {
            dispatch(logOutUser())
            dispatch(resetUserDetails())
          }}
        >
          <RiLogoutCircleRLine />
        </div>
      </div>
    </nav>
  );
}

export default Header;
