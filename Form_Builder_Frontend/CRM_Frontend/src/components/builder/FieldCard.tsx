
import React from 'react';
import type { FieldInstance } from '../../types';
import { useForm } from '../../contexts/FormContext';
import PreviewSection from '../PreviewSection';
import { useSystemState } from '../../contexts/SystemStateContext';

const FieldCard: React.FC<{ field: FieldInstance; index: number }> = ({ field, index }) => {
  const { state, selectField, removeField, moveField } = useForm();
  const isSelected = state.selectedFieldId === field.inputId;
  const { state : systemState } = useSystemState();

  return (
    <div 
      onClick={() => selectField(field.inputId)}
      className={`group bg-white p-6 rounded-2xl shadow-sm border-2 transition-all cursor-pointer ${
        isSelected ? 'border-indigo-500 ring-4 ring-indigo-50 shadow-md' : 'border-transparent hover:border-slate-200'
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <span className="text-slate-300 font-mono text-xs">0{index + 1}</span>
          <h4 className="font-bold text-slate-700">{field.InputComponent.label || "Untilted Field"}</h4>
          {field.InputComponent.isMandatory && <span className="text-red-500 ml-1">*</span>}
        </div>
        
        {!(systemState === 'preview') && (
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={(e) => { e.stopPropagation(); moveField(field.inputId, 'up'); }} className="p-1 hover:bg-slate-100 rounded">↑</button>
            <button onClick={(e) => { e.stopPropagation(); moveField(field.inputId, 'down'); }} className="p-1 hover:bg-slate-100 rounded">↓</button>
            <button onClick={(e) => { e.stopPropagation(); removeField(field.inputId); }} className="p-1 hover:bg-red-50 text-red-400 rounded">✕</button>
          </div>
        )}
      </div>

      <PreviewSection currentComponent={field.InputComponent} />
    </div>
  );
};

export default FieldCard;
