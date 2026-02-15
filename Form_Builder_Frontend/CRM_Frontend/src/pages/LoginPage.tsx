
import React from 'react';
import { useSystemState } from '../contexts/SystemStateContext';

const LoginPage: React.FC = () => {
  const { setState } = useSystemState();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-2 text-slate-800">Form Creator</h1>
        <p className="text-slate-500 mb-8">Build beautiful dynamic forms in seconds.</p>
      
        <button 
          onClick={() => setState('form')}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
          >
          Open Form Builder
        </button>

        <button 
          onClick={() => setState('dashboard')}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 mt-4"
          >
          Open Backend Dashboard
        </button>
      </div>
    </div>)};


export default LoginPage;
