
import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { FormDetails } from '../types';

interface FormDetailsContextType {
  formDetails: FormDetails;
  setFormDetails: React.Dispatch<React.SetStateAction<FormDetails>>;
}

const FormDetailsContext = createContext<FormDetailsContextType | undefined>(undefined);

export const FormDetailsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formDetails, setFormDetails] = useState<FormDetails>({ FormName: "My New Form" });
  return (
    <FormDetailsContext.Provider value={{ formDetails, setFormDetails }}>
      {children}
    </FormDetailsContext.Provider>
  );
};

export const useFormDetails = () => {
  const context = useContext(FormDetailsContext);
  if (!context) throw new Error("useFormDetails must be used within FormDetailsProvider");
  return context;
};
