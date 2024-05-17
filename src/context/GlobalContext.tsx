"use client";
import {
  ReactNode,
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";
interface IGlobalState {
  isDropDownOpen: Boolean;
  setIsDropDownOpen: Dispatch<SetStateAction<boolean>>;
  isCopied: boolean;
  setIsCopied: Dispatch<SetStateAction<boolean>>;
  selectedBoxId: number | null;
  setSelectedBoxId: Dispatch<SetStateAction<number | null>>;
}
export const GlobalContext = createContext<IGlobalState | undefined>(undefined);

export function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [selectedBoxId, setSelectedBoxId] = useState<null | number>(null);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        isDropDownOpen,
        setIsDropDownOpen,
        isCopied,
        setIsCopied,
        selectedBoxId,
        setSelectedBoxId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
