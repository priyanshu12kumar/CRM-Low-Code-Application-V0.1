
import React, { createContext, useContext, useState, type ReactNode, useCallback } from 'react';
import type { FieldInstance } from '../types';
import type { FormComponent } from '../models/BaseComponent';

interface FormBuilderContextType {
  fields: FieldInstance[];
  setFields: React.Dispatch<React.SetStateAction<FieldInstance[]>>;
  addElement: (element: FieldInstance) => void;
  removeById: (id: string) => void;
  updateComponent: (id: string, component: FormComponent) => void;
  setSubmitted: (id: string, status: boolean) => void;
  moveElement: (from: number, to: number) => void;
}

const FormBuilderContext = createContext<FormBuilderContextType | undefined>(undefined);

export const FormBuilderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fields, setFields] = useState<FieldInstance[]>([]);

  const addElement = useCallback((element: FieldInstance) => {
    setFields(prev => [...prev, element]);
  }, []);

  const removeById = useCallback((id: string) => {
    setFields(prev => prev.filter(f => f.inputId !== id));
  }, []);

  const updateComponent = useCallback((id: string, component: FormComponent) => {
    setFields(prev => prev.map(f => f.inputId === id ? { ...f, InputComponent: component } : f));
  }, []);

  const setSubmitted = useCallback((id: string, status: boolean) => {
    setFields(prev => prev.map(f => f.inputId === id ? { ...f, isSubmitted: status } : f));
  }, []);

  const moveElement = useCallback((from: number, to: number) => {
    setFields(prev => {
      const result = [...prev];
      const [removed] = result.splice(from, 1);
      result.splice(to, 0, removed);
      return result;
    });
  }, []);

  return (
    <FormBuilderContext.Provider value={{ fields, setFields, addElement, removeById, updateComponent, setSubmitted, moveElement }}>
      {children}
    </FormBuilderContext.Provider>
  );
};

export const useFormBuilder = () => {
  const context = useContext(FormBuilderContext);
  if (!context) throw new Error("useFormBuilder must be used within FormBuilderProvider");
  return context;
};
