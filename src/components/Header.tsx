"use client";
import Image from "next/image";
import React, { useState } from "react";
import MetamaskIcon from "@/assets/icons/metamask.svg";
import MenuList from "./MenuList";

function Header() {
  const [metamaskMenuOpen, setMetaMaskMenuOpen] = useState<boolean>(false);

  return (
    <nav className="py-2 px-10 bg-gray-700 text-white z-20 sticky top-0 left-0 flex justify-between items-center">
      <h1>NextJs-App</h1>

      <div
        className="p-3 relative rounded-full bg-white/5"
        onClick={() => setMetaMaskMenuOpen((prev) => !metamaskMenuOpen)}
      >
        <Image
          src={MetamaskIcon}
          alt="Metamask-icon"
          className="w-7 h-7 cursor-pointer object-cover"
        ></Image>

        {metamaskMenuOpen && <MenuList></MenuList>}
      </div>
    </nav>
  );
}

export default Header;
