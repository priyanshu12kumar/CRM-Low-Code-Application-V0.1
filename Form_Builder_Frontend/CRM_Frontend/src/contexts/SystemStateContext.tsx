
import React, { createContext, useContext, useState,type ReactNode } from 'react';
import type { SystemState } from '../types';

interface SystemStateContextType {
  state: SystemState;
  setState: (state: SystemState) => void;
}

const SystemStateContext = createContext<SystemStateContextType | undefined>(undefined);

export const SystemStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<SystemState>("login");
  return (
    <SystemStateContext.Provider value={{ state, setState }}>
      {children}
    </SystemStateContext.Provider>
  );
};

export const useSystemState = () => {
  const context = useContext(SystemStateContext);
  if (!context) throw new Error("useSystemState must be used within SystemStateProvider");
  return context;
};
