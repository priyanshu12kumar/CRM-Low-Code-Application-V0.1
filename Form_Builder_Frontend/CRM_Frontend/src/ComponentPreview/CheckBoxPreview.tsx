import type { CheckboxComponent } from '../models/Checkbox.ts';

function CheckBoxPreview({ currentComponent }: { currentComponent: CheckboxComponent }) {
        return (
            <div>
                <div className="flex flex-col space-y-2">
                    {currentComponent.options.map((opt, index) => (
                        <label key={index} className="inline-flex items-center cursor-pointer">
                            <input 
                                type="checkbox" 
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" 
                            />
                            <span className="ml-2 text-gray-700">{opt}</span>
                        </label>
                    ))}
                </div>

                {currentComponent.comment && (
                    <div className="mt-4 p-2 bg-blue-50 border-l-4 border-blue-400">
                        <p className="text-xs text-blue-700 italic">{currentComponent.comment}</p>
                    </div>
                )}
            </div>
        );
}

export default CheckBoxPreview;