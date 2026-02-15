
import React from 'react';
import type { FieldInstance } from '../../types';
import { useFormBuilder } from '../../contexts/FormBuilderContext';

interface FieldItemProps {
  field: FieldInstance;
  index: number;
}

const FieldItem: React.FC<FieldItemProps> = ({ field, index }) => {
  const { removeById, setSubmitted, moveElement, fields } = useFormBuilder();

  return (
    <div className={`bg-white rounded-xl shadow-sm border p-5 transition-all ${field.isSubmitted ? 'border-green-200 bg-green-50/10' : 'border-slate-200'}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-[10px] font-bold text-indigo-500 uppercase bg-indigo-50 px-2 py-1 rounded mb-1 inline-block">
            {field.inputType}
          </span>
          <h4 className="text-lg font-medium text-slate-800">
            {field.InputComponent.label || "Untitled Field"}
          </h4>
        </div>
        
        <div className="flex items-center space-x-2">
           <button 
            disabled={index === 0}
            onClick={() => moveElement(index, index - 1)}
            className="p-1 hover:bg-slate-100 rounded text-slate-400 disabled:opacity-30"
          >
            ↑
          </button>
          <button 
            disabled={index === fields.length - 1}
            onClick={() => moveElement(index, index + 1)}
            className="p-1 hover:bg-slate-100 rounded text-slate-400 disabled:opacity-30"
          >
            ↓
          </button>
          <button 
            onClick={() => removeById(field.inputId)}
            className="p-1 hover:bg-red-50 text-red-400 hover:text-red-600 rounded"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="py-4 border-y border-slate-100 my-4 text-slate-400 italic text-sm">
        {/* 
          STUB: Replace this with your actual form component renderer 
          e.g. <ComponentRenderer component={field.InputComponent} />
        */}
        Component Visualization Stub for {field.inputType}
      </div>

      <div className="flex justify-end space-x-3">
        <button 
          onClick={() => setSubmitted(field.inputId, !field.isSubmitted)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
            field.isSubmitted 
              ? 'bg-green-100 text-green-700 hover:bg-green-200' 
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
        >
          {field.isSubmitted ? 'Edit Configuration' : 'Save Config'}
        </button>
      </div>
    </div>
  );
};

export default FieldItem;
