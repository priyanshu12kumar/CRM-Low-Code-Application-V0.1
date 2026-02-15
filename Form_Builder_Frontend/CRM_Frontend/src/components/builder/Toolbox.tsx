
import React from 'react';
import { useForm } from '../../contexts/FormContext';

const Toolbox: React.FC = () => {
  const { addField } = useForm();
  const tools = [
    { type: "text", label: "Text Input", icon: "🔤" },
    { type: "textarea", label: "Text Area", icon: "📝" },
    { type: "radio", label: "Multiple Choice", icon: "🔘" },
    { type: "checkbox", label: "Checkboxes", icon: "☑️" },
    { type: "dropdown", label: "Dropdown", icon: "▼" },
  ];

  return (
    <aside className="w-64 bg-white border-r p-6 flex flex-col gap-3 overflow-y-auto h-full">
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Components</h3>
      {tools.map(tool => (
        <button
          key={tool.type}
          onClick={() => addField(tool.type)}
          className="flex items-center p-3 rounded-xl border border-slate-100 hover:border-indigo-500 hover:bg-indigo-50 transition-all text-slate-600 hover:text-indigo-600 font-medium group"
        >
          <span className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-indigo-100 flex items-center justify-center mr-3 text-lg">
            {tool.icon}
          </span>
          {tool.label}
        </button>
      ))}
    </aside>
  );
};

export default Toolbox;
