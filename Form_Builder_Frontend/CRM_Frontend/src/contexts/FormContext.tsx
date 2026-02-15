
import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { FormState } from '../types';
import { FormManager } from '../services/FormManager';

interface FormContextType {
  state: FormState;
  setState: (newState: FormState) => void;
  addField: (type: string) => void;
  updateField: (id: string, updates: any) => void;
  removeField: (id: string) => void;
  selectField: (id: string | null) => void;
  moveField: (id: string, dir: 'up' | 'down') => void;
  setMetadata: (name: string) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<FormState>(FormManager.createInitialState());

  const addField = (type: string) => setState(s => FormManager.addField(s, type));
  const selectField = (id: string | null) => setState(s => ({ ...s, selectedFieldId: id }));
  const removeField = (id: string) => setState(s => ({ ...s, fields: s.fields.filter(f => f.inputId !== id), selectedFieldId: s.selectedFieldId === id ? null : s.selectedFieldId }));
  const updateField = (id: string, updates: any) => setState(s => FormManager.updateField(s, id, updates));
  const moveField = (id: string, dir: 'up' | 'down') => setState(s => FormManager.moveField(s, id, dir));
  const setMetadata = (name: string) => setState(s => ({ ...s, metadata: { ...s.metadata, name } }));

  return (
    <FormContext.Provider value={{ state , setState , addField, updateField, removeField, selectField, moveField, setMetadata }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () : FormContextType => {
  const context = useContext(FormContext);
  if (!context) throw new Error("useForm must be used within FormProvider");
  return context;
};
