import React from "react";
import type { FormState } from "../types";

interface Props {
  onUpload: (data: FormState, fileName: string) => void;
}

const UploadSection: React.FC<Props> = ({ onUpload }) => {
  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const text = await file.text();
    try {
      const json = JSON.parse(text) as FormState;
      onUpload(json, file.name);
    } catch {
      alert("Invalid JSON file");
    }
  };

  return (
    <div className="bg-gray-900 p-4 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold text-purple-400 mb-4">
        Upload JSON
      </h2>
      <input
        type="file"
        accept=".json"
        onChange={handleFileChange}
        className="text-sm text-gray-300"
      />
    </div>
  );
};

export default UploadSection;
