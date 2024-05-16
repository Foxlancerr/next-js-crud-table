import React from "react";
import metaMaskIcon from "@/assets/icons/metamask.svg";
import Image from "next/image";

function MenuList() {
  const menus = [
    {
      title: "connect",
      icon: metaMaskIcon,
    },
    {
      title: "disconnect",
      icon: metaMaskIcon,
    },
  ];

  function connectMetaMaskWallet(key:string){
    if(key == "connect"){
        console.log('connected')
    }
    else{
        console.log("disconnected")
    }
  }
  return (
    <div className="w-max absolute top-[120%] right-0 flex flex-col text-black gap-y-3 bg-slate-100 rounded-md p-4">
      {menus.map((item, index) => {
        return (
          <div
          onClick={()=>connectMetaMaskWallet(item.title)}
          key={index} className={`flex gap-x-2 items-start cursor-pointer hover:bg-slate-200 rounded-md duration-150`}>
            <Image
              src={metaMaskIcon}
              alt="Metamask-icon"
              className="w-5 h-5 cursor-pointer object-cover"
            ></Image>

            <h1 className={`text-sm font-bold `}>{item.title}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default MenuList;
