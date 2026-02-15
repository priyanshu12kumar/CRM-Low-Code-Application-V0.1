import { useEffect, useState } from 'react';
import { RadioButtonComponent } from '../models/RadioButton.ts';
import type { RadioSelectionMode , RadioOption} from '../types';

function RadioButtonPreview({currentComponent , updateComponentCallback} :
    {   
        currentComponent: RadioButtonComponent ,
        updateComponentCallback : (updatedComponent: any) => void;
    }
) {

    const ComponentId = currentComponent.id ; 
    const [groupLabel, setGroupLabel] = useState<string>(currentComponent.label);
    const [options, setOptions] = useState<RadioOption[]>(currentComponent.options);
    const [comment, setComment] = useState<string>(currentComponent.comment || "");
    const [isMandatory, setIsMandatory] = useState<boolean>(currentComponent.isMandatory || false);
    const [currentRadioSelectionMode , setRadioSelectionMode] = useState<RadioSelectionMode>(currentComponent.mode || "single_choice");
    const [defaultIndex, setDefaultIndex] = useState<number>(currentComponent.options.findIndex(opt => opt.isChecked) || 0);

    useEffect(() => {
        updateComponentCallback(new RadioButtonComponent(
            ComponentId,
            groupLabel,
            currentRadioSelectionMode,
            options,
            isMandatory,
            comment,
            defaultIndex
        ));
    }, [groupLabel, options, isMandatory, comment, currentRadioSelectionMode , defaultIndex]);


    const addOption = () => {
        const nextIndex = options.length + 1;
        setOptions([
            ...options,
            { id: crypto.randomUUID(), index: nextIndex , label: `Option ${nextIndex}`, isChecked: false }
        ]);
    };

    const updateOption = (index: number, field: keyof RadioOption, value: string) => {
        const newOptions = [...options];
        newOptions[index] = { ...newOptions[index], [field]: value };
        setOptions(newOptions);
    };

    const removeOption = (index: number) => {
        if (options.length > 1) {
            setOptions(options.filter((_, i) => i !== index));
            if (defaultIndex === index) setDefaultIndex(0);
        }
    };


    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-2">
                <h3 className="font-bold text-lg text-blue-600">Edit Radio Buttons</h3>

                <label className="flex items-center gap-1 text-xs font-semibold text-gray-600 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={isMandatory}
                        onChange={(e) => setIsMandatory(e.target.checked)}
                        className="text-blue-600"
                    />
                    Mandatory
                </label>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block mb-1 text-sm font-semibold">Group Label:</label>
                    <input
                        type="text"
                        value={groupLabel}
                        onChange={(e) => setGroupLabel(e.target.value)}
                        className="block w-full p-2 border rounded text-sm"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm font-semibold">Selection Mode:</label>
                    <select 
                        value={currentRadioSelectionMode}
                        onChange={(e) => setRadioSelectionMode(e.target.value as RadioSelectionMode)}
                        className="block w-full p-2 border rounded text-sm bg-blue-50 border-blue-200"
                    >
                        <option value="single_choice">Single Choice (Same Name)</option>
                        <option value="independent">Independent (Different Names)</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-semibold">Options & Default Selection:</label>
                {options.map((opt, index) => (
                    <div key={index} className="flex items-center gap-2 bg-gray-50 p-2 rounded border border-dashed border-gray-300">
                        <input 
                            type="radio" 
                            checked={defaultIndex === index} 
                            onChange={() => setDefaultIndex(index)}
                            title="Set as default"
                            className="w-4 h-4 accent-blue-500 cursor-pointer"
                        />
                        <div className="flex-1 grid grid-cols-2 gap-2">
                            <input
                                type="text"
                                value={opt.label}
                                onChange={(e) => updateOption(index, 'label', e.target.value)}
                                className="p-1.5 border rounded text-xs"
                                placeholder="Label"
                            />
                        </div>
                        <button 
                            onClick={() => removeOption(index)}
                            className="text-gray-400 hover:text-red-500 px-1"
                        >✕</button>
                    </div>
                ))}
                <button onClick={addOption} className="text-xs text-blue-600 font-bold mt-1">+ Add Radio Button</button>
            </div>

            <div>
                <label className="block mb-1 text-sm font-semibold">Comment / Instructions:</label>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full p-2 border rounded text-sm"
                    rows={2}
                />
            </div>
        </div>
    );
}

export default RadioButtonPreview;
