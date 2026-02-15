import { useEffect, useState } from 'react';
import { TextInputComponent } from '../models/TextInput.ts';
import type { InputDataType } from '../types.ts';

function TextInputPreview({currentComponent , updateComponentCallback} :
    {   
        currentComponent: TextInputComponent ,
        updateComponentCallback : (updatedComponent: TextInputComponent) => void;
    }
) {
    const ComponentId = currentComponent.id ;
    const [inputlabel, setInputLabel] = useState<string>(currentComponent.label || "") ;
    const [inputType, setInputType] = useState<InputDataType>(currentComponent.inputDataType || "text") ;
    const [placeholder, setPlaceHolder] = useState<string>(currentComponent.placeholder || "") ;
    const [validation, setValidation] = useState<string>(currentComponent.validationRegex || "") ;
    const [comment, setComment] = useState<string>(currentComponent.comment || "") ;
    const [isMandatory, setIsMandatory] = useState<boolean>(currentComponent.isMandatory || false) ;

    useEffect(() => {
        updateComponentCallback(new TextInputComponent(
            ComponentId,
            inputlabel,
            inputType,
            isMandatory,
            placeholder,
            comment,
            validation
        ));
    }, [inputlabel, inputType, placeholder, validation, comment, isMandatory]) ;

    return (
        <div className="p-4 border rounded bg-white shadow-sm space-y-3">
            <div className="flex justify-between items-center border-b pb-2">
                <h3 className="font-bold text-lg text-blue-600">Edit Input Field</h3>

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

            
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block mb-1 text-sm font-semibold">Label Name:</label>
                    <input
                        type="text"
                        value={inputlabel}
                        onChange={(e) => setInputLabel(e.target.value)}
                        className="block w-full p-2 border rounded text-gray-700"
                        placeholder="e.g. Full Name"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm font-semibold">Input Type:</label>
                    <select 
                        value={inputType}
                        onChange={(e) => setInputType(e.target.value as InputDataType)}
                        className="block w-full p-2 border rounded text-gray-700"
                    >
                        <option value="text">Text</option>
                        <option value="number">Number</option>
                        <option value="email">Email</option>
                        <option value="password">Password</option>
                        <option value="date">Date</option>
                        <option value="file">FilePath</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block mb-1 text-sm font-semibold">Placeholder:</label>
                <input
                    type="text"
                    value={placeholder}
                    onChange={(e) => setPlaceHolder(e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="e.g. John Doe"
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block mb-1 text-sm font-semibold">Validation (Regex/Rule):</label>
                    <input
                        type="text"
                        value={validation}
                        onChange={(e) => setValidation(e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="e.g. required"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm font-semibold">Comment/Help Text:</label>
                    <input
                        type="text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="Small hint text"
                    />
                </div>
            </div>
        </div>
    );
}

export default TextInputPreview;