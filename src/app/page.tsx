"use client";
import Header from "@/components/Header";
import RootComponent from "@/components/RootComponent";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function HomePage() {
  const authenticUser = useSelector((state: RootState) => state.userReducer.isLogIn);
  const router = useRouter();

  useEffect(() => {
    console.log(authenticUser)
    if (!authenticUser) {
      router.push("/signin");
    }else{
      router.push('/')
    }
  }, [authenticUser]);

  return (
    <>
      <Header />
      <RootComponent />
    </>
  );
}

export default HomePage;
