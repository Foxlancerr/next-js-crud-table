"use client";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import MetamaskIcon from "@/assets/icons/metamask.svg";
import { useDispatch, useSelector } from "react-redux";
import { IoCopyOutline } from "react-icons/io5";

import {
  metamaskBoxCloseHandlar,
  metamaskBoxOpenHandlar,
} from "@/features/MetamaskBox/metaMaskBoxSlice";
import { RiLogoutCircleRLine } from "react-icons/ri";
import {
  logInUser,
  logOutUser,
  resetUserDetails,
  storeUserDetails,
} from "@/features/User/UserSlice";
import { LuUserCircle } from "react-icons/lu";
import { RootState } from "@/store/store";
import { shortenEthAddress, connectMetaMask } from "@/utils/metamaskConnect";
import { copyTextToClipboard } from "@/utils/clipCopyText";
import { GlobalContext } from "@/context/GlobalContext";

function Header() {
  const { isCopied, isDropDownOpen, setIsDropDownOpen, setIsCopied } =
    useContext(GlobalContext);

  const dispatch = useDispatch();
  const isAuthentic = useSelector(
    (state: RootState) => state.userReducer.isLogIn
  );
  const userDetails = useSelector(
    (state: RootState) => state.userReducer.userData
  );

  const handleConnect = async () => {
    const account = await connectMetaMask();
    if (account) {
      alert("Connection successful: " + account.address);
      dispatch(storeUserDetails({ user: account }));
      dispatch(logInUser());
    } else {
      alert("Something went wrong");
    }
    dispatch(metamaskBoxCloseHandlar());
  };

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
    <nav className="py-2 px-10 bg-slate-200/60 shadow-sm shadow-black/10 z-[99] sticky top-0 left-0 flex justify-between items-center">
      <h1 className="text-black font-bold">NextJs-App</h1>

      <div className="flex gap-2 items-center">
        {isCopied && (
          <span className="absolute bottom-0 left-[50%] bg-slate-200 py-1 px-4">
            Copied!
          </span>
        )}

        {isAuthentic ? (
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
          <button
            onClick={() => {
              handleConnect();
            }}
            className="py-2 px-4 bg-blue-700 font-bold text-white rounded-lg"
          >
            Connect wallet
          </button>
        )}
      </div>
    </nav>
  );
}

export default Header;
