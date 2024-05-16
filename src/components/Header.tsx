"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import MetamaskIcon from "@/assets/icons/metamask.svg";
import { hasMetaMaskInstall } from "@/utils/metamaskConnect";
import { useDispatch, useSelector } from "react-redux";
import { metamaskBoxOpenHandlar } from "@/features/MetamaskBox/metaMaskBoxSlice";
import { RootState } from "@/store/store";

function Header() {
 
  const dispatch = useDispatch();

  // check that metamask is installed or not
  useEffect(() => {
    hasMetaMaskInstall();
  }, []);

  return (
    <nav className="py-2 px-10 bg-gray-700 text-white z-20 sticky top-0 left-0 flex justify-between items-center">
      <h1>NextJs-App</h1>

      <div
        className="p-3 relative rounded-full bg-white/5"
        onClick={() => dispatch(metamaskBoxOpenHandlar())}
      >
        <Image
          src={MetamaskIcon}
          alt="Metamask-icon"
          className="w-7 h-7 cursor-pointer object-cover"
        ></Image>
      </div>
    </nav>
  );
}

export default Header;
