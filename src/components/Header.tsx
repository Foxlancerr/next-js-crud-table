"use client";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import MetamaskIcon from "@/assets/icons/metamask.svg";
import { useDispatch, useSelector } from "react-redux";
import { IoCopyOutline } from "react-icons/io5";

import { logOutUser } from "@/features/User/UserSlice";
import { LuUserCircle } from "react-icons/lu";
import { RootState } from "@/store/store";
import { shortenEthAddress, connectMetaMask } from "@/utils/metamaskConnect";
import { copyTextToClipboard } from "@/utils/clipCopyText";
import { GlobalContext, IGlobalState } from "@/context/GlobalContext";
import MetamaskBox from "./MetamaskBox";
import { metamaskBoxOpenHandlar } from "@/features/MetaMaskBox/MetaMaskBoxSlice";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

function Header() {
  const {
    isCopied,
    isDropDownOpen,
    setIsDropDownOpen,
    setIsCopied,
    isMetaMaskBoxOpen,
    setIsMetaMaskBoxOpen,
  } = useContext(GlobalContext) as IGlobalState;

  const { address, isConnected } = useWeb3ModalAccount();
  console.log(isConnected,address)

  const dispatch = useDispatch();
  const isAuthentic = useSelector(
    (state: RootState) => state.userReducer.isLogIn
  );
  const userDetails = useSelector(
    (state: RootState) => state.userReducer.userData
  );

  const handleCopyClick = () => {
    setIsDropDownOpen(false);
    copyTextToClipboard(userDetails.address)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropDownOpen(false);
      }
    };

    if (isDropDownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropDownOpen]);

  return (
    <>
      {isMetaMaskBoxOpen && <MetamaskBox />}
      <nav
      style={{
        background:" #232B2B"
      }}
      className="py-2 px-10 shadow-sm z-[99] sticky top-0 left-0 flex justify-between items-center">
        <h1 className="text-white font-bold">NextJs-App</h1>

        <div className="flex gap-2 items-center">
          {isCopied && (
            <span className="absolute bottom-0 left-[50%] bg-slate-200 py-1 px-4">
              Copied!
            </span>
          )}

          {false ? (
            <div className="flex items-center">
              <div className="relative">
                <h2
                  onClick={() => setIsDropDownOpen((prev) => !prev)}
                  className={`text-sm cursor-pointer rounded-full duration-150 ${
                    isDropDownOpen && "bg-gray-300/50"
                  }`}
                >
                  {shortenEthAddress(userDetails?.address)}
                </h2>

                {isDropDownOpen && (
                  <span
                    ref={dropdownRef}
                    className=" text-sm flex gap-y-2 flex-col absolute top-6 right-0 py-2 px-3 rounded-lg w-max bg-slate-300/50"
                  >
                    <h1
                      className="flex gap-x-2 items-center cursor-pointer"
                      onClick={handleCopyClick}
                    >
                      Copy Address
                      <span className="text-xl">
                        <IoCopyOutline></IoCopyOutline>
                      </span>
                    </h1>
                    <h1
                      className="cursor-pointer"
                      onClick={() => {
                        dispatch(logOutUser());
                        setIsDropDownOpen(false);
                      }}
                    >
                      Disconnect Wallet
                    </h1>
                  </span>
                )}
              </div>

              <div
                className="p-2  text-blue-800 text-3xl  relative rounded-full "
                onClick={() => dispatch(metamaskBoxOpenHandlar())}
              >
                <LuUserCircle className="cursor-pointer object-cover hover:rotate-[15deg] hover:scale-[2] duration-200"></LuUserCircle>
              </div>
            </div>
          ) : (
            // here i will used the web3Model button to show the box having differents wallets
            <span>
              <w3m-button />
            </span>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
