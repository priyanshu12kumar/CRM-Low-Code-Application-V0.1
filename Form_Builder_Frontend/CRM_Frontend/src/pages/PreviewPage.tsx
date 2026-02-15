
import React from 'react';
import { useForm } from '../contexts/FormContext';
import { useSystemState } from '../contexts/SystemStateContext';
import FieldCard from '../components/builder/FieldCard';

const PreviewPage: React.FC = () => {
  const { state } = useForm();
  const { setState } = useSystemState();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted! Check console for data.");
    console.log("Submitted Data:", state.fields);
  };

  return (

    <div className="min-h-screen bg-white py-16 px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <button onClick={() => setState('form')} className="text-blue-600 font-bold mb-8 flex items-center gap-2">
          ← Return to Editor
        </button>
        <h1 className="text-5xl font-black text-slate-900 mb-4">{state.metadata.name}</h1>
        <form onSubmit={handleSubmit} className="space-y-8 mt-12 border-t pt-12">
          {state.fields.length === 0 ? (
            <div className="h-64 border-2 border-dashed border-slate-200 rounded-3xl flex items-center justify-center text-slate-400 font-medium">
              Your form is empty. Add a field to get started.
            </div>
          ) : (
            state.fields.map((field, idx) => (
              <FieldCard key={field.inputId} field={field} index={idx} />
            ))
          )}
          <button type="submit" className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all shadow-xl">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default PreviewPage;
