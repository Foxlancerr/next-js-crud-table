"use client";
import Header from "@/components/Header";
import RootComponent from "@/components/RootComponent";
import { store } from "@/store/store";
import React from "react";
import { Provider } from "react-redux";

function page() {
  return (
    <Provider store={store}>
      <Header></Header>
      <RootComponent></RootComponent>
    </Provider>
  );
}

export default page;
