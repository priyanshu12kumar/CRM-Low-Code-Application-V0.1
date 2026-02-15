
import React from 'react';
import Toolbox from '../components/builder/Toolbox';
import Canvas from '../components/builder/Canvas';
import PropertySidebar from '../components/builder/PropertySidebar';
import { useSystemState } from '../contexts/SystemStateContext';
import DownloadFormJsonButton from '../json/DownloadFormJsonButton';
import { ImportJsonToRenderForm } from '../json/UploadFormFromJson';
import { useForm } from '../contexts/FormContext';

const BuilderPage: React.FC = () => {
  const { setState : setSystemState } = useSystemState();
  const { state , setState } = useForm();

  return (
    <div className="flex flex-col h-screen bg-slate-50">
      <header className="h-16 bg-white border-b px-8 flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg"></div>
          <span className="font-bold text-xl tracking-tight">Form Builder</span>
        </div>
        <div className="flex items-center gap-4">
            <DownloadFormJsonButton formState={state} />
            <ImportJsonToRenderForm onImport={(data) => {
              setState(data) ;
              console.log("Imported form data:", data);
            }} />
          <button 
            onClick={() => setSystemState('preview')}
            className="px-5 py-2 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all"
          >
            Preview
          </button>
          <button onClick={() => setSystemState('login')} className="text-slate-400 font-medium px-4 py-2 hover:bg-slate-50 rounded-lg">Exit</button>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden">
        <Toolbox />
        <Canvas />
        <PropertySidebar />
      </main>
    </div>
  );
};

export default BuilderPage;
