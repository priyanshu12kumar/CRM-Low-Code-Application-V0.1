import { useEffect, useState } from 'react';
import { TextAreaComponent } from '../models/TextArea.ts';

function TextAreaPreview({currentComponent , updateComponentCallback} : 
    {   
        currentComponent: TextAreaComponent ,
        updateComponentCallback : (updatedComponent: any) => void;
    }
) {
    const ComponentId = currentComponent.id ;
    const [label, setLabel] = useState<string>(currentComponent.label);
    const [placeholder, setPlaceholder] = useState<string>(currentComponent.placeholder || "");
    const [regex, setRegex] = useState<string>(currentComponent.validationRegex || "");
    const [comment, setComment] = useState<string>(currentComponent.comment || "");
    const [rows, setRows] = useState<number>(currentComponent.rows || 4);
    const [isMandatory, setIsMandatory] = useState<boolean>(currentComponent.isMandatory || false);

    // Update the parent component whenever any of the local states change
    useEffect(() => {
        updateComponentCallback(new TextAreaComponent(
            ComponentId,
            label,
            "textarea",
            rows,
            isMandatory,
            placeholder,
            comment,
            regex
        ));
    }, [label, placeholder, regex, comment, rows, isMandatory]);

    return (
        <div className="space-y-6">
            
            <div className="flex justify-between items-center border-b pb-2">
                <h3 className="font-bold text-lg text-blue-600">
                    Edit Text Area
                </h3>

                <label className="flex items-center gap-1 text-xs font-semibold text-gray-600 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={isMandatory}
                        onChange={(e) => setIsMandatory(e.target.checked)}
                        className="accent-orange-500"
                    />
                    Mandatory
                </label>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {/* Label Selection */}
                <div>
                    <label className="block mb-1 text-sm font-semibold">Display Label:</label>
                    <input
                        type="text"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        className="block w-full p-2 border rounded text-sm"
                        placeholder="e.g. Comments"
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {/* Placeholder Selection */}
                <div>
                    <label className="block mb-1 text-sm font-semibold">Placeholder Text:</label>
                    <input
                        type="text"
                        value={placeholder}
                        onChange={(e) => setPlaceholder(e.target.value)}
                        className="block w-full p-2 border rounded text-sm"
                    />
                </div>
                {/* Height Selection */}
                <div>
                    <label className="block mb-1 text-sm font-semibold">Height (Rows):</label>
                    <input
                        type="number"
                        value={rows}
                        onChange={(e) => setRows(parseInt(e.target.value) || 2)}
                        className="block w-full p-2 border rounded text-sm"
                        min="2"
                        max="10"
                    />
                </div>
            </div>

            {/* Regex Validation Field */}
            <div>
                <label className="block mb-1 text-sm font-semibold">Validation (Regex Pattern):</label>
                <input
                    type="text"
                    value={regex}
                    onChange={(e) => setRegex(e.target.value)}
                    className="block w-full p-2 border rounded text-sm font-mono text-blue-600"
                    placeholder="e.g. ^[a-zA-Z0-9 ]+$"
                />
                <p className="text-[10px] text-gray-400 mt-1">Leave blank for no validation.</p>
            </div>

            {/* Comment Box */}
            <div>
                <label className="block mb-1 text-sm font-semibold">Comment / Instructions:</label>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full p-2 border rounded text-sm"
                    placeholder="Help text for the user..."
                    rows={2}
                />
            </div>
        </div>
    );
}

export default TextAreaPreview;