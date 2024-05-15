'use client'
import RootComponent  from "@/components/RootComponent";
import { store } from "@/store/store";
import React from "react";
import { Provider } from "react-redux";

function page() {
  return (
    <Provider store={store}>
      <RootComponent></RootComponent>
    </Provider>
  );
}

export default page;
