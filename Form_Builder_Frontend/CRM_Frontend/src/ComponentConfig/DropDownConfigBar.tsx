import { useEffect, useState } from 'react';
import {DropdownComponent} from '../models/Dropdown.ts';

function DropDownPreview({currentComponent , updateComponentCallback} :
    {   
        currentComponent: DropdownComponent ,
        updateComponentCallback : (updatedComponent: any) => void;
    }
){  
    const ComponentId = currentComponent.id ; 
    const [groupLabel, setGroupLabel] = useState<string>(currentComponent.label);
    const [options, setOptions] = useState<string[]>(currentComponent.options);
    const [comment, setComment] = useState<string>(currentComponent.comment || "");
    const [dropDownPlaceholder , setdropDownPlaceholder] = useState<string>(currentComponent.placeholder || "");
    const [isMandatory, setIsMandatory] = useState<boolean>(currentComponent.isMandatory || false);

    useEffect(() => {
        updateComponentCallback(new DropdownComponent(
            ComponentId,
            groupLabel,
            options,
            isMandatory,
            dropDownPlaceholder,
            comment
        ));
    }, [groupLabel, options, isMandatory, dropDownPlaceholder, comment]);


    // Add a new empty option to the list
    const addOption = () => {
        setOptions([...options, `New Option ${options.length + 1}`]);
    };

    // Update the text of a specific option
    const updateOption = (index: number, value: string) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    // Remove an option from the list
    const removeOption = (index: number) => {
        if (options.length > 1) {
            setOptions(options.filter((_, i) => i !== index));
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-2">
                <h3 className="font-bold text-lg text-blue-600">
                    Edit Dropdown Menu
                </h3>

                <label className="flex items-center gap-1 text-xs font-semibold text-gray-600 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={isMandatory}
                        onChange={(e) => setIsMandatory(e.target.checked)}
                        className="accent-blue-600"
                    />
                    Mandatory
                </label>
            </div>

            
            {/* Main Label */}
            <div>
                <label className="block mb-1 text-sm font-semibold">Field Label:</label>
                <input
                    type="text"
                    value={groupLabel}
                    onChange={(e) => setGroupLabel(e.target.value)}
                    className="block w-full p-2 border rounded text-gray-700"
                    placeholder="e.g., Select from following Countries"
                />
            </div>

            {/* Dynamic Options List */}
            <div className="space-y-2">
                <label className="block text-sm font-semibold">Dropdown Options:</label>
                {options.map((opt, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <input
                            type="text"
                            value={opt}
                            onChange={(e) => updateOption(index, e.target.value)}
                            className="flex-1 p-2 border rounded text-sm focus:ring-2 focus:ring-blue-200 outline-none"
                            placeholder={`Option ${index + 1}`}
                        />
                        <button 
                            onClick={() => removeOption(index)}
                            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                            title="Delete Option"
                        >
                            ✕
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={addOption}
                    className="mt-1 text-sm text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1"
                >
                    <span>+</span> Add Menu Item
                </button>

            </div>
            
            {/* Placeholder Label */}
            <div>
                <label className="block mb-1 text-sm font-semibold">Placeholder Label</label>
                <input
                    type="text"
                    onChange={(e) => setdropDownPlaceholder(e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="e.g., Choose your Country"
                />
            </div>


            {/* Comment Box */}
            <div>
                <label className="block mb-1 text-sm font-semibold">Comment / Help Text:</label>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full p-2 border rounded text-sm"
                    placeholder="Instructions for the user..."
                    rows={2}
                />
            </div>
        </div>
    );  
}

export default DropDownPreview;