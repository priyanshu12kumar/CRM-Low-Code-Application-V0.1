import type { TextAreaComponent } from '../models/TextArea.ts'; 

function TextAreaPreview({ currentComponent }: { currentComponent: TextAreaComponent }) {
    const { placeholder, rows, comment, validationRegex } = currentComponent;
    
    return (
        <div>
            <textarea
                className="w-full p-2 border rounded bg-white text-gray-700 focus:ring-2 focus:ring-orange-300 outline-none"
                placeholder={placeholder}
                rows={rows}
            />

            <div className="mt-2 space-y-1">
                {comment && (
                    <p className="text-xs text-gray-500 italic">
                        ℹ️ {comment}
                    </p>
                )}
                
                {validationRegex && (
                    <div className="flex items-center gap-1">
                        <span className="text-[10px] font-semibold text-orange-700 bg-orange-100 px-2 py-0.5 rounded">
                            Regex: <code className="text-orange-900">{validationRegex}</code>
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TextAreaPreview;