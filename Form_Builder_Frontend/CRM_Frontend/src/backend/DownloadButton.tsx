import React from "react";
import type { FormState } from "../types";

interface Props {
  data: FormState;
  fileName: string;
}

const DownloadButton: React.FC<Props> = ({ data, fileName }) => {
  const download = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName || "data.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={download}
      className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-xl text-black font-semibold transition-all"
    >
      Download JSON
    </button>
  );
};

export default DownloadButton;
