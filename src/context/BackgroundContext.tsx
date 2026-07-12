"use client";

import { createContext, useContext, ReactNode, Dispatch, SetStateAction, useState } from "react";

type BackgroundContextType = {
  backgroundClass: string;
  setBackgroundClass: Dispatch<SetStateAction<string>>;
};

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

export const BackgroundProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [backgroundClass, setBackgroundClass] = useState("bg-background");
  return (
    <BackgroundContext.Provider value={{ backgroundClass, setBackgroundClass }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => {
  const ctx = useContext(BackgroundContext);
  if (!ctx) throw new Error("useBackground must be used within BackgroundProvider");
  return ctx;
};
