"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import MetamaskIcon from "@/assets/icons/metamask.svg";
import { hasMetaMaskInstall } from "@/utils/metamaskConnect";
import { useDispatch } from "react-redux";
import { metamaskBoxOpenHandlar } from "@/features/MetamaskBox/metaMaskBoxSlice";

function Header() {
 
  const dispatch = useDispatch();

  // check that metamask is installed or not
  useEffect(() => {
    hasMetaMaskInstall();
  }, []);

  return (
    <nav className="py-2 px-10 bg-blue-700 text-white z-20 sticky top-0 left-0 flex justify-between items-center">
      <h1>NextJs-App</h1>

      <div
        className="p-3 relative rounded-full bg-white/25"
        onClick={() => dispatch(metamaskBoxOpenHandlar())}
      >
        <Image
          src={MetamaskIcon}
          alt="Metamask-icon"
          className="w-7 h-7 cursor-pointer object-cover hover:rotate-[15deg] hover:scale-[2] duration-200"
        ></Image>
      </div>
    </nav>
  );
}

export default Header;
