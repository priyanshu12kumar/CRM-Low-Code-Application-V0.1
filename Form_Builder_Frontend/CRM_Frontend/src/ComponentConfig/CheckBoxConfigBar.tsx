import { useState , useEffect } from 'react';
import { CheckboxComponent } from '../models/Checkbox.ts';

function CheckBoxPreview({currentComponent , updateComponentCallback} :
    {   
        currentComponent: CheckboxComponent ,
        updateComponentCallback : (updatedComponent: any) => void;
    }
){
    const ComponentId = currentComponent.id ; 
    const [groupLabel, setGroupLabel] = useState<string>(currentComponent.label);
    const [options, setOptions] = useState<string[]>(currentComponent.options);
    const [comment, setComment] = useState<string>(currentComponent.comment || "");
    const [isMandatory, setIsMandatory] = useState<boolean>(currentComponent.isMandatory || false);

    useEffect(() => {
        updateComponentCallback(new CheckboxComponent(
            ComponentId,
            groupLabel,
            options,
            isMandatory,
            comment
        ));
    },
    [groupLabel, options, isMandatory, comment]);

    // Handler to update a specific option text
    const updateOption = (index: number, value: string) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    // Handler to add a new checkbox field
    const addOption = () => {
        setOptions([...options, `Option ${options.length + 1}`]);
    };

    // Handler to remove a specific checkbox field
    const removeOption = (index: number) => {
        if (options.length > 1) {
            setOptions(options.filter((_, i) => i !== index));
        }
    };


    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-2">
                <h3 className="font-bold text-lg text-blue-600">
                    Edit Checkbox Group
                </h3>

                <label className="flex items-center gap-1 text-xs font-semibold text-gray-600 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={isMandatory}
                        onChange={(e) => setIsMandatory(e.target.checked)}
                        className="accent-blue-500"
                    />
                    Mandatory
                </label>
            </div>

            
            {/* Main Label */}
            <div>
                <label className="block mb-1 text-sm font-semibold">Group Label:</label>
                <input
                    type="text"
                    value={groupLabel}
                    onChange={(e) => setGroupLabel(e.target.value)}
                    className="block w-full p-2 border rounded text-gray-700"
                />
            </div>

            {/* Dynamic Options List */}
            <div className="space-y-2">
                <label className="block text-sm font-semibold">Checkboxes:</label>
                {options.map((opt, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <input
                            type="text"
                            value={opt}
                            onChange={(e) => updateOption(index, e.target.value)}
                            className="flex-1 p-2 border rounded text-sm"
                            placeholder={`Option ${index + 1}`}
                        />
                        <button 
                            onClick={() => removeOption(index)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded"
                            title="Delete Option"
                        >
                            ✕
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={addOption}
                    className="mt-2 flex items-center gap-1 text-sm text-blue-600 font-medium hover:underline"
                >
                    + Add Option
                </button>
            </div>

            {/* Comment Field */}
            <div>
                <label className="block mb-1 text-sm font-semibold">Comment / Description:</label>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full p-2 border rounded text-sm"
                    placeholder="Add instructions for users..."
                    rows={2}
                />
            </div>
        </div>
    );
}

export default CheckBoxPreview;