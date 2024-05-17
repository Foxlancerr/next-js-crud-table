"use client";
import Header from "@/components/Header";
import RootComponent from "@/components/RootComponent";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function HomePage() {
  const isAuthentic = useSelector((state: RootState) => state.userReducer.isLogIn);

  return (
    <>
      <Header />
      <RootComponent />
    </>
  );
}

export default HomePage;
