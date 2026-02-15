import type { TextInputComponent } from '../models/TextInput.ts';

function TextInputPreview({ currentComponent }: { currentComponent: TextInputComponent }) {
    return (
        <div>
            <input
                type={currentComponent.inputDataType} // Dynamically sets type (email, password, etc)
                className="block w-full p-2 border rounded bg-white text-gray-700"
                placeholder={currentComponent.placeholder}
            />
            
            {/* COMMENT DISPLAY */}
            {currentComponent.comment && (
                <p className="mt-1 text-xs text-gray-500 italic">*{currentComponent.comment}</p>
            )}

            {/* VALIDATION DISPLAY (Visual hint) */}
            {currentComponent.validationRegex && (
                <div className="mt-1">
                    <span className="text-[10px] bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">
                        Rule: {currentComponent.validationRegex}
                    </span>
                </div>
            )}
        </div>
    );
}

export default TextInputPreview;