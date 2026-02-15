import type { DropdownComponent } from '../models/Dropdown.ts';

function DropDownPreview({currentComponent}: { currentComponent: DropdownComponent }) {
    return (
        <div>
            <select className="w-full p-2 border rounded bg-white text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none cursor-pointer">
                <option value="" disabled selected>{currentComponent.placeholder}</option>
                {currentComponent.options.map((opt, index) => (
                    <option key={index} value={opt.toLowerCase().replace(/\s+/g, '-')}>
                        {opt}
                    </option>
                ))}
            </select>

            {currentComponent.comment && (
                <p className="mt-2 text-xs text-gray-500 italic bg-white p-2 rounded border-l-2 border-blue-400">
                    {currentComponent.comment}
                </p>
            )}
        </div>
    );
}
export default DropDownPreview;