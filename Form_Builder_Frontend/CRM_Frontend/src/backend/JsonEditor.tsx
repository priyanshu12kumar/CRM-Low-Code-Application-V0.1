import React, { useEffect, useState } from "react";
import type { FormState } from "../types";

interface Props {
  data: FormState;
  onChange: (updated: FormState) => void;
}

const JsonEditor: React.FC<Props> = ({ data, onChange }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(JSON.stringify(data, null, 2));
  }, [data]);

  const handleChange = (value: string) => {
    setText(value);
    try {
      const parsed = JSON.parse(value);
      onChange(parsed);
    } catch {
      // ignore invalid JSON while typing
    }
  };

  return (
    <div className="bg-gray-900 p-4 rounded-2xl shadow-lg flex flex-col h-full">
      <h2 className="text-xl font-bold text-yellow-400 mb-4">
        JSON Editor
      </h2>
      <textarea
        value={text}
        onChange={(e) => handleChange(e.target.value)}
        className="flex-1 bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm resize-none outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </div>
  );
};

export default JsonEditor;
