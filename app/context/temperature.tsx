'use client'
import { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction } from "react";

type Props = {
  children: ReactNode;
};

type CelsiusContextValue = {
  celsius: boolean;
  setCelsius: Dispatch<SetStateAction<boolean>>;
  setTemperatureUnit: (value: boolean) => void;
};

const CelsiusContext = createContext<CelsiusContextValue | undefined>(undefined);

export function CelsiusProvider({ children }: Props) {
  const [celsius, setCelsius] = useState<boolean>(true);

  const setTemperatureUnit = (value: boolean) => {
    setCelsius(value);
  };

  const value: CelsiusContextValue = {
    celsius,
    setCelsius,
    setTemperatureUnit
  };

  return (
    <CelsiusContext.Provider value={value}>
      {children}
    </CelsiusContext.Provider>
  );
}

export function useCelsius() {
  const context = useContext(CelsiusContext);

  if (!context) {
    throw new Error('useCelsius must be used within a CelsiusProvider');
  }

  return context;
}
