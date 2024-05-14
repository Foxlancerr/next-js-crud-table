'use client'
import Image from "next/image";
import Table from "@/components/Table";
import InputBox from "@/components/InputBox";
import DialogBox from "@/components/DialogBox";
import { useState } from "react";

export default function Home() {
  const [dailogBoxOpen, setDailogBoxOpen] = useState(false)

  return (
    <main className="flex justify-center bg-slate-200 rounded-sm w-4/5 mx-auto my-20 p-5 relative">
      {/* dialog box */}

      {dailogBoxOpen && <DialogBox setDailogBoxOpen={setDailogBoxOpen} />}
      <Table setDailogBoxOpen={setDailogBoxOpen}></Table>
    </main>
  );
}
