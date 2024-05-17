"use client";
import FormLayout from "@/components/FormLayout";
import MetamaskBox from "@/components/MetamaskBox";
import { metamaskBoxCloseHandlar } from "@/features/MetamaskBox/metaMaskBoxSlice";
import { connectMetaMask } from "@/utils/metamaskConnect";
import Image from "next/image";
import React, { useEffect } from "react";
import metaMaskIcon from "@/assets/icons/metamask.svg";
import { useDispatch, useSelector } from "react-redux";
import { logInUser, storeUserDetails } from "@/features/User/UserSlice";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";

function SignInPage() {
  const dispatch = useDispatch();

  const authenticUser = useSelector(
    (state: RootState) => state.userReducer.isLogIn
  );
  const router = useRouter();

  useEffect(() => {
    console.log(authenticUser);
    if (!authenticUser) {
      router.push("/signin");
    } else {
      router.push("/");
    }
  }, [authenticUser]);

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

  return (
    <FormLayout>
      <div className="mb-2">
        <h1 className="font-bold text-lg">Connect Wallet</h1>
        <p>Choose how you want to connect wallet</p>
      </div>
      <h3 className="text-sm text-slate-400">Popular</h3>
      <div
        onClick={handleConnect}
        className={`group flex gap-x-2 flex-grow border-2 w-full p-3 bg-[#F5F7FB] border-black/10 items-center justify-between cursor-pointer hover:bg-slate-200 rounded-md duration-150`}
      >
        <Image
          src={metaMaskIcon}
          alt="Metamask-icon"
          className="w-7 h-7 cursor-pointer object-cover group-hover:-rotate-[15deg] group-hover:scale-[2] duration-200 "
        />
        <h1 className={`text-lg font-bold `}>Connect</h1>
      </div>
    </FormLayout>
  );
}

export default SignInPage;
