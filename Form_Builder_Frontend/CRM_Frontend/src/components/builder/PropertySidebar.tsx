
import React from 'react';
import { useForm } from '../../contexts/FormContext';
import type { RadioButtonComponent } from '../../models/RadioButton';
import type { CheckboxComponent } from '../../models/Checkbox';
import type { DropdownComponent } from '../../models/Dropdown';
import type { TextAreaComponent } from '../../models/TextArea';
import type { TextInputComponent } from '../../models/TextInput';
import TextInputPreview from '../../ComponentConfig/TextInputConfigBar';
import TextAreaPreview from '../../ComponentConfig/TextAreaConfigBar';
import DropDownPreview from '../../ComponentConfig/DropDownConfigBar';
import CheckBoxPreview from '../../ComponentConfig/CheckBoxConfigBar';
import RadioButtonPreview from '../../ComponentConfig/RadioButtonConfigBar';
import ResizableLayout from '../../UIFeatures/ResizableLayout';
import type { FormComponent } from '../../models/BaseComponent';

const PropertySidebar: React.FC = () => {
  const { state, updateField, selectField , removeField } = useForm();
  const selectedField = state.fields.find(f => f.inputId === state.selectedFieldId);
  const [UpdatedComponent, setUpdatedComponent] = React.useState<FormComponent>(selectedField ? selectedField.InputComponent : {} as FormComponent);

  if (!selectedField) {
    return (
      <aside className="w-80 bg-white border-l p-8 flex flex-col items-center justify-center text-center text-slate-400">
        <p>Select a component to edit its properties</p>
      </aside>
    );
  }

  const comp = selectedField.InputComponent;

  return (
    <ResizableLayout>
    
    <div className="flex justify-between items-center mb-6">
      <h3 className="font-bold text-slate-800">Properties</h3>
      <button onClick={() => selectField(null)} className="text-slate-400 hover:text-slate-600">✕</button>
    </div>
    
    <div className="mt-6">
      {(() => {
        console.log("Current Component in PreviewSection:", comp.type);
        switch (comp.type) {
          case "text":
            return <TextInputPreview   currentComponent={comp as TextInputComponent} updateComponentCallback={setUpdatedComponent} />;
          case "textarea":
            return <TextAreaPreview currentComponent={comp as TextAreaComponent} updateComponentCallback={setUpdatedComponent} />;
          case "dropdown":
            return <DropDownPreview  currentComponent={comp as DropdownComponent} updateComponentCallback={setUpdatedComponent} />;
          case "checkbox":
            return <CheckBoxPreview  currentComponent={comp as CheckboxComponent} updateComponentCallback={setUpdatedComponent} />;
          case "radio":
            return <RadioButtonPreview currentComponent={comp as RadioButtonComponent} updateComponentCallback={setUpdatedComponent} />;
          default:
            return <>default</>;
        }
      })()}
    </div>

    <div className="flex gap-2 pt-2">
      <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow"
          onClick={() => updateField(selectedField.inputId, UpdatedComponent)}>
          Save Group
      </button>
      <button 
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md"
          onClick={() => removeField(selectedField.inputId)}>
          Delete Component
      </button>
    </div>

    </ResizableLayout>
  );
};

export default PropertySidebar;
