import { useState } from "react";
import type { RadioButtonComponent } from "../models/RadioButton";
import type { RadioOption } from "../types";

function RadioButtonPreview({ currentComponent }: { currentComponent: RadioButtonComponent }) {
    const [options, setOptions] = useState<RadioOption[]>(currentComponent.options);

    const handleOptionClick = (currentId: string) => {
        const newOptions: RadioOption[] = options.map(option =>
            option.id === currentId
            ? { ...option, isChecked: !option.isChecked }
            : option
        );

        setOptions(newOptions);
    };


    return (
    <div> 
        <div className="flex flex-col space-y-2">
            {currentComponent.options.map((opt, index) => (
                <label key={index} className="inline-flex items-center group cursor-pointer">
                <input
                    type="radio"
                    name={currentComponent.id}
                    defaultChecked={currentComponent.defaultIndex === index}
                    className="w-4 h-4 text-rose-600 border-gray-300 focus:ring-rose-500"
                    {...(!(currentComponent.mode === 'single_choice') && {
                    checked: opt.isChecked,
                    onClick: () => handleOptionClick(opt.id),
                    readOnly: true, // prevents React warning since we control checked
                    })}
                />
                <span className="ml-2 text-gray-700 group-hover:text-rose-700 transition-colors">
                    {opt.label}
                </span>
                </label>
            ))}
        </div>

        {currentComponent.comment && (
            <div className="mt-4 p-2 bg-white border rounded text-xs text-gray-500 italic flex items-start gap-2">
                <span className="text-rose-400">●</span> {currentComponent.comment}
            </div>
        )}
    </div>
);
}

export default RadioButtonPreview;