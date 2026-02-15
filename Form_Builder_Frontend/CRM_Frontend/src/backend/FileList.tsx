import React from "react";

interface Props {
  files: string[];
  selected?: string;
  onSelect: (name: string) => void;
}

const FileList: React.FC<Props> = ({ files, selected, onSelect }) => {
  return (
    <div className="bg-gray-900 p-4 rounded-2xl shadow-lg h-full">
      <h2 className="text-xl font-bold text-cyan-400 mb-4">
        Saved JSON Files
      </h2>
      <div className="space-y-2 overflow-y-auto max-h-[400px]">
        {files.map((file) => (
          <button
            key={file}
            onClick={() => onSelect(file)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 
            ${
              selected === file
                ? "bg-cyan-500 text-black"
                : "bg-gray-800 hover:bg-cyan-700 hover:text-white"
            }`}
          >
            {file}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FileList;
