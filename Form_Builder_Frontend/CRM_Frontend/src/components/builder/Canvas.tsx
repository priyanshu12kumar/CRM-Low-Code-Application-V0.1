
import React from 'react';
import { useForm } from '../../contexts/FormContext';
import FieldCard from './FieldCard';

const Canvas: React.FC = () => {
  const { state } = useForm();
  const { setMetadata } = useForm();

  return (
    <div className="flex-1 bg-slate-50 p-10 overflow-y-auto">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <input 
              value={state.metadata.name}
              onChange={(e) => setMetadata(e.target.value)}
              className="text-4xl font-black bg-transparent border-none outline-none text-slate-800 w-full placeholder:text-slate-300"
              placeholder="Form Title..."
            />
          </div>
        </div>

        {state.fields.length === 0 ? (
          <div className="h-64 border-2 border-dashed border-slate-200 rounded-3xl flex items-center justify-center text-slate-400 font-medium">
            Your form is empty. Add a field to get started.
          </div>
        ) : (
          state.fields.map((field, idx) => (
            <FieldCard key={field.inputId} field={field} index={idx} />
          ))
        )}
      </div>
    </div>
  );
};

export default Canvas;
